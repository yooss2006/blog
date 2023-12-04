import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onChange,
  title,
  description,
  children,
}: Props) {
  return (
    <Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <DialogContent className="w-full md:w-[90vw] h-full md:h-auto md:max-w-[460px] max-h-full md:max-h-[85vh] p-[24px] drop-shadow-md bg-neutral-800 border-white focus:outline-none">
        <DialogHeader>
          <DialogTitle className="mb-4 text-xl text-center font-bold">
            {title}
          </DialogTitle>
          <DialogDescription className="mb-5 text-sm leading-normal text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
