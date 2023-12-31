import MarkdownViewer from "@/app/blog/_component/markdown-viewer";
import { getHeaderContent, getPostContent } from "@/services/utils";
import { Metadata } from "next";
import React from "react";
import PostHeader from "@/app/blog/_component/post-header";
import ContentNavigationButtons from "@/app/blog/_component/layout/content-navigation-buttons";
import LikePost from "@/components/like-post";
import { createPost, getPostFromPostPath } from "@/actions/post";
import CommentsContainer from "@/components/comment";

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
  const post = await getPostFromPostPath(slug);
  if (!post) {
    await createPost(slug);
  }

  return (
    <section className="w-full h-full relative overflow-y-auto scrollbar-hide text-slate-800 dark:text-white">
      <PostHeader
        title={title}
        description={description}
        date={date}
        slug={slug}
      />
      <article className="mx-auto px-10 pb-10 md:w-[800px] md:pb-32 flex flex-col gap-8">
        <MarkdownViewer content={content} />
        <LikePost post={post} />
        <ContentNavigationButtons prev={prev} next={next} />
        <CommentsContainer slug={slug} />
      </article>
    </section>
  );
}
