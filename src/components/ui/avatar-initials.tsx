const PALETTE = [
  { bg: "bg-cyan-500/15", text: "text-cyan-600 dark:text-cyan-400" },
  { bg: "bg-blue-500/15", text: "text-blue-600 dark:text-blue-400" },
  { bg: "bg-violet-500/15", text: "text-violet-600 dark:text-violet-400" },
  { bg: "bg-amber-500/15", text: "text-amber-600 dark:text-amber-400" },
  { bg: "bg-rose-500/15", text: "text-rose-600 dark:text-rose-400" },
  { bg: "bg-emerald-500/15", text: "text-emerald-600 dark:text-emerald-400" },
];

function hashName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export function AvatarInitials({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const { bg, text } = PALETTE[hashName(name) % PALETTE.length];
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center rounded-full font-semibold shrink-0 ${bg} ${text} ${className}`}
    >
      {initialsFor(name)}
    </div>
  );
}
