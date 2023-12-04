"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import useSocialLogin from "@/hooks/use-social-login";

export default function GithubLoginButton() {
  const { onLogin } = useSocialLogin();
  return (
    <Button
      size="lg"
      variant="outline"
      className="w-full flex items-center gap-2 bg-slate-700 border-white"
      onClick={() => onLogin("github")}
    >
      <Github className="w-4 h-4" />
      로그인
    </Button>
  );
}
