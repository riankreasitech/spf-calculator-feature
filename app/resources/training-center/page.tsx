import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const trainingModules = [
  {
    title: "Operator Essentials",
    description:
      "Launch preparation, session monitoring, and issue escalation for event operators."
  },
  {
    title: "Audio Path Validation",
    description:
      "Cloud loopback, local loopback, and direct feed diagnostics before go-live."
  },
  {
    title: "Language Channel Setup",
    description:
      "Assigning channels and validating attendee output paths across platforms."
  },
  {
    title: "Live Correction Workflows",
    description:
      "Human-in-the-loop operations for terminology accuracy and confidence tuning."
  }
];

export const metadata = {
  title: "Training Center",
  description:
    "Operator onboarding modules and workflow training for reliable multilingual events."
};

export default function ResourcesTrainingCenterPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Training Center
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Build confidence before every launch.
        </h1>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {trainingModules.map((module) => (
          <Card key={module.title}>
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" render={<Link href="/resources" />}>
          Back to Resources
        </Button>
        <Button size="lg" render={<Link href="/request-quote" />}>
          Request guided onboarding
        </Button>
      </div>
    </main>
  );
}
