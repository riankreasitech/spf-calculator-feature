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

const customizationAreas = [
  "Names, organizations, and product vocabulary",
  "Industry terms for technical conferences",
  "Faith-community terminology and language nuances",
  "Internal glossary consistency across content and events"
];

const workflow = [
  "Upload a glossary or recurring terminology list",
  "Validate term behavior in staging sessions",
  "Run live with director oversight and iterative tuning"
];

export const metadata = {
  title: "Custom AI",
  description:
    "Adapt translation and caption output to your terminology, brand language, and technical vocabulary."
};

export default function CustomAiPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Custom AI
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Improve translation accuracy with terminology that matches your
          context.
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Custom AI profiles help spf.io adapt to names, technical vocabulary,
          and specialized language patterns across live and post-production
          workflows.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Where it helps most</CardTitle>
            <CardDescription>
              High-accuracy environments where vocabulary drift impacts trust.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {customizationAreas.map((item) => (
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
            <CardTitle>Setup model</CardTitle>
            <CardDescription>
              Simple rollout path for pilot and production phases.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
                {index + 1}. {step}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button size="lg" render={<Link href="/request-quote" />}>
          Request Custom AI quote
        </Button>
        <Button variant="outline" render={<Link href="/pricing" />}>
          Open price calculator
        </Button>
      </div>
    </main>
  );
}
