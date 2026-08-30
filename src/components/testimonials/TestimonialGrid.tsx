"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/components/testimonials/data";

const INITIAL_COUNT = 6;

export function TestimonialGrid() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, INITIAL_COUNT);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 flex flex-col"
          >
            <CardContent className="p-6 flex flex-col flex-1">
              {testimonial.context && (
                <span className="mb-4 inline-block w-fit px-2 py-1 text-xs text-cyan-400 bg-cyan-950 rounded-full">
                  {testimonial.context}
                </span>
              )}
              <blockquote className="border-l-4 border-cyan-500 pl-4 flex-1">
                <p className="text-gray-300 italic text-sm md:text-base">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>
                {testimonial.title && (
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                )}
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {testimonials.length > INITIAL_COUNT && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 font-semibold text-white transition-colors"
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
