"use client";

import { motion } from "framer-motion";

export function HeroMark({ className = "" }: { className?: string }) {
  const nodes = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    return {
      cx: 160 + Math.cos(angle) * 128,
      cy: 160 + Math.sin(angle) * 128,
    };
  });

  return (
    <div className={className}>
      <svg
        viewBox="0 0 320 320"
        role="img"
        aria-label="Abstract mark: a scanning ring resolving into a checkmark"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="markGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "160px 160px" }}
        >
          <circle
            cx="160"
            cy="160"
            r="128"
            fill="none"
            stroke="url(#markGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 10"
            opacity="0.5"
          />
          {nodes.map((n, i) => (
            <circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r="2.5"
              fill="url(#markGradient)"
              opacity="0.6"
            />
          ))}
        </motion.g>

        <circle
          cx="160"
          cy="160"
          r="96"
          fill="none"
          stroke="url(#markGradient)"
          strokeWidth="2"
          opacity="0.25"
        />

        <motion.circle
          cx="160"
          cy="160"
          r="96"
          fill="none"
          stroke="url(#markGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="60 543"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "160px 160px" }}
        />

        <motion.path
          d="M112 166 L144 198 L208 128"
          fill="none"
          stroke="url(#markGradient)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
