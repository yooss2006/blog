import { Post } from "@/types/post";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useUser } from "@/hooks/use-user";

const useLikePost = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { user } = useUser();
  const { supabaseClient: supabase } = useSessionContext();
  const params = useParams();

  const slug = params.slug as Array<string>;
  const postPath = slug.join("/");

  const getPost = useCallback(async () => {
    try {
      const { data } = await supabase.from("post").select();
      const currentPost = data?.find((post) => post.post_path === postPath);
      setPost(currentPost ? currentPost : null);
    } catch (error) {
      console.error("Error", error);
    }
  }, [postPath, supabase]);

  const createPost = useCallback(async () => {
    if (!user) return;

    await supabase.from("post").insert({
      post_name: slug[slug.length - 1],
      post_path: postPath,
      like_user: [user.id],
    });
    getPost();
  }, [getPost, postPath, slug, supabase, user]);

  const toggleLike = useCallback(async () => {
    if (!post || !user) return;
    const likedUsers: Array<string> = post.like_user;
    const isLikePost = likedUsers.includes(user.id);
    await supabase
      .from("post")
      .update({
        like_user: isLikePost
          ? likedUsers.filter((id) => id !== user.id)
          : [...likedUsers, user.id],
      })
      .eq("post_path", postPath);
    getPost();
  }, [getPost, post, postPath, supabase, user]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return { post, createPost, toggleLike };
};

export default useLikePost;
