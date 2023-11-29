import { Button } from "@/components/ui/button";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ToggleSidebarContainer({ children }: Props) {
  return (
    <div className="bg-slate-100 relative z-10 md:z-0">
      <Sheet>
        <div className="md:hidden h-12 flex items-center absolute top-0 left-0 right-0 bg-slate-950/20 dark:bg-slate-950/70">
          <SheetTrigger asChild>
            <Button variant="ghost">
              <Menu className="w-8 h-8" />
            </Button>
          </SheetTrigger>
        </div>
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
