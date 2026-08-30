"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AvatarInitials } from "@/components/ui/avatar-initials";
import { testimonials } from "@/components/testimonials/data";
import { Reveal } from "@/components/motion/Reveal";

const INITIAL_COUNT = 6;

export function TestimonialGrid() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, INITIAL_COUNT);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((testimonial, index) => (
          <Reveal key={index} delay={(index % 3) * 0.06}>
            <Card className="flex flex-col h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-cyan-500/40">
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <AvatarInitials
                    name={testimonial.name}
                    className="w-10 h-10 text-sm"
                  />
                  <div>
                    <p className="font-semibold text-foreground leading-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
                {testimonial.context && (
                  <span className="mb-4 inline-block w-fit px-2 py-1 text-xs text-cyan-400 bg-cyan-950 rounded-full">
                    {testimonial.context}
                  </span>
                )}
                <blockquote className="border-l-4 border-cyan-500 pl-4 flex-1">
                  <p className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>
                {testimonial.title && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                )}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      {testimonials.length > INITIAL_COUNT && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-gray-100 transition-colors"
          >
            {showAll
              ? "Show fewer testimonials"
              : `Show all ${testimonials.length} testimonials`}
          </button>
        </div>
      )}
    </div>
  );
}
