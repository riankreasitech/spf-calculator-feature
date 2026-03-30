"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-primary inline-block">spf.io</span>
          </Link>
          <nav className="hidden md:flex flex-1 items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
              Home
            </Link>
            <Link href="#products" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Products
            </Link>
            <Link href="#solutions" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Solutions
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/login" className={buttonVariants({ variant: "ghost", className: "hidden sm:inline-flex" })}>
              Log in
            </Link>
            <Link href="/pricing" className={buttonVariants()}>
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
