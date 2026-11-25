import { ArrowUpRight, Award, Store, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const FRANCHISE_PILLARS = [
  {
    icon: Store,
    title: "Turnkey Setup",
    desc: "Kitchen layout & U.S. equipment specs",
  },
  {
    icon: TrendingUp,
    title: "Proven Model",
    desc: "25+ years & 195+ global outlets",
  },
  {
    icon: Award,
    title: "Full Support",
    desc: "Training, recipes & supply chain",
  },
];

export function FranchiseSection() {
  return (
    <section
      id="franchise"
      className="relative bg-[#fffeed] py-10 md:py-14 overflow-hidden"
    >
      <div className="w-[92%] sm:w-[80%] mx-auto">
        <Reveal>
          <Card className="bg-white border border-[#e7edf3] rounded-[28px] shadow-xl overflow-hidden">
            <CardContent className="p-6 sm:p-10 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left: Clean Storefront Photo + Integrated Bottom Stats Bar */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] lg:aspect-[4/4.2] bg-[#fffeed]">
                    <img
                      src="/assets/img/franchise.png"
                      alt="Jay Bhavani Vadapav Storefront"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-3.5 sm:p-5">
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 sm:p-3">
                        <div>
                          <div className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-[#ffed00] leading-none">
                            25+
                          </div>
                          <div className="font-sans text-[10px] sm:text-[11px] font-semibold text-white/85 mt-1">
                            Years Legacy
                          </div>
                        </div>
                        <div className="border-x border-white/20">
                          <div className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-[#ffed00] leading-none">
                            195+
                          </div>
                          <div className="font-sans text-[10px] sm:text-[11px] font-semibold text-white/85 mt-1">
                            Global Stores
                          </div>
                        </div>
                        <div>
                          <div className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-[#ffed00] leading-none">
                            7
                          </div>
                          <div className="font-sans text-[10px] sm:text-[11px] font-semibold text-white/85 mt-1">
                            USA Cities
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Structured USA Franchise Pitch & 3 Pillar Cards */}
                <div className="lg:col-span-7">
                  <Badge className="rounded-full bg-[#012973] text-[#ffed00] hover:bg-[#012973] font-sans font-bold uppercase tracking-widest px-4 py-1 text-xs mb-4">
                    USA Expansion Opportunity
                  </Badge>

                  <h2 className="font-heading font-medium text-[38px] sm:text-[50px] md:text-[58px] leading-[1.02] tracking-[1px] text-black mb-2">
                    Own a USA Franchise
                  </h2>
                  <h3 className="font-sans font-extrabold text-lg sm:text-xl uppercase tracking-wide text-[#012973] mb-4">
                    And Serve Up a Delicious Slice of Success
                  </h3>

                  <p className="font-sans text-base sm:text-lg leading-[27px] text-black/75 mb-6">
                    Bring India’s most loved street-food brand to your U.S.
                    community. With standardized operations, high-demand menu
                    favorites, and dedicated launch support, we help partners
                    scale with confidence.
                  </p>

                  {/* 3 Clean Pillar Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                    {FRANCHISE_PILLARS.map((pillar) => {
                      const Icon = pillar.icon;
                      return (
                        <Card
                          key={pillar.title}
                          className="bg-[#fffeed] border border-[#e7edf3] rounded-[16px] shadow-none"
                        >
                          <CardContent className="p-4">
                            <div className="size-9 rounded-xl bg-[#012973] text-[#ffed00] flex items-center justify-center mb-2.5">
                              <Icon className="h-4 w-4" />
                            </div>
                            <h4 className="font-heading font-medium text-xl text-black leading-tight mb-1">
                              {pillar.title}
                            </h4>
                            <p className="font-sans text-xs leading-relaxed text-black/70">
                              {pillar.desc}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      nativeButton={false}
                      render={<a href="#contact" />}
                      className="rounded-full bg-[#012973] hover:bg-black text-white font-sans font-bold uppercase tracking-wider text-sm px-7 py-4 h-auto transition-colors"
                    >
                      Apply for USA Franchise
                      <ArrowUpRight className="ml-1.5 h-4 w-4" />
                    </Button>
                    <Button
                      nativeButton={false}
                      render={<a href="#store-locator" />}
                      variant="outline"
                      className="rounded-full border-[#012973]/30 text-[#012973] hover:bg-[#012973] hover:text-white font-sans font-bold uppercase tracking-wider text-sm px-7 py-4 h-auto transition-colors"
                    >
                      See Existing USA Stores
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
