import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const MILESTONES = [
  { value: "1998", label: "Founded in Ahmedabad" },
  { value: "195+", label: "Global Outlets" },
  { value: "4", label: "Countries Worldwide" },
  { value: "7", label: "USA Kitchens" },
];

export function TwentyFiveYearsSection() {
  return (
    <section id="about" className="w-full bg-[#fffeed] py-10 md:py-14">
      <div className="w-[92%] sm:w-[80%] mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Framed Editorial Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[4/4.2]">
                <img
                  src="/assets/img/25-years.jpg"
                  alt="25 Years of Trust and Taste"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <Badge className="rounded-full bg-[#ffed00] text-[#212121] hover:bg-[#ffed00] font-sans font-bold uppercase tracking-wider px-4 py-1 text-xs">
                    25+ Years of Trust &amp; Taste
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right: Story + 4 Milestone Stat Cards */}
            <div className="lg:col-span-7">
              <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#012973] mb-2">
                Our Global Journey
              </p>
              <h2 className="font-heading font-medium text-[36px] sm:text-[46px] md:text-[54px] leading-[1.05] tracking-[1px] text-black mb-4">
                Mouthwatering Deliciousness from India Goes Global!
              </h2>
              <p className="font-sans text-base sm:text-lg leading-[27px] text-black/80 mb-6">
                With{" "}
                <span className="text-[#012973] font-extrabold">
                  195+ outlets spanning India, USA, Canada, and Australia,
                </span>{" "}
                we bring authentic Indian street-food magic to food lovers
                across continents — crafted fresh with the same passion since
                1998.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                {MILESTONES.map((m) => (
                  <Card
                    key={m.label}
                    className="bg-white border border-[#e7edf3] rounded-[16px] shadow-sm"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="font-sans font-extrabold text-3xl text-[#012973] leading-none">
                        {m.value}
                      </div>
                      <div className="font-sans text-xs font-semibold text-black/65 mt-1.5">
                        {m.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button
                nativeButton={false}
                render={<a href="#franchise" />}
                className="rounded-full bg-[#012973] hover:bg-black text-white font-sans font-bold uppercase tracking-wider text-sm px-7 py-4 h-auto transition-colors"
              >
                Explore USA Franchise
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
