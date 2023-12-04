"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/use-user";
import { UserCircle } from "lucide-react";
import useAuthModal from "@/hooks/use-auth-modal";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import LogoutButton from "@/components/button/logout-button";

export default function User() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { user } = useUser();
  const { onOpen } = useAuthModal();
  const handleButtonClick = () => {
    if (user) {
      setIsLogoutModalOpen((prev) => !prev);
    } else {
      onOpen();
    }
  };

  useEffect(() => {
    if (!user) {
      setIsLogoutModalOpen(false);
    }
  }, [user]);

  return (
    <article className="py-4 text-center">
      <Popover defaultOpen={isLogoutModalOpen} open={isLogoutModalOpen}>
        <PopoverTrigger asChild>
          <Button
            aria-label={user ? "로그아웃" : "로그인"}
            onClick={handleButtonClick}
            variant="ghost"
            className="w-full"
          >
            {user ? (
              <Avatar className="w-10 h-10">
                <AvatarImage src={user?.user_metadata?.avatar_url} />
                <AvatarFallback>당신</AvatarFallback>
              </Avatar>
            ) : (
              <UserCircle className="w-10 h-10" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <LogoutButton />
        </PopoverContent>
      </Popover>
    </article>
  );
}
