"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { USA_LOCATIONS } from "@/data/site-data";

const REGIONS = ["All", "South", "East", "Midwest & West"] as const;

export function StoreLocatorSection() {
  return (
    <section
      id="store-locator"
      className="relative w-full bg-[#fffeed] py-10 md:py-14"
    >
      <div className="w-[92%] sm:w-[80%] mx-auto rounded-[28px] bg-[#012973] text-white p-6 sm:p-10 md:p-12 shadow-xl">
        <Reveal>
          <Tabs defaultValue="All" className="w-full">
            {/* Clean Top Header + Region Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
              <div>
                <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#ffed00] mb-1.5">
                  7 Kitchens Across America
                </p>
                <h2 className="font-heading font-medium text-[34px] sm:text-[44px] md:text-[50px] leading-[1.05] tracking-[1px] text-white">
                  USA Store Locator
                </h2>
              </div>

              <TabsList className="bg-white/10 p-1 rounded-full h-auto flex-wrap justify-start self-start lg:self-center border border-white/15">
                {REGIONS.map((region) => (
                  <TabsTrigger
                    key={region}
                    value={region}
                    className="rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-1.5 text-white/85 data-[state=active]:bg-[#ffed00] data-[state=active]:text-[#212121] cursor-pointer"
                  >
                    {region}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Clean 2-Column Layout: Equal Height, Zero Overflow, Symmetrical Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left 4 cols: Matches Right Column Height */}
              <div className="lg:col-span-4">
                <div className="relative h-[300px] lg:h-full lg:min-h-[440px] rounded-[20px] overflow-hidden">
                  <img
                    src="/assets/img/jay-bhavani-store-2.jpg"
                    alt="Jay Bhavani USA Store Map"
                    className="w-full h-full object-cover object-[15%_center]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent flex flex-col justify-end p-5">
                    <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#ffed00] mb-1">
                      Dine-In • Takeout • Catering
                    </span>
                    <p className="font-heading text-2xl text-white leading-tight">
                      Fresh Indian Street Food Near You
                    </p>
                  </div>
                </div>
              </div>

              {/* Right 8 cols: Clean White City Cards */}
              <div className="lg:col-span-8 lg:min-h-[440px]">
                {REGIONS.map((region) => {
                  const filtered =
                    region === "All"
                      ? USA_LOCATIONS
                      : USA_LOCATIONS.filter((loc) => loc.region === region);
                  return (
                    <TabsContent key={region} value={region} className="mt-0 h-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
                        {filtered.map((loc, idx) => (
                          <motion.div
                            key={loc.city}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: idx * 0.04 }}
                            whileHover={{ y: -4, scale: 1.015 }}
                          >
                            <Card className="bg-white text-black border-none rounded-[14px] shadow-sm hover:shadow-lg transition-shadow duration-200 h-full">
                            <CardContent className="p-3.5 sm:px-4 sm:py-3.5 flex items-center justify-between gap-3">
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-[#012973] shrink-0" />
                                  <h3 className="font-heading font-medium text-2xl leading-none text-black truncate">
                                    {loc.city}
                                  </h3>
                                </div>
                                <p className="font-sans text-sm text-black/65 mt-1 pl-6">
                                  {loc.state} • {loc.status}
                                </p>
                              </div>

                              {loc.orderUrl ? (
                                <Button
                                  nativeButton={false}
                                  render={
                                    <a
                                      href={loc.orderUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    />
                                  }
                                  size="sm"
                                  className="rounded-full bg-[#012973] hover:bg-[#ffed00] hover:text-[#212121] text-white font-sans font-bold text-xs uppercase px-4 py-2 h-auto shrink-0 transition-colors"
                                >
                                  Order
                                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                                </Button>
                              ) : (
                                <Button
                                  nativeButton={false}
                                  render={<a href="#contact" />}
                                  size="sm"
                                  variant="outline"
                                  className="rounded-full border-[#012973]/25 text-[#012973] hover:bg-[#012973] hover:text-white font-sans font-bold text-xs uppercase px-4 py-2 h-auto shrink-0 transition-colors"
                                >
                                  Visit
                                </Button>
                              )}
                            </CardContent>
                          </Card>
                          </motion.div>
                        ))}

                        {region === "All" && (
                          <Card className="bg-[#ffed00] text-[#212121] border-none rounded-[14px] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                            <CardContent className="p-3.5 sm:px-4 sm:py-3.5 flex items-center justify-between gap-3">
                              <div className="min-w-0">
                                <h3 className="font-heading font-medium text-xl sm:text-2xl leading-none text-[#212121]">
                                  More Cities Soon
                                </h3>
                                <p className="font-sans text-sm text-[#212121]/80 mt-1">
                                  Bring Jay Bhavani to your city
                                </p>
                              </div>
                              <Button
                                nativeButton={false}
                                render={<a href="#franchise" />}
                                size="sm"
                                className="rounded-full bg-[#012973] hover:bg-black text-white font-sans font-bold text-xs uppercase px-4 py-2 h-auto shrink-0 transition-colors"
                              >
                                Franchise
                                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                              </Button>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </TabsContent>
                  );
                })}
              </div>
            </div>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
