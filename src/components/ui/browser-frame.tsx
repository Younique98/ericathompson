import type { ReactNode } from "react";

export function BrowserFrame({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-muted">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 text-[11px] font-mono text-muted-foreground truncate">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
