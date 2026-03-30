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

const pillars = [
  {
    href: "/product/events",
    title: "Events",
    summary:
      "Run live captions and multilingual audio for thousands of attendees in real time."
  },
  {
    href: "/product/content",
    title: "Content",
    summary:
      "Generate subtitles and translated assets for video, documents, and slides after every session."
  },
  {
    href: "/product/conversations",
    title: "Conversations",
    summary:
      "Enable cross-language dialogue for teams, support calls, and ministry conversations."
  }
];

const integrations = [
  "Zoom",
  "YouTube Live",
  "Microsoft Teams",
  "Webex",
  "OBS Studio",
  "vMix"
];

const launchPaths = [
  {
    href: "/solutions",
    title: "Solutions",
    summary:
      "Evaluate industry deployment paths for church, conferences, corporate, education, government, and theater."
  },
  {
    href: "/resources",
    title: "Resources",
    summary:
      "Access blog updates, case studies, training center, documentation, FAQ, and onboarding guidance."
  }
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-10 md:px-10">
      <section className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 md:p-10">
        <div className="absolute -top-16 right-0 size-48 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-14 left-20 size-56 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative flex flex-col gap-6">
          <Badge variant="secondary" className="w-fit">
            Live Translation. Built For Real-World Operations.
          </Badge>
          <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-6xl">
            Translate events, content, and conversations without losing speed or
            clarity.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            This implementation starts the PRD scope with Next.js App Router,
            Tailwind design tokens, shadcn UI primitives, and a Docker-ready
            workflow for development and production.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="lg"
              render={<Link href="/product" />}>
              Explore Product
            </Button>
            <Button size="lg" render={<Link href="/pricing" />}>
              Open Price Calculator
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="/request-quote" />}>
              Start Quote Intake
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title}>
            <CardHeader>
              <CardTitle>{pillar.title}</CardTitle>
              <CardDescription>{pillar.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="ghost"
                size="sm"
                render={<Link href={pillar.href} />}>
                Open {pillar.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-border/70 bg-card/70 p-6 md:p-8">
        <p className="text-sm text-muted-foreground">
          Supported Integration Paths
        </p>
        <Separator className="my-4" />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {integrations.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {launchPaths.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" render={<Link href={item.href} />}>
                Open {item.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="mt-10 pb-6 text-sm text-muted-foreground">
        Phase 1 implementation in progress. Product, Solutions, and Resources
        page templates are now active.
      </footer>
    </main>
  );
}
