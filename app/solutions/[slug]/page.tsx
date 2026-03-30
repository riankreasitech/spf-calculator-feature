import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionVerticalTemplate } from "@/components/solution-vertical-template";
import { solutionVerticals } from "@/lib/content/solutions";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const vertical = solutionVerticals.find((item) => item.slug === slug);

  if (!vertical) {
    return {
      title: "Solutions"
    };
  }

  return {
    title: `${vertical.name} Solutions`,
    description: vertical.shortDescription
  };
}

export function generateStaticParams() {
  return solutionVerticals.map((item) => ({ slug: item.slug }));
}

export default async function SolutionVerticalPage({
  params
}: SolutionPageProps) {
  const { slug } = await params;
  const vertical = solutionVerticals.find((item) => item.slug === slug);

  if (!vertical) {
    notFound();
  }

  return (
    <SolutionVerticalTemplate
      title={vertical.name}
      heroDescription={vertical.heroDescription}
      challenges={vertical.challenges}
      capabilityMap={vertical.capabilityMap}
      outcomes={vertical.outcomes}
      proofPoints={vertical.proofPoints}
      ctaLabel={vertical.ctaLabel}
    />
  );
}
