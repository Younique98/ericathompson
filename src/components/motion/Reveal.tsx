import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Pure CSS animation, not JS/Framer-Motion-driven - see the .animate-reveal
// keyframes in globals.css for why. Content is always visible if CSS loads
// (the browser baseline), and only the enter animation depends on that -
// never the content itself.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("animate-reveal", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
