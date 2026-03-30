import { ProductPageTemplate } from "@/components/product-page-template";
import { getProductPage } from "@/lib/content/products";

const conversationsPage = getProductPage("conversations");

export const metadata = {
  title: "Conversations",
  description:
    "Real-time multilingual conversation tools for 1-on-1 and small group communication."
};

export default function ProductConversationsPage() {
  return (
    <ProductPageTemplate
      title={conversationsPage.name}
      heroDescription={conversationsPage.heroDescription}
      useCases={conversationsPage.useCases}
      keyFeatures={conversationsPage.keyFeatures}
      setupModel={conversationsPage.setupModel}
    />
  );
}
