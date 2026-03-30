import { ProductPageTemplate } from "@/components/product-page-template";
import { getProductPage } from "@/lib/content/products";

const eventsPage = getProductPage("events");

export const metadata = {
  title: "Events",
  description:
    "Live captions, audio translation, and multilingual polls for high-scale events."
};

export default function ProductEventsPage() {
  return (
    <ProductPageTemplate
      title={eventsPage.name}
      heroDescription={eventsPage.heroDescription}
      useCases={eventsPage.useCases}
      keyFeatures={eventsPage.keyFeatures}
      setupModel={eventsPage.setupModel}
    />
  );
}
