import {
    pricingRules,
    type AddOnKey,
    type BillingPeriod,
    type ServiceType,
} from "@/lib/pricing/rules"

export interface PricingEstimateInput {
    billingPeriod: BillingPeriod
    monthlyUsageMinutes: number
    languageCount: number
    serviceType: ServiceType
    addOns: AddOnKey[]
}

export interface PricingEstimateResult {
    currency: "USD"
    monthlyRange: {
        low: number
        high: number
    }
    annualRange: {
        low: number
        high: number
    }
    includedMinutes: number
    overageMinutes: number
    languageMultiplier: number
    addOnMonthlyTotal: number
    addOnOneTimeTotal: number
    assumptions: string[]
    disclaimer: string
}

function clampNumeric(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
}

function getLanguageMultiplier(languageCount: number): number {
    const count = clampNumeric(languageCount, 1, 100)
    const band = pricingRules.languageMultipliers.find(
        (entry) => count >= entry.min && count <= entry.max
    )

    return band?.multiplier ?? 1
}

function addConfidenceBand(value: number): { low: number; high: number } {
    const margin = value * pricingRules.confidenceBand
    return {
        low: Math.max(0, value - margin),
        high: value + margin,
    }
}

function toServiceTypeLabel(serviceType: ServiceType): string {
    if (serviceType === "live-events") {
        return "Live Events"
    }

    if (serviceType === "content-translation") {
        return "Content Translation"
    }

    return "Conversations"
}

export function calculateEstimate(
    input: PricingEstimateInput
): PricingEstimateResult {
    const monthlyUsageMinutes = clampNumeric(
        Number.isFinite(input.monthlyUsageMinutes) ? input.monthlyUsageMinutes : 0,
        0,
        200_000
    )
    const languageCount = clampNumeric(
        Number.isFinite(input.languageCount) ? input.languageCount : 1,
        1,
        100
    )

    const includedMinutes = pricingRules.includedMinutes[input.serviceType]
    const overageMinutes = Math.max(0, monthlyUsageMinutes - includedMinutes)
    const languageMultiplier = getLanguageMultiplier(languageCount)

    const addOnMonthlyTotal = input.addOns.reduce((total, addOn) => {
        return total + pricingRules.addOns[addOn].monthlyFee
    }, 0)

    const addOnOneTimeTotal = input.addOns.reduce((total, addOn) => {
        return total + pricingRules.addOns[addOn].oneTimeFee
    }, 0)

    const baseMonthly = pricingRules.baseMonthlyFee[input.serviceType]
    const overageCost =
        overageMinutes *
        pricingRules.overagePerMinute[input.serviceType] *
        languageMultiplier

    const listMonthly = baseMonthly + overageCost + addOnMonthlyTotal
    const billedMonthly =
        input.billingPeriod === "annual"
            ? listMonthly * (1 - pricingRules.annualDiscountRate)
            : listMonthly
    const annualTotal = billedMonthly * 12 + addOnOneTimeTotal

    const monthlyRange = addConfidenceBand(billedMonthly)
    const annualRange = addConfidenceBand(annualTotal)

    const assumptions = [
        `Service type: ${toServiceTypeLabel(input.serviceType)}`,
        `Languages: ${languageCount} (multiplier x${languageMultiplier.toFixed(2)})`,
        `Included minutes: ${includedMinutes} / month`,
        `Overage minutes: ${overageMinutes} / month`,
        input.billingPeriod === "annual"
            ? `Annual billing discount: ${(pricingRules.annualDiscountRate * 100).toFixed(0)}%`
            : "Monthly billing selected",
    ]

    return {
        currency: pricingRules.currency,
        monthlyRange,
        annualRange,
        includedMinutes,
        overageMinutes,
        languageMultiplier,
        addOnMonthlyTotal,
        addOnOneTimeTotal,
        assumptions,
        disclaimer: pricingRules.disclaimer,
    }
}
