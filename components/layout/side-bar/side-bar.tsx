"use client";

import { useEffect, useState } from "react";

import { LoadingPage } from "@/components/common/loading-page";
import { useMedia } from "@/hooks/use-media";
import { useSideBar } from "@/model/use-sidebar";

import {
  SheetContent,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../../ui/sheet";

import { CategoryMenu } from "./category-menu";
import SearchInput from "./search-input";
import SocialBox from "./social-box";

function MobileSideBar() {
  const { isOpen, onclose, toggle } = useSideBar((state) => ({
    isOpen: state.isOpen,
    onclose: state.onClose,
    toggle: state.toggle,
  }));

  useEffect(() => {
    onclose();
  }, [onclose]);

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader className="mb-3">
          <SheetTitle>블로그 메뉴</SheetTitle>
          <SheetDescription>블로그를 둘러보세요.</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-hidden">
          <div className="h-full flex flex-col gap-2">
            <SearchInput />
            <div className="grow overflow-y-auto custom-scrollbar">
              <CategoryMenu />
            </div>
            <SocialBox />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function DesktopSideBar() {
  return (
    <div className="py-4 px-2 basis-[400px] border-r-2 border-normalColor">
      <div className="h-full flex flex-col gap-3">
        <SearchInput />
        <div className="grow overflow-y-auto custom-scrollbar">
          <CategoryMenu />
        </div>
        <SocialBox />
      </div>
    </div>
  );
}

export default function SideBar() {
  const [mounted, setMounted] = useState<boolean>(false);
  const isWide = useMedia("(min-width: 1024px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingPage />;

  if (!isWide) return <MobileSideBar />;
  return <DesktopSideBar />;
}
