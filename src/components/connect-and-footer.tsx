import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { OnlineOrderDialog } from "@/components/online-order-dialog";
import { FOOTER_QUICK_LINKS, USA_LOCATIONS } from "@/data/site-data";

export function ConnectAndFooter() {
  return (
    <footer id="contact" className="bg-[#fffeed] pt-8">
      {/* Top Floating Connect CTA Card bridging cream & dark footer */}
      <div className="w-[92%] sm:w-[80%] mx-auto relative z-10 -mb-10 sm:-mb-14">
        <Card className="bg-[#012973] text-white border-none rounded-[24px] shadow-2xl overflow-hidden">
          <CardContent className="p-7 sm:p-10 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <Badge className="rounded-full bg-[#ffed00] text-[#212121] hover:bg-[#ffed00] font-sans font-bold uppercase tracking-widest px-3.5 py-0.5 text-[11px] mb-3">
                Stay Connected
              </Badge>
              <h3 className="font-heading font-medium text-[32px] sm:text-[42px] leading-[1.05] tracking-[1px] text-white mb-2">
                Connect With Us Today
              </h3>
              <p className="font-sans text-base leading-[24px] text-white/80">
                Follow our U.S. kitchens for new menu drops, festival catering,
                and exclusive offers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                nativeButton={false}
                render={
                  <a
                    href="https://www.instagram.com/jaybhavaniofficial/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  />
                }
                variant="ghost"
                size="icon"
                className="size-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#ffed00] hover:text-[#212121] transition-colors"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm9.5 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </Button>
              <Button
                nativeButton={false}
                render={
                  <a
                    href="https://www.facebook.com/jaybhavaniofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  />
                }
                variant="ghost"
                size="icon"
                className="size-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#ffed00] hover:text-[#212121] transition-colors"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M13.5 22v-8.25h2.77l.41-3.22H13.5V8.48c0-.93.26-1.57 1.6-1.57h1.7V4.03A22.7 22.7 0 0 0 14.32 3.9c-2.46 0-4.14 1.5-4.14 4.25v2.38H7.4v3.22h2.78V22h3.32Z" />
                </svg>
              </Button>
              <Button
                nativeButton={false}
                render={
                  <a href="mailto:jbvfoods24x7@gmail.com" aria-label="Email" />
                }
                variant="ghost"
                size="icon"
                className="size-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#ffed00] hover:text-[#212121] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Button>
              <OnlineOrderDialog className="bg-[#ffed00] text-[#212121] hover:bg-white text-sm px-6 py-3" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#121212] text-white pt-20 sm:pt-28">
        <div className="w-[92%] sm:w-[80%] mx-auto pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <a href="#top" className="inline-block mb-5">
                <img
                  src="/assets/img/sticker-monogram.png"
                  alt="Jay Bhavani Monogram"
                  className="w-[88px] h-auto"
                />
              </a>
              <p className="font-sans text-base leading-[26px] text-white/75 mb-4">
                Driven by a passion for authentic Indian street food, Jay Bhavani
                brings 25+ years of flavor and craftsmanship to kitchens across
                the United States and worldwide.
              </p>
              <Badge
                variant="outline"
                className="rounded-full border-white/20 text-[#ffed00] font-sans font-bold text-xs uppercase px-3 py-1"
              >
                Since 1998 • 195+ Global Outlets
              </Badge>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-heading font-medium text-2xl tracking-[1px] text-white mb-2">
                Explore
              </h4>
              <Separator className="w-12 h-[3px] bg-[#ffed00] mb-5" />
              <ul className="space-y-2.5">
                {FOOTER_QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-base text-white/75 hover:text-[#ffed00] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* USA Kitchens */}
            <div className="lg:col-span-3">
              <h4 className="font-heading font-medium text-2xl tracking-[1px] text-white mb-2">
                USA Kitchens
              </h4>
              <Separator className="w-12 h-[3px] bg-[#ffed00] mb-5" />
              <ul className="space-y-2.5">
                {USA_LOCATIONS.map((loc) => (
                  <li key={loc.city}>
                    <a
                      href={loc.orderUrl ?? "#store-locator"}
                      target={loc.orderUrl ? "_blank" : undefined}
                      rel={loc.orderUrl ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 font-sans text-base text-white/75 hover:text-[#ffed00] transition-colors"
                    >
                      <span>
                        {loc.city}, {loc.state.match(/\(([^)]+)\)/)?.[1] ?? loc.state}
                      </span>
                      {loc.orderUrl && (
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#ffed00]" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="font-heading font-medium text-2xl tracking-[1px] text-white mb-2">
                Contact
              </h4>
              <Separator className="w-12 h-[3px] bg-[#ffed00] mb-5" />
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="size-8 shrink-0 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                    <MapPin className="h-4 w-4 text-[#ffed00]" />
                  </span>
                  <a
                    href="https://maps.app.goo.gl/yguaKTBf5kyjNaXW7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm leading-[22px] text-white/75 hover:text-[#ffed00] transition-colors"
                  >
                    Office 808-809, The Capital 2, Science City Rd, Sola,
                    Ahmedabad 380060
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-8 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-[#ffed00]" />
                  </span>
                  <a
                    href="tel:+917575805500"
                    className="font-sans text-base text-white/75 hover:text-[#ffed00] transition-colors"
                  >
                    +91 75758 05500
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-8 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-[#ffed00]" />
                  </span>
                  <a
                    href="mailto:jbvfoods24x7@gmail.com"
                    className="font-sans text-base text-white/75 hover:text-[#ffed00] transition-colors"
                  >
                    jbvfoods24x7@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 py-5">
          <div className="w-[92%] sm:w-[80%] mx-auto flex items-center justify-center">
            <p className="font-sans text-sm text-white/60 text-center">
              ©2026 Jay Bhavani Vadapav USA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
