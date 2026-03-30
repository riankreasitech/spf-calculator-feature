"use client";

import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { buttonVariants } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)] bg-muted/10">
      {/* Header Snippet */}
      <section className="bg-primary/5 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            No hidden fees. Scale your event internationally without worrying about blowing up the budget.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 sm:px-8">
          <PricingCalculator />
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Want a custom quote?</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              If you’re running a massive corporate event, an ongoing educational program, or require complex custom AI models, reach out to our team.
            </p>
            <a href="mailto:contact@spf.io.test" className={buttonVariants({ size: "lg", className: "px-10 text-lg shadow-xl" })}>
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
