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
import { gettingStartedSteps, resourceHubItems } from "@/lib/content/resources";

export const metadata = {
  title: "Resources",
  description:
    "Unified hub for blog, case studies, training, documentation, FAQ, and onboarding guidance."
};

export default function ResourcesOverviewPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Resources and Support
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Learn, deploy, and troubleshoot with one unified resources workspace.
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Find platform guidance, onboarding flows, and practical examples to
          move from discovery to reliable operations.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resourceHubItems.map((item) => (
          <Card key={item.slug}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" render={<Link href={item.href} />}>
                Open {item.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started in 5 Steps</CardTitle>
          <CardDescription>
            Suggested onboarding path for first deployment.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {gettingStartedSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
              <p className="font-medium">
                {index + 1}. {step.title}
              </p>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
