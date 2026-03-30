"use client";

import { useMemo, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import type { CaseStudyItem } from "@/lib/content/resources";

type CaseStudiesIndexProps = {
  items: CaseStudyItem[];
};

type IndustryFilter = "All" | CaseStudyItem["industry"];
type DeploymentFilter = "All" | CaseStudyItem["deploymentType"];

function FilterPill({
  label,
  isActive,
  onClick
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-sm transition-colors ${
        isActive
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border/70 bg-background/70 text-foreground hover:bg-muted"
      }`}>
      {label}
    </button>
  );
}

export function CaseStudiesIndex({ items }: CaseStudiesIndexProps) {
  const [industry, setIndustry] = useState<IndustryFilter>("All");
  const [deploymentType, setDeploymentType] = useState<DeploymentFilter>("All");

  const industries = useMemo(
    () => ["All", ...new Set(items.map((item) => item.industry))],
    [items]
  ) as IndustryFilter[];

  const deploymentTypes = useMemo(
    () => ["All", ...new Set(items.map((item) => item.deploymentType))],
    [items]
  ) as DeploymentFilter[];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const industryMatch = industry === "All" || item.industry === industry;
      const deploymentMatch =
        deploymentType === "All" || item.deploymentType === deploymentType;

      return industryMatch && deploymentMatch;
    });
  }, [deploymentType, industry, items]);

  return (
    <section className="flex flex-col gap-4">
      <div className="rounded-2xl border border-border/70 bg-card/80 p-4">
        <p className="text-sm text-muted-foreground">Filter by industry</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {industries.map((value) => (
            <FilterPill
              key={value}
              label={value}
              isActive={industry === value}
              onClick={() => setIndustry(value)}
            />
          ))}
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Filter by deployment type
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {deploymentTypes.map((value) => (
            <FilterPill
              key={value}
              label={value}
              isActive={deploymentType === value}
              onClick={() => setDeploymentType(value)}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredItems.map((item) => (
          <Card key={item.slug}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {item.organization} · {item.industry} · {item.deploymentType}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>{item.summary}</p>
              <p className="text-foreground">Impact: {item.impact}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No case studies match this filter yet.
        </p>
      ) : null}
    </section>
  );
}
