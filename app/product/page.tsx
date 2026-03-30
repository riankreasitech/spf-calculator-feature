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
import { productPages } from "@/lib/content/products";

export const metadata = {
  title: "Product Overview",
  description:
    "Explore Events, Content, Conversations, Integrations, and Custom AI capabilities from spf.io."
};

export default function ProductOverviewPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Product
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          A complete stack for multilingual events, content, and conversations.
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          This product area implements PRD requirements for pillar pages with
          use cases, key features, setup guidance, and conversion CTAs.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {productPages.map((item) => (
          <Card key={item.slug}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                render={<Link href={`/product/${item.slug}`} />}>
                Open {item.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Integrations Hub</CardTitle>
            <CardDescription>
              Compare platform setup models, input methods, and output delivery
              paths.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              render={<Link href="/product/integrations" />}>
              View integrations
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Custom AI</CardTitle>
            <CardDescription>
              Improve translation quality with vocabulary adaptation for names
              and technical terms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              render={<Link href="/product/custom-ai" />}>
              Explore custom AI
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
