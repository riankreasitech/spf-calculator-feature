"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import type {
  PricingEstimateInput,
  PricingEstimateResult
} from "@/lib/pricing/calculate";
import { pricingRules, type AddOnKey } from "@/lib/pricing/rules";
import { cn } from "@/lib/utils";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const defaultInput: PricingEstimateInput = {
  billingPeriod: "monthly",
  monthlyUsageMinutes: 1200,
  languageCount: 3,
  serviceType: "live-events",
  addOns: []
};

const billingPeriodOptions: Array<{
  value: PricingEstimateInput["billingPeriod"];
  label: string;
  description: string;
}> = [
  {
    value: "monthly",
    label: "Monthly",
    description: "Flexible month-to-month billing"
  },
  {
    value: "annual",
    label: "Annual",
    description: "Discounted annual commitment"
  }
];

const serviceTypeOptions: Array<{
  value: PricingEstimateInput["serviceType"];
  label: string;
  description: string;
}> = [
  {
    value: "live-events",
    label: "Live Events",
    description: "Real-time multilingual events and broadcasts"
  },
  {
    value: "content-translation",
    label: "Content Translation",
    description: "Translate videos, documents, and post-event assets"
  },
  {
    value: "conversations",
    label: "Conversations",
    description: "Cross-language 1-on-1 and small-group communication"
  }
];

function toCurrency(value: number): string {
  return currencyFormatter.format(Math.round(value));
}

function trackCalculatorEvent(
  eventName: string,
  payload: Record<string, unknown>
) {
  const eventPayload = { event: eventName, ...payload };

  if (typeof window === "undefined") {
    return;
  }

  const withDataLayer = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };

  if (Array.isArray(withDataLayer.dataLayer)) {
    withDataLayer.dataLayer.push(eventPayload);
  }

  window.dispatchEvent(
    new CustomEvent("spf-analytics", { detail: eventPayload })
  );
}

export function PriceCalculator({ className }: { className?: string }) {
  const [input, setInput] = useState<PricingEstimateInput>(defaultInput);
  const [estimate, setEstimate] = useState<PricingEstimateResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectedAddOns = useMemo(() => new Set(input.addOns), [input.addOns]);

  const quoteHref = useMemo(() => {
    const params = new URLSearchParams({
      billingPeriod: input.billingPeriod,
      monthlyUsageMinutes: String(input.monthlyUsageMinutes),
      languageCount: String(input.languageCount),
      serviceType: input.serviceType,
      addOns: input.addOns.join(","),
      monthlyEstimateLow: estimate
        ? String(Math.round(estimate.monthlyRange.low))
        : "",
      monthlyEstimateHigh: estimate
        ? String(Math.round(estimate.monthlyRange.high))
        : ""
    });

    return `/request-quote?${params.toString()}`;
  }, [estimate, input]);

  const runEstimate = useCallback(async () => {
    trackCalculatorEvent("calculator_start", {
      billingPeriod: input.billingPeriod,
      serviceType: input.serviceType
    });

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/pricing/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      const data = (await response.json()) as {
        estimate: PricingEstimateResult;
      };
      setEstimate(data.estimate);

      trackCalculatorEvent("calculator_complete", {
        billingPeriod: input.billingPeriod,
        serviceType: input.serviceType,
        monthlyEstimateLow: Math.round(data.estimate.monthlyRange.low),
        monthlyEstimateHigh: Math.round(data.estimate.monthlyRange.high)
      });
    } catch {
      setErrorMessage(
        "Unable to compute estimate right now. Please retry in a moment."
      );
    } finally {
      setIsLoading(false);
    }
  }, [input]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      void runEstimate();
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [runEstimate]);

  function handleUsageChange(value: string) {
    const minutes = Number(value);
    setInput((prev) => ({
      ...prev,
      monthlyUsageMinutes: Number.isFinite(minutes) ? Math.max(0, minutes) : 0
    }));
    trackCalculatorEvent("calculator_input_change", {
      field: "monthlyUsageMinutes"
    });
  }

  function handleLanguageChange(value: string) {
    const count = Number(value);
    setInput((prev) => ({
      ...prev,
      languageCount: Number.isFinite(count) ? Math.max(1, count) : 1
    }));
    trackCalculatorEvent("calculator_input_change", { field: "languageCount" });
  }

  function toggleAddOn(addOn: AddOnKey, nextChecked: boolean) {
    setInput((prev) => {
      if (nextChecked) {
        return {
          ...prev,
          addOns: prev.addOns.includes(addOn)
            ? prev.addOns
            : [...prev.addOns, addOn]
        };
      }

      return {
        ...prev,
        addOns: prev.addOns.filter((item) => item !== addOn)
      };
    });

    trackCalculatorEvent("calculator_input_change", { field: "addOns", addOn });
  }

  return (
    <div className={cn("grid gap-6 lg:grid-cols-[1.1fr_0.9fr]", className)}>
      <Card>
        <CardHeader>
          <Badge variant="secondary" className="w-fit">
            Price Calculator
          </Badge>
          <CardTitle>Estimate your monthly and annual spend</CardTitle>
          <CardDescription>
            This estimator is non-binding and designed to prefill your quote
            request with better inputs.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <fieldset
              className="flex flex-col gap-2"
              aria-label="Billing period">
              <legend className="text-sm font-medium">Billing period</legend>
              <div
                role="radiogroup"
                aria-label="Billing period"
                className="grid gap-2 sm:grid-cols-2">
                {billingPeriodOptions.map((option) => {
                  const isSelected = input.billingPeriod === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-left transition-colors",
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border/70 bg-background/70 hover:bg-muted"
                      )}
                      onClick={() => {
                        setInput((prev) => ({
                          ...prev,
                          billingPeriod: option.value
                        }));
                        trackCalculatorEvent("calculator_input_change", {
                          field: "billingPeriod"
                        });
                      }}>
                      <span className="block font-medium">{option.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {option.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-2" aria-label="Service type">
              <legend className="text-sm font-medium">Service type</legend>
              <div
                role="radiogroup"
                aria-label="Service type"
                className="grid gap-2 sm:grid-cols-3">
                {serviceTypeOptions.map((option) => {
                  const isSelected = input.serviceType === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-left transition-colors",
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border/70 bg-background/70 hover:bg-muted"
                      )}
                      onClick={() => {
                        setInput((prev) => ({
                          ...prev,
                          serviceType: option.value
                        }));
                        trackCalculatorEvent("calculator_input_change", {
                          field: "serviceType"
                        });
                      }}>
                      <span className="block font-medium">{option.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {option.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="monthly-usage">Monthly usage (minutes)</Label>
              <div className="rounded-lg border border-border/70 bg-background/70 px-3 py-3">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium">
                    {input.monthlyUsageMinutes.toLocaleString()} min
                  </span>
                  <span className="text-xs text-muted-foreground">Drag</span>
                </div>
                <input
                  id="monthly-usage"
                  type="range"
                  min={0}
                  max={20000}
                  step={100}
                  value={input.monthlyUsageMinutes}
                  onChange={(event) => handleUsageChange(event.target.value)}
                  className="h-2 w-full cursor-pointer accent-primary"
                />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>20,000</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="language-count">Target languages</Label>
              <div className="rounded-lg border border-border/70 bg-background/70 px-3 py-3">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium">{input.languageCount}</span>
                  <span className="text-xs text-muted-foreground">Drag</span>
                </div>
                <input
                  id="language-count"
                  type="range"
                  min={1}
                  max={60}
                  step={1}
                  value={input.languageCount}
                  onChange={(event) => handleLanguageChange(event.target.value)}
                  className="h-2 w-full cursor-pointer accent-primary"
                />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>60</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label>Add-ons</Label>
            {(Object.keys(pricingRules.addOns) as AddOnKey[]).map((key) => {
              const addOn = pricingRules.addOns[key];
              return (
                <label
                  key={key}
                  htmlFor={`addon-${key}`}
                  className="flex cursor-pointer items-start gap-3 rounded-lg border border-border/70 bg-background/70 px-3 py-2">
                  <Checkbox
                    id={`addon-${key}`}
                    checked={selectedAddOns.has(key)}
                    onCheckedChange={(checked) =>
                      toggleAddOn(key, checked === true)
                    }
                  />
                  <span className="flex flex-1 flex-col gap-1">
                    <span className="font-medium">{addOn.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {addOn.monthlyFee > 0
                        ? `${toCurrency(addOn.monthlyFee)} / month`
                        : "No monthly fee"}
                      {addOn.oneTimeFee > 0
                        ? ` + ${toCurrency(addOn.oneTimeFee)} one-time`
                        : ""}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              render={<Link href={quoteHref} />}
              onClick={() =>
                trackCalculatorEvent("calculator_to_quote", {
                  source: "pricing"
                })
              }>
              Continue to quote
            </Button>
          </div>

          {isLoading ? (
            <p className="text-sm text-muted-foreground">
              Updating estimate...
            </p>
          ) : null}

          {errorMessage ? (
            <p className="text-sm text-destructive">{errorMessage}</p>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estimated range</CardTitle>
          <CardDescription>
            Range is calculated using usage, language scaling, and selected
            service type.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {estimate ? (
            <>
              <div className="rounded-lg border border-border/70 bg-background/80 p-3">
                <p className="text-xs text-muted-foreground">
                  Monthly estimate
                </p>
                <p className="font-heading text-2xl">
                  {toCurrency(estimate.monthlyRange.low)} -{" "}
                  {toCurrency(estimate.monthlyRange.high)}
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background/80 p-3">
                <p className="text-xs text-muted-foreground">Annual estimate</p>
                <p className="font-heading text-2xl">
                  {toCurrency(estimate.annualRange.low)} -{" "}
                  {toCurrency(estimate.annualRange.high)}
                </p>
              </div>

              <Separator />

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                {estimate.assumptions.map((item) => (
                  <p key={item}>{item}</p>
                ))}
                <p className="pt-1 text-xs">{estimate.disclaimer}</p>
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Estimate is generated automatically.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
