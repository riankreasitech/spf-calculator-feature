export type BillingPeriod = "monthly" | "annual"
export type ServiceType = "live-events" | "content-translation" | "conversations"
export type AddOnKey = "custom-ai" | "onboarding" | "human-director"

export interface LanguageMultiplierBand {
    min: number
    max: number
    multiplier: number
}

export interface AddOnRule {
    label: string
    monthlyFee: number
    oneTimeFee: number
}

export interface PricingRules {
    currency: "USD"
    effectiveDate: string
    annualDiscountRate: number
    confidenceBand: number
    baseMonthlyFee: Record<ServiceType, number>
    includedMinutes: Record<ServiceType, number>
    overagePerMinute: Record<ServiceType, number>
    languageMultipliers: LanguageMultiplierBand[]
    addOns: Record<AddOnKey, AddOnRule>
    disclaimer: string
}

export const pricingRules: PricingRules = {
    currency: "USD",
    effectiveDate: "2026-03-30",
    annualDiscountRate: 0.15,
    confidenceBand: 0.1,
    baseMonthlyFee: {
        "live-events": 289,
        "content-translation": 199,
        conversations: 129,
    },
    includedMinutes: {
        "live-events": 1200,
        "content-translation": 900,
        conversations: 600,
    },
    overagePerMinute: {
        "live-events": 0.12,
        "content-translation": 0.1,
        conversations: 0.15,
    },
    languageMultipliers: [
        { min: 1, max: 1, multiplier: 1 },
        { min: 2, max: 3, multiplier: 1.15 },
        { min: 4, max: 7, multiplier: 1.35 },
        { min: 8, max: 100, multiplier: 1.6 },
    ],
    addOns: {
        "custom-ai": {
            label: "Custom AI Vocabulary",
            monthlyFee: 99,
            oneTimeFee: 0,
        },
        onboarding: {
            label: "Onboarding and Team Training",
            monthlyFee: 0,
            oneTimeFee: 299,
        },
        "human-director": {
            label: "Human-in-the-Loop Director Coverage",
            monthlyFee: 189,
            oneTimeFee: 0,
        },
    },
    disclaimer:
        "Estimate only. Final commercial terms are defined in your approved quote and service agreement.",
}
