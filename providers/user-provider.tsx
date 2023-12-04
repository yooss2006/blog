"use client";

import { useSessionContext, useUser } from "@supabase/auth-helpers-react";
import { User } from "@supabase/supabase-js";
import { ReactNode, createContext } from "react";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { session, isLoading: isLoadingUser } = useSessionContext();
  const user = useUser();
  const accessToken = session?.access_token ?? null;

  const value = {
    accessToken,
    user,
    isLoading: isLoadingUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
