import { ProductPageTemplate } from "@/components/product-page-template";
import { getProductPage } from "@/lib/content/products";

const contentPage = getProductPage("content");

export const metadata = {
  title: "Content",
  description:
    "Subtitling, transcription, and document translation workflows for multilingual content delivery."
};

export default function ProductContentPage() {
  return (
    <ProductPageTemplate
      title={contentPage.name}
      heroDescription={contentPage.heroDescription}
      useCases={contentPage.useCases}
      keyFeatures={contentPage.keyFeatures}
      setupModel={contentPage.setupModel}
    />
  );
}
