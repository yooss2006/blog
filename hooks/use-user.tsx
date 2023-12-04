import { UserContext } from "@/providers/user-provider";
import { useContext } from "react";

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser hook를 사용하려면 UserProvider로 감싸야합니다.");
  }

  return context;
};
