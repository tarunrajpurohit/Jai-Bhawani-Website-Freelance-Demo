import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const CATERING_EVENTS = [
  "Weddings",
  "Corporate Events",
  "University & Festivals",
  "Private Parties",
];

export function CateringCtaSection() {
  return (
    <section
      id="catering"
      className="w-full bg-[#fffeed] py-10 md:py-14"
    >
      <div
        className="w-[92%] sm:w-[80%] mx-auto relative rounded-[28px] overflow-hidden bg-cover bg-center shadow-2xl"
        style={{ backgroundImage: "url(/assets/img/jbv-catring.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-[#012973]/65" />

        <Reveal>
          <div className="relative z-10 py-24 md:py-32 px-6 sm:px-10 md:px-16 max-w-3xl text-white">
            <Badge className="rounded-full bg-[#ffed00] text-[#212121] hover:bg-[#ffed00] font-sans font-bold uppercase tracking-widest px-4 py-1 text-xs mb-4">
              USA Live Catering
            </Badge>

            <h2 className="font-heading font-medium text-[40px] sm:text-[58px] md:text-[74px] leading-[0.98] tracking-[1px] text-white mb-4">
              Bringing the Flavor to Your Event!
            </h2>

            <p className="font-sans text-base sm:text-lg leading-[27px] text-white/85 mb-6 max-w-xl">
              Live Vadapav, Dabeli, Dosa, and Indo-Chinese stations tailored for
              celebrations across the United States.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {CATERING_EVENTS.map((evt) => (
                <Badge
                  key={evt}
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 text-white font-sans font-semibold text-xs px-3.5 py-1"
                >
                  {evt}
                </Badge>
              ))}
            </div>

            <Button
              nativeButton={false}
              render={<a href="#contact" />}
              className="rounded-full bg-[#ffed00] hover:bg-white text-[#212121] font-sans font-bold uppercase tracking-wider text-sm md:text-base px-8 py-4 h-auto transition-colors duration-300"
            >
              Inquire for Catering
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
