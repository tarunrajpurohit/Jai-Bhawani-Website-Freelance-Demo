import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { COMMUNITY_PHOTOS } from "@/data/site-data";

export function CommunityGridSection() {
  return (
    <section
      id="gallery"
      className="relative bg-[#fffeed] py-10 md:py-14 overflow-hidden"
    >
      <div className="w-[92%] sm:w-[80%] mx-auto">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-9">
            <div className="max-w-3xl">
              <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#012973] mb-2">
                Fresh From Our Kitchens
              </p>
              <h2 className="font-heading font-medium text-[36px] sm:text-[46px] md:text-[56px] leading-[1.03] tracking-[1px] text-black mb-3">
                A Flavorful Variety That’s Impossible to Resist!
              </h2>
              <p className="font-sans text-base sm:text-lg leading-[27px] text-black/80">
                From crispy classics to cheesy and fiery variations — every bite
                is a fresh, flavor-packed street-food experience.
              </p>
            </div>

            <Button
              nativeButton={false}
              render={<a href="#menu" />}
              className="rounded-full bg-[#012973] hover:bg-black text-white font-sans font-bold uppercase tracking-wider text-sm px-7 py-4 h-auto shrink-0 self-start lg:self-end transition-colors"
            >
              View Full Menu
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        {/* Clean Symmetrical 4x2 Bento Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-4">
          {COMMUNITY_PHOTOS.map((photo, idx) => (
            <Reveal key={photo.id} delayMs={idx * 45}>
              <div className="group relative overflow-hidden rounded-[18px] aspect-[4/3] bg-black/5 shadow-sm hover:shadow-xl transition-all duration-300">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                  <Badge className="rounded-full bg-[#ffed00] text-[#212121] font-sans font-bold text-[11px] uppercase tracking-wide px-3 py-0.5">
                    {photo.caption}
                  </Badge>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
