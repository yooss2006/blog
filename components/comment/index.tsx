import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import CommentForm from "./comment-form";
import { Comment } from "@/app/blog/types";
import CommentItem from "./comment-item";

type Props = {
  slug: string[];
};

export default async function CommentsContainer({ slug }: Props) {
  const supabase = createRouteHandlerClient({
    cookies: cookies,
  });
  const postPath = slug?.join("/");
  const { data = [] } = await supabase
    .from("comments")
    .select()
    .eq("post_id", postPath)
    .is("parent_id", null)
    .order("id", { ascending: false });
  return (
    <div className="w-full">
      <CommentForm postPath={postPath} />
      <ul className="mt-4 flex flex-col gap-4">
        {data?.map((comment: Comment) => (
          <li key={comment.id}>
            <CommentItem comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}
