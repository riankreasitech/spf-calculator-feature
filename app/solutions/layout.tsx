import Link from "next/link";

import { Button } from "@/components/ui/button";

const solutionLinks = [
  { href: "/solutions", label: "Overview" },
  { href: "/solutions/church", label: "Church" },
  { href: "/solutions/conferences", label: "Conferences" },
  { href: "/solutions/corporate-events", label: "Corporate" },
  { href: "/solutions/education", label: "Education" },
  { href: "/solutions/government", label: "Government" },
  { href: "/solutions/theater-performing-arts", label: "Theater" }
];

export default function SolutionsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-14 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-4 py-3 md:px-8">
          {solutionLinks.map((item) => (
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
