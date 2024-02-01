import { cn } from "@/lib/utils";
import Link from "next/link";
import { Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0  border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-end px-4">
        <div className="flex items-center gap-2">
          <Button variant="default" className="text-sm"></Button>
        </div>
      </nav>
    </div>
  );
}
