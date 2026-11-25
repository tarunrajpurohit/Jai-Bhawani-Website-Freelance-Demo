"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { OnlineOrderDialog } from "@/components/online-order-dialog";
import { NAV_LINKS } from "@/data/site-data";

const MENU_DROPDOWN_GROUPS = [
  {
    label: "Street Classics",
    items: [
      "Vadapav",
      "Dabeli",
      "Chinese & Paneer Puff",
      "Sandwich",
      "Maska Bun",
    ],
  },
  {
    label: "Mains & Tawa",
    items: ["South Indian", "Bhaji Pav", "Pulav", "Chinese", "French Fries"],
  },
  {
    label: "Drinks & Shakes",
    items: ["Milkshakes", "Fresh Juice"],
  },
];

const MORE_LINKS = [
  { label: "Our Story", href: "#about" },
  { label: "Food Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 w-full px-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto max-w-[1160px] mx-auto rounded-full bg-[#fffeed]/95 backdrop-blur-md border-2 border-[#012973] shadow-lg px-4 md:px-5 py-2 flex items-center justify-between gap-3">
        <a href="#top" className="shrink-0 flex items-center">
          <img
            src="/assets/img/logo.png"
            alt="Jay Bhavani Vadapav"
            className="w-[105px] md:w-[120px] h-auto object-contain"
          />
        </a>

        {/* Compact 5-item nav with Category-wise Menu Dropdown */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-[#012973]/[0.06] rounded-full p-1">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  className="rounded-full font-sans font-bold text-[13px] xl:text-[14px] uppercase tracking-wider text-black hover:text-[#012973] hover:bg-white px-3.5 py-1.5 h-auto transition-all cursor-pointer"
                />
              }
            >
              Menu <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={10}
              className="w-[460px] bg-white border border-[#e7edf3] rounded-2xl p-4 shadow-xl"
            >
              <div className="grid grid-cols-3 gap-3">
                {MENU_DROPDOWN_GROUPS.map((group) => (
                  <DropdownMenuGroup key={group.label}>
                    <DropdownMenuLabel className="font-sans font-extrabold text-[11px] uppercase tracking-wider text-[#012973] px-2 py-1">
                      {group.label}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-1 bg-[#e7edf3]" />
                    {group.items.map((item) => (
                      <DropdownMenuItem
                        key={item}
                        render={<a href="#menu" />}
                        className="font-sans font-semibold text-sm text-black/85 hover:text-[#012973] hover:bg-[#fffeed] rounded-lg px-2 py-1.5 cursor-pointer"
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            nativeButton={false}
            render={<a href="#store-locator" />}
            variant="ghost"
            className="rounded-full font-sans font-bold text-[13px] xl:text-[14px] uppercase tracking-wider text-black hover:text-[#012973] hover:bg-white px-3.5 py-1.5 h-auto transition-all"
          >
            USA Locations
          </Button>

          <Button
            nativeButton={false}
            render={<a href="#catering" />}
            variant="ghost"
            className="rounded-full font-sans font-bold text-[13px] xl:text-[14px] uppercase tracking-wider text-black hover:text-[#012973] hover:bg-white px-3.5 py-1.5 h-auto transition-all"
          >
            Catering
          </Button>

          <Button
            nativeButton={false}
            render={<a href="#franchise" />}
            variant="ghost"
            className="rounded-full font-sans font-bold text-[13px] xl:text-[14px] uppercase tracking-wider text-black hover:text-[#012973] hover:bg-white px-3.5 py-1.5 h-auto transition-all"
          >
            Franchise
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  className="rounded-full font-sans font-bold text-[13px] xl:text-[14px] uppercase tracking-wider text-black hover:text-[#012973] hover:bg-white px-3.5 py-1.5 h-auto transition-all cursor-pointer"
                />
              }
            >
              More <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-44 bg-white border border-[#e7edf3] rounded-xl p-1.5 shadow-xl"
            >
              {MORE_LINKS.map((link) => (
                <DropdownMenuItem
                  key={link.label}
                  render={<a href={link.href} />}
                  className="font-sans font-semibold text-sm text-black/85 hover:text-[#012973] hover:bg-[#fffeed] rounded-lg px-3 py-2 cursor-pointer"
                >
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <OnlineOrderDialog className="text-xs md:text-sm px-5 py-2.5" />
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  aria-label="Open navigation menu"
                  className="lg:hidden size-9 p-0 bg-[#012973] hover:bg-black text-white rounded-full cursor-pointer"
                />
              }
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="bg-black/90 backdrop-blur-md text-white border-b-[3px] border-[#012973] py-8 px-6"
            >
              <SheetHeader className="items-center pb-4">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <img
                  src="/assets/img/logo.png"
                  alt="Jay Bhavani Vadapav"
                  className="w-[140px] h-auto"
                />
              </SheetHeader>
              <div className="flex flex-col items-center gap-2.5">
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.label}
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      />
                    }
                    variant="ghost"
                    onClick={() => setOpen(false)}
                    className="rounded-full font-sans font-bold text-lg uppercase text-white hover:text-[#ffed00] hover:bg-white/10 w-full max-w-xs"
                  >
                    {link.label}
                  </Button>
                ))}
                <div className="pt-2 sm:hidden">
                  <OnlineOrderDialog className="text-sm px-6 py-3" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
