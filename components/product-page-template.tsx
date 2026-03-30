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

type ProductPageTemplateProps = {
  title: string;
  heroDescription: string;
  useCases: string[];
  keyFeatures: string[];
  setupModel: string[];
};

export function ProductPageTemplate({
  title,
  heroDescription,
  useCases,
  keyFeatures,
  setupModel
}: ProductPageTemplateProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Product Pillar
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {heroDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button size="lg" render={<Link href="/request-quote" />}>
            Request a Quote
          </Button>
          <Button variant="outline" render={<Link href="/pricing" />}>
            Open Price Calculator
          </Button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Use Cases</CardTitle>
            <CardDescription>
              Real-world scenarios this pillar is designed to support.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {useCases.map((item) => (
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
            <CardTitle>Key Features</CardTitle>
            <CardDescription>
              Core capabilities included in this product flow.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {keyFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
                {feature}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Setup Model</CardTitle>
            <CardDescription>
              Recommended implementation path for first deployment.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {setupModel.map((step, index) => (
              <div key={step}>
                <div className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </div>
                {index < setupModel.length - 1 ? (
                  <Separator className="mt-3" />
                ) : null}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
