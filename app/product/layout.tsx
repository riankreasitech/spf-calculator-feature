import Link from "next/link";

import { Button } from "@/components/ui/button";

const productLinks = [
  { href: "/product", label: "Overview" },
  { href: "/product/events", label: "Events" },
  { href: "/product/content", label: "Content" },
  { href: "/product/conversations", label: "Conversations" },
  { href: "/product/integrations", label: "Integrations" },
  { href: "/product/custom-ai", label: "Custom AI" }
];

export default function ProductLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-14 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-4 py-3 md:px-8">
          {productLinks.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              render={<Link href={item.href} />}>
              {item.label}
            </Button>
          ))}
        </div>
      </header>
      {children}
    </div>
  );
}
