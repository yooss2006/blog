"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useSessionContext } from "@supabase/auth-helpers-react";

export default function LogoutButton() {
  const { supabaseClient: supabase } = useSessionContext();
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <Button
      size="lg"
      variant="outline"
      className="w-full flex items-center gap-2 bg-slate-700 border-white"
      onClick={handleLogout}
    >
      로그아웃
    </Button>
  );
}
