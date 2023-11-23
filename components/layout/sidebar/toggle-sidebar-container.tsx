import { Button } from "@/components/ui/button";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ToggleSidebarContainer({ children }: Props) {
  return (
    <div className="relative z-10">
      <Sheet>
        <SheetTrigger className="md:hidden" asChild>
          <div className="w-full py-2 absolute top-0 left-0 right-0 bg-slate-950/70">
            <Button variant="ghost">
              <Menu className="w-8 h-8" />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-[90%] dark:bg-slate-800">
          {children}
        </SheetContent>
      </Sheet>
      <div className="w-[360px] h-full px-2 py-4 hidden md:flex md:flex-col dark:bg-slate-800">
        {children}
      </div>
    </div>
  );
}
