"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ONLINE_ORDER_COUNTRIES } from "@/data/site-data";

interface OnlineOrderDialogProps {
  className?: string;
}

export function OnlineOrderDialog({ className }: OnlineOrderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            className={cn(
              "rounded-full bg-[#012973] hover:bg-black text-white font-sans font-medium uppercase tracking-wider text-base md:text-[18px] px-7 py-5 h-auto transition-colors duration-300 cursor-pointer",
              className
            )}
          />
        }
      >
        Online Order
      </DialogTrigger>
      <DialogContent className="sm:max-w-[540px] bg-white text-black border-[#e7edf3] p-6 md:p-8 rounded-2xl">
        <DialogHeader className="items-center text-center pb-2">
          <DialogTitle className="flex items-center justify-center gap-2 text-[#e31e24] font-heading text-3xl md:text-4xl font-medium tracking-wide">
            <MapPin className="h-7 w-7 text-[#e31e24] shrink-0" />
            <span>Select Location</span>
          </DialogTitle>
        </DialogHeader>

        <Accordion defaultValue={["usa"]} className="w-full space-y-3 mt-2">
          {ONLINE_ORDER_COUNTRIES.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-[#e7edf3] rounded-xl px-4 bg-[#fefeff] data-[state=open]:border-[#012973]/40 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-4 cursor-pointer">
                <div className="flex items-center gap-4">
                  <img
                    src={item.flag}
                    alt={`${item.country} flag`}
                    className="w-10 h-7 object-cover rounded shadow-sm"
                  />
                  <span className="font-sans font-bold text-xl uppercase tracking-wide text-black">
                    {item.country}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-4">
                <div className="flex flex-wrap gap-2.5">
                  {item.cities.map((city) => {
                    const isExternal = city.href.startsWith("http");
                    return (
                      <Button
                        key={city.name}
                        nativeButton={false}
                        render={
                          <a
                            href={city.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                          />
                        }
                        size="sm"
                        className="rounded-full bg-[#ffed00] hover:bg-[#012973] text-[#212121] hover:text-white font-sans font-bold text-sm px-4 py-2 h-auto transition-colors"
                      >
                        {city.name}
                      </Button>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
