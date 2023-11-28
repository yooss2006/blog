import MarkdownViewer from "@/features/blog/components/markdown-viewer";
import { getHeaderContent, getPostContent } from "@/features/blog/utils";
import { Metadata } from "next";
import React from "react";
import PostHeader from "@/features/blog/components/post-header";
import ContentNavigationButtons from "@/components/layout/content-navigation-buttons";

type Props = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const data = await getHeaderContent(slug);
  const { title, description } = data;
  return {
    title,
    description,
  };
}

export default async function BlogPostPage({ params: { slug } }: Props) {
  const { title, description, date, prev, next } = await getHeaderContent(slug);
  const content = await getPostContent(slug);

  return (
    <section className="w-full h-full relative overflow-y-auto scrollbar-hide text-slate-800 dark:text-white">
      <PostHeader
        title={title}
        description={description}
        date={date}
        slug={slug}
      />
      <article className="px-10 pb-10 md:px-44 md:pb-32">
        <MarkdownViewer content={content} />
      </article>
      <ContentNavigationButtons prev={prev} next={next} />
    </section>
  );
}
