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
import { integrationRows } from "@/lib/content/products";

const inputMethods = [
  "Cloud Loopback (bot joins the session)",
  "Local Loopback (virtual audio cable path)",
  "Direct microphone or production feed"
];

const outputMethods = [
  "Native platform closed-caption APIs",
  "Browser overlay source for OBS/vMix",
  "Embeddable iframe viewer for event portals",
  "Mobile attendee link or QR distribution"
];

export const metadata = {
  title: "Integrations",
  description:
    "Compatibility matrix and setup guidance for Zoom, YouTube Live, Teams, Webex, and broadcast tools."
};

export default function ProductIntegrationsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <Badge variant="secondary" className="mb-3 w-fit">
          Integrations Hub
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
          Match your event stack to the right captioning and translation
          workflow.
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Use this matrix to compare platform compatibility, setup complexity,
          and delivery mode before launch.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Platform Matrix</CardTitle>
          <CardDescription>
            Input source, output destination, and setup profile for common
            deployment targets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border border-border/70">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead className="bg-muted/60 text-left">
                <tr>
                  <th className="px-3 py-2 font-medium">Platform</th>
                  <th className="px-3 py-2 font-medium">Input</th>
                  <th className="px-3 py-2 font-medium">Output</th>
                  <th className="px-3 py-2 font-medium">Bidirectional</th>
                  <th className="px-3 py-2 font-medium">Setup</th>
                </tr>
              </thead>
              <tbody>
                {integrationRows.map((row) => (
                  <tr key={row.platform} className="border-t border-border/70">
                    <td className="px-3 py-2 font-medium">{row.platform}</td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {row.input}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {row.output}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {row.bidirectional}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {row.setupComplexity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Input Methods</CardTitle>
            <CardDescription>
              Choose the capture model based on event operations.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {inputMethods.map((item) => (
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
            <CardTitle>Output Delivery Modes</CardTitle>
            <CardDescription>
              Publish translated output where your audience already is.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {outputMethods.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Technical Requirements</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>
              Network: minimum 1.0 Mbps dedicated up/down, wired preferred for
              broadcast.
            </p>
            <p>Browsers: current Chrome, Firefox, Safari, and Edge.</p>
            <p>
              OS: cloud loopback is platform-agnostic; local loopback supports
              macOS/Windows.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Platform Permissions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>Zoom: closed-caption setting enabled and API token connected.</p>
            <p>
              YouTube Live: channel livestream enabled and caption ingestion
              activated.
            </p>
            <p>
              Event software: validate browser source/embed permission before
              showtime.
            </p>
          </CardContent>
        </Card>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button size="lg" render={<Link href="/request-quote" />}>
          Request integration quote
        </Button>
        <Button variant="outline" render={<Link href="/pricing" />}>
          Estimate pricing
        </Button>
      </div>
    </main>
  );
}
