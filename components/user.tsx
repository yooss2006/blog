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
            className="group"
          >
            {user ? (
              <Avatar className="w-14 h-14 border-2 hover:border-yellow-300 border-yblue-900">
                <AvatarImage
                  width={56}
                  height={56}
                  src={user?.user_metadata?.avatar_url}
                />
                <AvatarFallback>you</AvatarFallback>
              </Avatar>
            ) : (
              <UserCircle className="w-14 h-14 text-yblue-900" />
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
