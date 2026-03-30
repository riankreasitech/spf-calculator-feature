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
import { Separator } from "@/components/ui/separator";
import type {
  SolutionCapabilityMap,
  SolutionProofPoint
} from "@/lib/content/solutions";

type SolutionVerticalTemplateProps = {
  title: string;
  heroDescription: string;
  challenges: string[];
  capabilityMap: SolutionCapabilityMap[];
  outcomes: string[];
  proofPoints: SolutionProofPoint[];
  ctaLabel: string;
};

export function SolutionVerticalTemplate({
  title,
  heroDescription,
  challenges,
  capabilityMap,
  outcomes,
  proofPoints,
  ctaLabel
}: SolutionVerticalTemplateProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Solution Vertical
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {heroDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button size="lg" render={<Link href="/request-quote" />}>
            {ctaLabel}
          </Button>
          <Button variant="outline" render={<Link href="/pricing" />}>
            Estimate Pricing
          </Button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Key Challenges</CardTitle>
            <CardDescription>
              Common blockers this vertical faces before deployment.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {challenges.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expected Outcomes</CardTitle>
            <CardDescription>
              Results teams typically target with this deployment.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Challenge to Capability Mapping</CardTitle>
          <CardDescription>
            How spf.io features translate into practical execution patterns.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {capabilityMap.map((entry, index) => (
            <div key={`${entry.challenge}-${entry.capability}`}>
              <div className="grid gap-2 md:grid-cols-[1fr_1fr]">
                <div className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
                  <p className="text-xs text-muted-foreground">Challenge</p>
                  <p>{entry.challenge}</p>
                </div>
                <div className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
                  <p className="text-xs text-muted-foreground">
                    Mapped Capability
                  </p>
                  <p>{entry.capability}</p>
                </div>
              </div>
              {index < capabilityMap.length - 1 ? (
                <Separator className="mt-3" />
              ) : null}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Proof Points</CardTitle>
          <CardDescription>
            Reference examples for similar deployment environments.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {proofPoints.map((point) => (
            <div
              key={`${point.customer}-${point.detail}`}
              className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
              <p className="font-medium">{point.customer}</p>
              <p className="text-muted-foreground">{point.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
