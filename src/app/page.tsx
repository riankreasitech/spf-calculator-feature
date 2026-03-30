"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
            Make your events, content, and conversations <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">accessible and multilingual</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
            All-in-one platform powered by AI with a human touch. Seamless real-time translation and captioning for in-person, online, and hybrid events.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/pricing" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto text-lg px-8 shadow-lg shadow-primary/20" })}>
              Get Started
            </Link>
            <Link href="#demo" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto text-lg px-8 border-primary/20 hover:bg-primary/5" })}>
              See a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delighting your multilingual audience doesn’t have to be stressful. Our platform scales as your audience grows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all hover:border-primary/50 group bg-background/50 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">🎤</span>
                </div>
                <CardTitle className="text-xl">Host Live Events</CardTitle>
                <CardDescription className="text-base pt-2">
                  Display real-time captions and translations, stream audio interpretation and poll audiences in 100+ languages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="#events" className="text-primary font-medium flex items-center hover:underline">
                  Learn more &rarr;
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:border-primary/50 group bg-background/50 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">📝</span>
                </div>
                <CardTitle className="text-xl">Translate Content</CardTitle>
                <CardDescription className="text-base pt-2">
                  Quickly translate audio, video, slides, and documents with language AI that learns from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="#content" className="text-primary font-medium flex items-center hover:underline">
                  Learn more &rarr;
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:border-primary/50 group bg-background/50 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">💬</span>
                </div>
                <CardTitle className="text-xl">Multilingual Conversations</CardTitle>
                <CardDescription className="text-base pt-2">
                  Let people speak freely in their native language through real-time captions and translations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="#conversations" className="text-primary font-medium flex items-center hover:underline">
                  Learn more &rarr;
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Minimal Calculator Promo Section */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent and Scalable Pricing</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Concerned about costs blowing up as you add more languages? Use our interactive tool to estimate the affordable cost of making your event truly accessible.
          </p>
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 shadow-inner">
             <PricingCalculator />
          </div>
        </div>
      </section>
    </div>
  );
}
