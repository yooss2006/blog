import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const signInWidthGithub = async () => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) {
    return;
  }
};
