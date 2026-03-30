"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button, buttonVariants } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function PricingCalculator() {
  const [duration, setDuration] = useState(2); // hours
  const [languages, setLanguages] = useState(3); // count
  const [users, setUsers] = useState(100); // count
  const [needsHumanCaptioner, setNeedsHumanCaptioner] = useState(false);
  const [needsOperator, setNeedsOperator] = useState(false);

  // Mock pricing logic
  const calculateTotal = () => {
    let total = 0;
    // Base cost for platform usage
    total += 50; 
    // Variable costs
    total += duration * 25; // $25 per hour
    total += languages * 15; // $15 per language
    total += users * 0.05; // $0.05 per concurrent user
    
    // Add-on costs
    if (needsHumanCaptioner) total += 150; // Flat fee or could be hourly
    if (needsOperator) total += 200;

    return total.toFixed(2);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-primary/20 bg-background/50 backdrop-blur-sm">
      <CardHeader className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10" />
        <Badge variant="secondary" className="w-max mx-auto mb-2 text-primary">Estimation Tool</Badge>
        <CardTitle className="text-3xl font-extrabold tracking-tight">Interactive Pricing Calculator</CardTitle>
        <CardDescription className="text-lg">
          Estimate the cost of making your event multilingual with spf.io
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8 p-6 sm:p-8">
        {/* Core Metrics */}
        <div className="space-y-6">
          <div className="space-y-4 bg-muted/30 p-4 rounded-xl border border-muted">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Event Duration</Label>
              <span className="font-mono bg-background px-3 py-1 rounded-md border font-bold text-primary">{duration} Hours</span>
            </div>
            <Slider
              value={[duration]}
              onValueChange={(val: any) => setDuration(Array.isArray(val) ? val[0] : val)}
              max={24}
              step={1}
              className="py-2"
            />
          </div>

          <div className="space-y-4 bg-muted/30 p-4 rounded-xl border border-muted">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Number of Languages</Label>
              <span className="font-mono bg-background px-3 py-1 rounded-md border font-bold text-primary">{languages} Languages</span>
            </div>
            <Slider
              value={[languages]}
              onValueChange={(val: any) => setLanguages(Array.isArray(val) ? val[0] : val)}
              max={20}
              step={1}
              className="py-2"
            />
          </div>

          <div className="space-y-4 bg-muted/30 p-4 rounded-xl border border-muted">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Concurrent Attendees</Label>
              <span className="font-mono bg-background px-3 py-1 rounded-md border font-bold text-primary">{users}</span>
            </div>
            <Slider
              value={[users]}
              onValueChange={(val: any) => setUsers(Array.isArray(val) ? val[0] : val)}
              max={10000}
              step={50}
              className="py-2"
            />
          </div>
        </div>

        <hr className="border-border" />

        {/* Add-on Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground/80">Additional Human Services</h3>
          
          <div className="flex items-center justify-between p-4 rounded-xl border hover:bg-muted/50 transition-colors">
            <div className="space-y-1">
              <Label className="text-base cursor-pointer" htmlFor="human-captioner">Professional Human Captioner</Label>
              <p className="text-xs text-muted-foreground mr-4">Ensure maximum accuracy for specialized or highly technical events.</p>
            </div>
            <Switch
              id="human-captioner"
              checked={needsHumanCaptioner}
              onCheckedChange={setNeedsHumanCaptioner}
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border hover:bg-muted/50 transition-colors">
            <div className="space-y-1">
              <Label className="text-base cursor-pointer" htmlFor="event-operator">Event Operator / Tech Support</Label>
              <p className="text-xs text-muted-foreground mr-4">Have an expert on standby to manage the stream and platform.</p>
            </div>
            <Switch
              id="event-operator"
              checked={needsOperator}
              onCheckedChange={setNeedsOperator}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col bg-muted/20 border-t rounded-b-xl p-6 sm:p-8 space-y-4">
        <div className="w-full flex justify-between items-center">
          <div className="text-muted-foreground font-medium">Estimated Total</div>
          <div className="text-4xl font-extrabold text-primary">${calculateTotal()}</div>
        </div>
        <p className="text-xs text-center text-muted-foreground">
          * This is an estimate based on standard public pricing. Volume discounts may apply.
        </p>
      </CardFooter>
    </Card>
  );
}
