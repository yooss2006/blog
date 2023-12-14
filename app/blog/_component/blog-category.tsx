import AcccordionCategory from "@/components/accordion-category";
import { getBlogStructure } from "@/services/utils";
import React from "react";

export default async function BlogCategory() {
  const categories = await getBlogStructure();

  return <AcccordionCategory categories={categories} path="/blog" />;
}
