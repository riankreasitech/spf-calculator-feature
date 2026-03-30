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
import { solutionVerticals } from "@/lib/content/solutions";

export const metadata = {
  title: "Solutions",
  description:
    "Industry-specific deployment paths for church, conferences, corporate, education, government, and performing arts."
};

export default function SolutionsOverviewPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Solutions
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Industry-ready translation and accessibility deployment patterns.
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Each vertical combines typical challenges, mapped capabilities,
          expected outcomes, and proof points so teams can evaluate fit quickly.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {solutionVerticals.map((item) => (
          <Card key={item.slug}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                render={<Link href={`/solutions/${item.slug}`} />}>
                Open {item.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
