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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type RequestQuotePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function readValue(value: string | string[] | undefined): string {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return "";
}

function toServiceTypeLabel(serviceType: string): string {
  if (serviceType === "live-events") {
    return "Live Events";
  }

  if (serviceType === "content-translation") {
    return "Content Translation";
  }

  if (serviceType === "conversations") {
    return "Conversations";
  }

  return serviceType;
}

export default async function RequestQuotePage({
  searchParams
}: RequestQuotePageProps) {
  const params = await searchParams;

  const billingPeriod = readValue(params.billingPeriod);
  const monthlyUsageMinutes = readValue(params.monthlyUsageMinutes);
  const languageCount = readValue(params.languageCount);
  const serviceType =
    readValue(params.serviceType) || readValue(params.serviceLevel);
  const addOns = readValue(params.addOns);
  const monthlyEstimateLow = readValue(params.monthlyEstimateLow);
  const monthlyEstimateHigh = readValue(params.monthlyEstimateHigh);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-6 py-10 md:px-10">
      <section className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="w-fit">
          Request a Quote
        </Badge>
        <h1 className="font-heading text-4xl leading-tight">
          Share your event profile and we will return a tailored quote.
        </h1>
        <p className="text-muted-foreground">
          This form is prefilled from the calculator to speed up qualification
          and reduce back-and-forth.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Contact details</CardTitle>
          <CardDescription>
            Demo form for Phase 1 implementation.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="full-name">Full name</Label>
              <Input id="full-name" placeholder="Jane Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="work-email">Work email</Label>
              <Input
                id="work-email"
                type="email"
                placeholder="team@organization.org"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="organization">Organization</Label>
              <Input id="organization" placeholder="Organization name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="event-type">Event type</Label>
              <Input
                id="event-type"
                placeholder="Conference, church service, training"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea
              id="requirements"
              placeholder="Describe platform, expected attendees, preferred languages, and timeline."
              className="min-h-28"
              defaultValue={[
                billingPeriod ? `Billing period: ${billingPeriod}` : "",
                monthlyUsageMinutes
                  ? `Monthly usage (minutes): ${monthlyUsageMinutes}`
                  : "",
                languageCount ? `Language count: ${languageCount}` : "",
                serviceType
                  ? `Service type: ${toServiceTypeLabel(serviceType)}`
                  : "",
                addOns ? `Add-ons: ${addOns}` : "",
                monthlyEstimateLow && monthlyEstimateHigh
                  ? `Estimated monthly range: $${monthlyEstimateLow} - $${monthlyEstimateHigh}`
                  : ""
              ]
                .filter(Boolean)
                .join("\n")}
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Submit handling and CRM integration are part of the next
            implementation step in this PRD.
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" render={<Link href="/pricing" />}>
          Back to calculator
        </Button>
        <Button type="button" size="lg">
          Send quote request (coming next)
        </Button>
      </div>
    </main>
  );
}
