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
import { faqEntries } from "@/lib/content/resources";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about language support, connectivity, caption delivery, and integrations."
};

export default function ResourcesFaqPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          FAQ
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Answers to common setup and operations questions.
        </h1>
      </section>

      <section className="grid gap-4">
        {faqEntries.map((entry) => (
          <Card key={entry.question}>
            <CardHeader>
              <CardTitle>{entry.question}</CardTitle>
              <CardDescription>{entry.answer}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Need a deployment-specific answer?</CardTitle>
          <CardDescription>
            Send your scenario and platform stack for a tailored implementation
            recommendation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="lg" render={<Link href="/request-quote" />}>
            Ask for tailored guidance
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
