import Link from "next/link";

import { Button } from "@/components/ui/button";

const resourceLinks = [
  { href: "/resources", label: "Overview" },
  { href: "/resources/blog", label: "Blog" },
  { href: "/resources/case-studies", label: "Case Studies" },
  { href: "/resources/training-center", label: "Training" },
  { href: "/resources/documentation", label: "Documentation" },
  { href: "/resources/faq", label: "FAQ" }
];

export default function ResourcesLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-14 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-4 py-3 md:px-8">
          {resourceLinks.map((item) => (
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
