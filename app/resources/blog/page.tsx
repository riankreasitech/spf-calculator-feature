import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { blogThemes } from "@/lib/content/resources";

export const metadata = {
  title: "Blog",
  description:
    "Recent themes from spf.io including private translation, AI voice updates, and visual accessibility improvements."
};

export default function ResourcesBlogPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Blog
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Product updates and accessibility strategy notes.
        </h1>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {blogThemes.map((theme) => (
          <Card key={theme.title}>
            <CardHeader>
              <CardTitle>{theme.title}</CardTitle>
              <CardDescription>{theme.summary}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" render={<Link href="/resources" />}>
          Back to Resources
        </Button>
        <Button size="lg" render={<Link href="/request-quote" />}>
          Request a Demo
        </Button>
      </div>
    </main>
  );
}
