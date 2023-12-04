import { useSessionContext } from "@supabase/auth-helpers-react";

type LoginType = "github";

const useSocialLogin = () => {
  const { supabaseClient: supabase } = useSessionContext();
  const onLogin = async (type: LoginType) => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: type,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return { onLogin };
};

export default useSocialLogin;
