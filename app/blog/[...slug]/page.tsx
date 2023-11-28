import MarkdownViewer from "@/features/blog/components/markdown-viewer";
import {
  getHeaderContent,
  getPostMarkdown,
  getThumbnailPath,
} from "@/features/blog/utils";
import { Metadata } from "next";
import React from "react";
import { ChevronDownCircle } from "lucide-react";
import Image from "next/image";
import PostHeader from "@/features/blog/components/post-header";

type Props = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const data = await getPostMarkdown(slug).then((res) => res.split("---"));
  const [title, description] = getHeaderContent(data[0]);
  return {
    title,
    description,
  };
}

export default async function BlogPostPage({ params: { slug } }: Props) {
  const data = await getPostMarkdown(slug).then((res) => res.split("---"));
  const [title, description, date] = getHeaderContent(data[0]);

  return (
    <section className="w-full h-full overflow-y-auto text-slate-800 dark:text-white">
      <PostHeader
        title={title}
        description={description}
        date={date}
        slug={slug}
      />
      <article className="px-10 pb-20 md:px-44 md:pb-32">
        <MarkdownViewer content={data[1]} />
      </article>
    </section>
  );
}
