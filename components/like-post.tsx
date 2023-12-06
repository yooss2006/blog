"use client";

import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import useAuthModal from "@/hooks/use-auth-modal";
import useLikePost from "@/hooks/use-like-post";
import { useUser } from "@/hooks/use-user";
import { cn } from "@/lib/utils";

export default function LikePost() {
  const { user } = useUser();
  const { post, createPost, toggleLike } = useLikePost();
  const { onOpen } = useAuthModal();
  const isLiked = post?.like_user.includes(user?.id || "");

  const handleButtonClick = async () => {
    if (!user) {
      return onOpen();
    }
    try {
      if (post) {
        await toggleLike();
      } else {
        await createPost();
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <Button
        onClick={handleButtonClick}
        className={cn(
          "w-full h-20 flex justify-center items-center gap-2 text-white",
          isLiked
            ? "bg-red-500  hover:bg-red-600"
            : "bg-red-950 hover:bg-red-800"
        )}
      >
        <Heart className="w-6 h-6" />
        글이 마음에 드셨다면 좋아요를 눌러주세요!
      </Button>
    </>
  );
}
