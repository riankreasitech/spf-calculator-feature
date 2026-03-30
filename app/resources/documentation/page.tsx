import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const documentationSections = [
  {
    title: "Platform setup guides",
    description:
      "Step-by-step guides for Zoom, YouTube Live, Teams, Webex, and broadcast overlays."
  },
  {
    title: "Integration prerequisites",
    description:
      "Permissions, token requirements, and network readiness checks before deployment."
  },
  {
    title: "Troubleshooting runbooks",
    description:
      "Fast issue triage for audio path failures, delayed captions, and language channel mismatches."
  },
  {
    title: "Deployment checklists",
    description:
      "Pre-show operational checklists for in-person, virtual, and hybrid event formats."
  }
];

export const metadata = {
  title: "Documentation",
  description:
    "Technical setup guides, prerequisites, and operational checklists for spf.io deployments."
};

export default function ResourcesDocumentationPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Documentation
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Technical guidance for launch-ready execution.
        </h1>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {documentationSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" render={<Link href="/resources" />}>
          Back to Resources
        </Button>
        <Button
          variant="outline"
          render={<Link href="/product/integrations" />}>
          View integration matrix
        </Button>
      </div>
    </main>
  );
}
