"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MENU_CATEGORIES } from "@/data/site-data";

export function MenuCategoriesSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = MENU_CATEGORIES[selectedIdx] ?? MENU_CATEGORIES[0];

  return (
    <section
      id="menu"
      className="relative bg-[#fffeed] py-10 md:py-14 overflow-hidden"
    >
      <img
        src="/assets/theme/cpc-v3/img/shape/shape-1.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute top-6 left-8 w-16 opacity-80 animate-float-slow"
      />
      <img
        src="/assets/theme/cpc-v3/img/shape/shape-2.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute top-8 right-10 w-20 opacity-80 animate-float-slow"
      />

      <div className="relative z-10 w-[92%] sm:w-[80%] mx-auto">
        {/* Compact Split Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7">
            <div>
              <Badge className="rounded-full bg-[#012973] text-[#ffed00] hover:bg-[#012973] font-sans font-bold uppercase tracking-widest px-3.5 py-0.5 text-[11px] mb-2.5">
                Serving Fresh Across the USA
              </Badge>
              <h3 className="font-heading font-medium text-[34px] sm:text-[44px] md:text-[52px] leading-[1.02] tracking-[1px] text-black">
                Welcome to Jay Bhavani USA
              </h3>
            </div>

            <div className="lg:max-w-md">
              <p className="font-sans text-base leading-[24px] text-black/80">
                Born in Ahmedabad in 1998 and now loved across the United
                States — explore 12 signature street-food categories crafted
                fresh to order.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Compact Split Spotlight + 4x3 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left: Compact Featured Category Spotlight */}
          <div className="lg:col-span-5">
            <Card className="h-full bg-[#012973] text-white border-none rounded-[20px] shadow-xl overflow-hidden relative flex flex-col justify-between">
              <div
                className="pointer-events-none absolute inset-0 opacity-15 bg-cover bg-center"
                style={{ backgroundImage: "url(/assets/img/thumb/thumb-8.png)" }}
              />
              <CardContent className="relative z-10 p-5 md:p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge className="rounded-full bg-[#ffed00] text-[#212121] hover:bg-[#ffed00] font-sans font-bold text-[11px] uppercase tracking-wider px-3 py-0.5">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {activeItem.badge}
                    </Badge>
                    <span className="font-sans font-bold text-xs uppercase tracking-widest text-white/60">
                      {String(selectedIdx + 1).padStart(2, "0")} / 12
                    </span>
                  </div>

                  <div className="h-[180px] sm:h-[220px] flex items-center justify-center my-2">
                    <img
                      key={activeItem.image}
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="max-h-[205px] w-auto object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)] animate-float-slow"
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <h4 className="font-heading font-medium text-[28px] sm:text-[34px] leading-[1.05] tracking-[1px] text-white mb-2">
                    {activeItem.title}
                  </h4>
                  <p className="font-sans text-sm sm:text-base leading-[22px] text-white/85 mb-4 line-clamp-2">
                    {activeItem.description}
                  </p>
                  <Button
                    nativeButton={false}
                    render={<a href={activeItem.href} />}
                    className="rounded-full bg-[#ffed00] hover:bg-white text-[#212121] font-sans font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3 h-auto transition-colors duration-300"
                  >
                    Order {activeItem.title}
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Compact 4x3 Interactive Tile Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {MENU_CATEGORIES.map((item, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <Card
                  key={item.title}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group cursor-pointer rounded-[14px] transition-all duration-200 overflow-hidden ${
                    isActive
                      ? "bg-white border-2 border-[#012973] shadow-md"
                      : "bg-[#fefeff] border border-[#e7edf3] hover:border-[#012973]/40 hover:shadow-sm"
                  }`}
                >
                  <CardContent className="p-2.5 flex flex-col items-center text-center h-full justify-between">
                    <div className="w-full flex items-center justify-end">
                      <span
                        className={`size-2 rounded-full transition-colors ${
                          isActive ? "bg-[#012973]" : "bg-[#e7edf3]"
                        }`}
                      />
                    </div>

                    <div className="h-[74px] flex items-center justify-center my-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-[68px] w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <h5
                      className={`font-heading font-medium text-[14px] sm:text-[15px] leading-tight mt-1 transition-colors ${
                        isActive ? "text-[#012973]" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h5>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
