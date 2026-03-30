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

export const metadata = {
  title: "About",
  description:
    "Learn the spf.io mission and operating approach for real-time translation and accessibility."
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          About spf.io
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          AI translation and accessibility for events, content, and
          conversations.
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          spf.io is built to help organizations reach multilingual audiences
          with real-time captions, translation, and inclusive communication
          workflows.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Mission</CardTitle>
            <CardDescription>
              Make every event, content stream, and conversation accessible and
              localized in real time.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vision</CardTitle>
            <CardDescription>
              Help churches, schools, corporations, and public organizations
              serve global communities without legacy translation complexity.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Ready to deploy?</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button size="lg" render={<Link href="/request-quote" />}>
            Request a Quote
          </Button>
          <Button variant="outline" render={<Link href="/resources" />}>
            Explore Resources
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
