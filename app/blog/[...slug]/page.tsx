import MarkdownViewer from "@/features/blog/components/markdown-viewer";
import { getHeaderContent, getPostMarkdown } from "@/features/blog/utils";
import { Metadata } from "next";
import React from "react";
import { ChevronDownCircle } from "lucide-react";

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
    <section className="w-full h-full overflow-y-auto">
      <header className="w-full h-full relative">
        <div className="flex flex-col items-center absolute left-[50%] translate-x-[-50%] bottom-[30%]">
          <div className="w-72 h-72 bg-white"></div>
          <h1 className="my-3 text-7xl font-bold">{title}</h1>
          <p className="text-xl mb-2">{description}</p>
          <p className="font-light">{date}</p>
        </div>
        <ChevronDownCircle className="w-8 h-8 absolute left-[50%] translate-x-[-50%] bottom-10" />
      </header>
      <article className="px-10 pb-20 md:px-44 md:pb-32">
        <MarkdownViewer content={data[1]} />
      </article>
    </section>
  );
}
