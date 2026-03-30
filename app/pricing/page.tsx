import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { PriceCalculator } from "@/components/price-calculator";

export const metadata = {
  title: "Pricing",
  description:
    "Estimate monthly and annual pricing ranges for your multilingual use case."
};

export default function PricingPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="w-fit">
          Pricing and Estimation
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Build your estimate, then send a prefilled quote request to the spf.io
          team.
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Calculator output is intended for planning and budgeting. Final
          numbers are confirmed in your approved proposal and service scope.
        </p>
      </section>

      <PriceCalculator />

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Usage-driven model</CardTitle>
            <CardDescription>
              Plans include a base minute allocation. Overage and language
              volume shape the estimate.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Service types</CardTitle>
            <CardDescription>
              Choose between Live Events, Content Translation, and Conversations
              based on your use case.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add-ons</CardTitle>
            <CardDescription>
              Include custom AI vocabulary, onboarding, and director support
              where needed.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Need enterprise pricing governance?</CardTitle>
          <CardDescription>
            We can map quote logic to your program cadence, localization policy,
            and integration stack.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="lg" render={<Link href="/request-quote" />}>
            Request enterprise quote
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
