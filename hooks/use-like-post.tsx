import { useSessionContext } from "@supabase/auth-helpers-react";
import { useCallback } from "react";
import { useUser } from "@/hooks/use-user";
import { Post } from "@/types/post";

const useLikePost = () => {
  const { user } = useUser();
  const { supabaseClient: supabase } = useSessionContext();

  const toggleLike = useCallback(
    async (post: Post | null) => {
      console.log(post);
      if (!post || !user) return;
      const likedUsers: Array<string> = post.like_user;
      const isLikePost = likedUsers.includes(user.id);
      const { data } = await supabase
        .from("post")
        .update({
          like_user: isLikePost
            ? likedUsers.filter((id) => id !== user.id)
            : [...likedUsers, user.id],
        })
        .eq("post_path", post.post_path);
      console.log(data);
    },
    [supabase, user]
  );

  return { toggleLike };
};

export default useLikePost;
