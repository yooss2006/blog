import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const getPostFromPostPath = async (slug: Array<string>) => {
  const postPath = slug.join("/");
  const supabase = createRouteHandlerClient({
    cookies,
  });
  try {
    const { data } = await supabase
      .from("post")
      .select()
      .eq("post_path", postPath);
    return data?.length ? data[0] : null;
  } catch (error) {
    console.error("Error", error);
  }
};

export const createPost = async (slug: Array<string>) => {
  const postPath = slug.join("/");
  const supabase = createRouteHandlerClient({
    cookies,
  });

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("post").insert({
      post_name: slug[slug.length - 1],
      post_path: postPath,
      like_user: [user.id],
    });
  } catch (error) {
    console.error("Error", error);
  }
};
