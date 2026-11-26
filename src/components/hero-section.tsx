"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
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
  const activeVideo = activeFood?.video ?? slide.videoSrc;

  return (
    <div className="relative w-full min-h-[calc(100dvh-84px)] lg:min-h-0 lg:h-full flex items-end lg:items-center pt-24 pb-6 md:pt-28 md:pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden bg-black">
      {/* Product-Specific Background Video with Smooth Crossfade & Slow Zoom */}
      <AnimatePresence mode="wait">
        {activeVideo && (
          <motion.div
            key={activeVideo}
            initial={{ opacity: 0, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={slide.posterSrc}
              className="w-full h-full object-cover"
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clean cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-[1220px] mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        {/* Left: Animated Editorial Headline & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-white"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="rounded-full bg-[#ffed00] text-[#212121] hover:bg-[#ffed00] font-sans font-bold uppercase tracking-wider px-3 py-1 text-[11px]">
              <span className="flex items-center gap-1.5">
                <Play className="h-3 w-3 fill-current" />{" "}
                {activeFood?.name ?? "Video Showcase"}
              </span>
            </Badge>
            <span className="font-sans font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase text-white/80">
              {slide.eyebrow}
            </span>
          </div>

          <h1 className="font-heading font-medium uppercase tracking-[1px] text-[36px] sm:text-[52px] md:text-[64px] lg:text-[74px] leading-[0.95] text-white mb-3">
            {slide.title}
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeFood?.id ?? slide.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="font-sans text-base sm:text-lg leading-[26px] text-white/85 max-w-xl mb-5"
            >
              {activeFood?.description ?? slide.subtitle}
            </motion.p>
          </AnimatePresence>

          <div className="flex flex-wrap items-center gap-3.5">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                nativeButton={false}
                render={<a href={slide.ctaHref} />}
                className="rounded-full bg-[#012973] hover:bg-[#ffed00] hover:text-[#212121] text-white font-sans font-bold uppercase tracking-wider text-sm px-6 py-3 h-auto transition-colors duration-300 shadow-lg"
              >
                {slide.ctaLabel}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <OnlineOrderDialog className="bg-white text-black hover:bg-[#ffed00] hover:text-[#212121] text-sm px-6 py-3 shadow-lg" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Animated Product Video Switcher Dock */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:max-w-[390px] w-full"
        >
          <div className="rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 p-3.5 shadow-2xl">
            <div className="flex items-center justify-between px-1 mb-2.5">
              <span className="font-sans font-bold text-[11px] uppercase tracking-[0.18em] text-[#ffed00] truncate">
                {activeFood?.name}
              </span>
              <span className="font-sans text-[11px] text-white/70 uppercase tracking-wider shrink-0 ml-2">
                {activeFood?.tag}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {slide.foods.map((food, idx) => {
                const isSelected = idx === activeFoodIdx;
                return (
                  <motion.button
                    key={food.id}
                    type="button"
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFoodIdx(idx)}
                    className={`relative group flex flex-col items-center text-center rounded-xl p-2 transition-colors duration-200 cursor-pointer border ${
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
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
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
