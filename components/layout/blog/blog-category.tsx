import AcccordionCategory from "@/components/layout/accordion-category";
import { getBlogPostStructure } from "@/utils/file";
import React from "react";

export default async function BlogCategory() {
  const categories = await getBlogPostStructure();

  return <AcccordionCategory categories={categories} path="/blog" />;
}
