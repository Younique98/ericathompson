"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/components/testimonials/data";


export function TestimonialCarousel() {
    return (
      <div className="relative">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-gray-800 border-gray-700 h-[300px]">
                <CardContent className="p-6">
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                      <span className="inline-block px-2 py-1 text-xs text-cyan-400 bg-cyan-950 rounded-full">
                        {testimonial.context}
                      </span>
                    </div>
                    <blockquote className="border-l-4 border-cyan-500 pl-4">
                      <p className="text-gray-300 italic text-sm md:text-base">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </blockquote>
                  </div>
                  <div className="mt-auto">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    {testimonial.title && (
                      <p className="text-sm text-gray-400">
                        {testimonial.title}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
 <CarouselPrevious className="bg-gray-700 hover:bg-gray-600 border-gray-600" />
          <CarouselNext className="bg-gray-700 hover:bg-gray-600 border-gray-600" />
            </Carousel>
            </div>
  );
}
