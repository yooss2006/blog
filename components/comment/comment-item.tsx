import { Comment } from "@/app/blog/types";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  comment: Comment;
};

export default async function CommentItem({
  comment: { user_id, comment },
}: Props) {
  const supabase = createRouteHandlerClient({
    cookies: cookies,
  });

  const { data } = await supabase
    .from("profiles")
    .select()
    .eq("id", user_id)
    .single();

  const { full_name, avatar_url } = data;
  return (
    <div className="px-2 py-4 flex items-center rounded-sm gap-4 bg-gradient-to-r from-slate-950 to-slate-800">
      <div>
        <Avatar className="w-10 h-10">
          <AvatarImage src={avatar_url} />
          <AvatarFallback>{full_name}</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="mb-3 font-semibold">{full_name}</div>
        <div>{comment}</div>
      </div>
    </div>
  );
}
