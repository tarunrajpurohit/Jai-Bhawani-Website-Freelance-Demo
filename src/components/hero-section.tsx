"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Play, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OnlineOrderDialog } from "@/components/online-order-dialog";
import { HERO_SHOWCASE_SLIDES, HeroShowcaseSlide } from "@/data/site-data";

function HeroSlideContent({ slide }: { slide: HeroShowcaseSlide }) {
  const [activeFoodIdx, setActiveFoodIdx] = useState(0);
  const activeFood = slide.foods[activeFoodIdx] ?? slide.foods[0];
  const activeVideo =
    slide.mediaType === "video" ? activeFood?.video ?? slide.videoSrc : undefined;

  return (
    <div className="relative w-full min-h-[calc(100dvh-84px)] lg:min-h-0 lg:h-full flex items-end lg:items-center pt-24 pb-6 md:pt-28 md:pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden bg-black">
      {/* Background Video or Image */}
      {slide.mediaType === "video" && activeVideo ? (
        <video
          key={activeVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={slide.posterSrc}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        >
          <source src={activeVideo} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.posterSrc})` }}
        />
      )}

      {/* Clean cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

      <div className="relative z-10 max-w-[1220px] mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        {/* Left: Clean Editorial Headline & CTA */}
        <div className="max-w-2xl text-white animate-fade-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="rounded-full bg-[#ffed00] text-[#212121] hover:bg-[#ffed00] font-sans font-bold uppercase tracking-wider px-3 py-1 text-[11px]">
              {slide.mediaType === "video" ? (
                <span className="flex items-center gap-1.5">
                  <Play className="h-3 w-3 fill-current" /> Video Showcase
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" /> USA Signature
                </span>
              )}
            </Badge>
            <span className="font-sans font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase text-white/80">
              {slide.eyebrow}
            </span>
          </div>

          <h1 className="font-heading font-medium uppercase tracking-[1px] text-[36px] sm:text-[52px] md:text-[64px] lg:text-[74px] leading-[0.95] text-white mb-3">
            {slide.title}
          </h1>

          <p className="font-sans text-base sm:text-lg leading-[26px] text-white/85 max-w-xl mb-5">
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button
              nativeButton={false}
              render={<a href={slide.ctaHref} />}
              className="rounded-full bg-[#012973] hover:bg-[#ffed00] hover:text-[#212121] text-white font-sans font-bold uppercase tracking-wider text-sm px-6 py-3 h-auto transition-colors duration-300"
            >
              {slide.ctaLabel}
            </Button>
            <OnlineOrderDialog className="bg-white text-black hover:bg-[#ffed00] hover:text-[#212121] text-sm px-6 py-3" />
          </div>
        </div>

        {/* Right: Minimal Compact Food Switcher Dock */}
        <div className="lg:max-w-[380px] w-full">
          <div className="rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 p-3.5">
            <div className="flex items-center justify-between px-1 mb-2.5">
              <span className="font-sans font-bold text-[11px] uppercase tracking-[0.18em] text-[#ffed00]">
                {activeFood?.name}
              </span>
              <span className="font-sans text-[11px] text-white/65 uppercase tracking-wider">
                {activeFood?.tag}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {slide.foods.map((food, idx) => {
                const isSelected = idx === activeFoodIdx;
                return (
                  <button
                    key={food.id}
                    type="button"
                    onClick={() => setActiveFoodIdx(idx)}
                    className={`group flex flex-col items-center text-center rounded-xl p-2 transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? "bg-white text-black border-[#ffed00] shadow-md"
                        : "bg-white/10 text-white border-transparent hover:bg-white/20"
                    }`}
                  >
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-12 h-12 object-contain mb-1.5 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="font-sans font-bold text-[11px] leading-tight line-clamp-1">
                      {food.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentSlide(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section
      id="top"
      className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[920px] flex flex-col overflow-hidden bg-black"
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full flex-1 min-h-0 [&>div]:h-full"
      >
        <CarouselContent className="ml-0 h-full">
          {HERO_SHOWCASE_SLIDES.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0 h-full">
              <HeroSlideContent slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Clean Bottom Control Bar with Prev/Next + Slide Tabs */}
      <div className="shrink-0 bg-[#012973] border-t border-white/15 py-2.5 px-3 sm:px-4">
        <div className="max-w-[1220px] mx-auto flex items-center justify-between gap-2 sm:gap-3">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Previous slide"
            onClick={() => api?.scrollPrev()}
            className="size-8 rounded-full border border-white/25 text-white hover:bg-white hover:text-[#012973] shrink-0 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3">
            {HERO_SHOWCASE_SLIDES.map((slide, index) => {
              const active = index === currentSlide;
              return (
                <Button
                  key={slide.id}
                  onClick={() => api?.scrollTo(index)}
                  variant="ghost"
                  className={`rounded-full font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-3.5 py-1.5 h-auto transition-all cursor-pointer ${
                    active
                      ? "bg-[#ffed00] text-[#212121] hover:bg-[#ffed00]"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {slide.tabLabel}
                </Button>
              );
            })}
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Next slide"
            onClick={() => api?.scrollNext()}
            className="size-8 rounded-full border border-white/25 text-white hover:bg-white hover:text-[#012973] shrink-0 cursor-pointer"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
