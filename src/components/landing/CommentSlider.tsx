"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Testimonial data
const testimonials = [
  {
    text: "برای دوستداران کتاب کتاب فوق العاده ای است بارها آنرا خوانده ام و پیشنهاد میکنم.",
    book: "کتاب فنا",
    date: "۱۴۰۲/۰۳/۲۰",
    username: "سارا بهرامی",
    avatar: "/profileImage.png",
  },
  {
    text: "من برای بار دهم این کتاب رو خوندم و نکات آموزنده ای داره.",
    book: "کتاب امید",
    date: "۱۴۰۲/۰۳/۲۶",
    username: "ماریا سلامی",
    avatar: "/profileImage.png",
  },
  {
    text: "بهترین کتابی که تو عمرم خوندم خیلی فوق العاده است.",
    book: "کتاب سایه",
    date: "۱۴۰۲/۰۳/۱۲",
    username: "کاوه آفاق",
    avatar: "/profileImage.png",
  },
  {
    text: "بهترین کتابی که تو عمرم خوندم خیلی فوق العاده است.",
    book: "کتاب سایه",
    date: "۱۴۰۲/۰۳/۱۲",
    username: "کاوه آفاق",
    avatar: "/profileImage.png",
  },
  {
    text: "بهترین کتابی که تو عمرم خوندم خیلی فوق العاده است.",
    book: "کتاب سایه",
    date: "۱۴۰۲/۰۳/۱۲",
    username: "کاوه آفاق",
    avatar: "/profileImage.png",
  },
];

export function TestimonialCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="container mx-auto w-full mt-80">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className=" rmd:basis-1/2 lg:basis-1/3 pl-4 pr-4"
            >
              <div className="h-full">
                <div className="bg-primary50 rounded-md p-6 h-full flex flex-col justify-between  ">
                  <div className="flex flex-col py-3 border-b border-b-secondary50">
                    <p className="text-right mb-4 text-secondary">
                      {testimonial.text}
                    </p>
                    <p className="text-right self-start text-text1 text-sm">
                      ({testimonial.book})
                    </p>
                  </div>
                  <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between items-center">
                    <p className="text-text1 text-xs">{testimonial.date}</p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm text-text1 text-right">
                        {testimonial.username}
                      </p>
                      <div className="rounded-full overflow-hidden w-10 h-10 border border-gray-200">
                        <Image
                          src={testimonial.avatar || "/placeholder.png"}
                          alt={testimonial.username}
                          width={38}
                          height={38}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center items-center mt-8 gap-2">
          <CarouselPrevious className="static transform-none bg-white border-gray-200 h-10 w-10 rounded-full" />

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  current === index ? "bg-primary " : "bg-gray-300",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <CarouselNext className="static transform-none bg-white border-gray-200 h-10 w-10 border-b" />
        </div>
      </Carousel>
    </div>
  );
}

export default TestimonialCarousel;
