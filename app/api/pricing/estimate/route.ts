import { NextRequest, NextResponse } from "next/server"

import { calculateEstimate, type PricingEstimateInput } from "@/lib/pricing/calculate"
import { pricingRules, type AddOnKey, type BillingPeriod, type ServiceType } from "@/lib/pricing/rules"

const billingPeriods: BillingPeriod[] = ["monthly", "annual"]
const serviceTypes: ServiceType[] = ["live-events", "content-translation", "conversations"]

function isAddOnKey(value: unknown): value is AddOnKey {
    return typeof value === "string" && value in pricingRules.addOns
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as Partial<PricingEstimateInput> & {
            serviceLevel?: unknown
        }

        const billingPeriod: BillingPeriod = billingPeriods.includes(
            body.billingPeriod as BillingPeriod
        )
            ? (body.billingPeriod as BillingPeriod)
            : "monthly"

        const rawServiceType =
            typeof body.serviceType === "string"
                ? body.serviceType
                : typeof body.serviceLevel === "string"
                    ? body.serviceLevel
                    : ""

        const serviceType: ServiceType = serviceTypes.includes(
            rawServiceType as ServiceType
        )
            ? (rawServiceType as ServiceType)
            : "live-events"

        const addOns: AddOnKey[] = Array.isArray(body.addOns)
            ? body.addOns.filter(isAddOnKey)
            : []

        const estimate = calculateEstimate({
            billingPeriod,
            serviceType,
            monthlyUsageMinutes: Number(body.monthlyUsageMinutes ?? 0),
            languageCount: Number(body.languageCount ?? 1),
            addOns,
        })

        return NextResponse.json({ estimate }, { status: 200 })
    } catch {
        return NextResponse.json(
            { error: "Unable to generate estimate. Please verify your inputs." },
            { status: 400 }
        )
    }
}
