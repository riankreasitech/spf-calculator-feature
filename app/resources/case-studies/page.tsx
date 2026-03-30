import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CaseStudiesIndex } from "@/components/case-studies-index";
import { caseStudyItems, supportLinks } from "@/lib/content/resources";

export const metadata = {
  title: "Case Studies",
  description:
    "Filterable case-study index by industry and deployment type for practical adoption references."
};

export default function ResourcesCaseStudiesPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Case Studies
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Reference deployments by industry and operating model.
        </h1>
      </section>

      <CaseStudiesIndex items={caseStudyItems} />

      <Card>
        <CardHeader>
          <CardTitle>Next Step</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {supportLinks.map((item) => (
            <Button
              key={item.href}
              variant="outline"
              render={<Link href={item.href} />}>
              {item.label}
            </Button>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
