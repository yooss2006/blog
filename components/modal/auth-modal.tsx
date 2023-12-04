"use client";

import React, { useEffect } from "react";
import Modal from "@/components/modal";
import useAuthModal from "@/hooks/use-auth-modal";
import GithubLoginButton from "@/components/button/github-login-button";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

export default function AuthModal() {
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();
  const { session } = useSessionContext();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title="로그인"
      description="로그인을 해주세요."
    >
      <GithubLoginButton />
    </Modal>
  );
}
