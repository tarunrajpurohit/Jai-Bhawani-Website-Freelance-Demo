import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export function DirectorSection() {
  return (
    <section className="w-full bg-[#fffeed] py-10 md:py-14">
      <div className="w-[92%] sm:w-[80%] mx-auto rounded-[28px] overflow-hidden bg-[#012973] text-white shadow-xl">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Portrait */}
            <div className="lg:col-span-5 min-h-[360px] lg:min-h-[480px]">
              <img
                src="/assets/img/jbv-md.jpg"
                alt="Kishan Singh Rajput - Managing Director"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Right: Executive Quote */}
            <div className="lg:col-span-7 p-8 sm:p-10 md:p-14 flex flex-col justify-center">
              <Badge className="self-start rounded-full bg-[#ffed00] text-[#212121] hover:bg-[#ffed00] font-sans font-bold uppercase tracking-widest px-4 py-1 text-xs mb-5">
                Managing Director
              </Badge>

              <Quote className="h-9 w-9 text-[#ffed00]/80 mb-3" />

              <p className="font-sans text-xl sm:text-2xl leading-[34px] text-white/95 mb-6">
                “We don’t just cook food; we blend perfection and taste in every
                bite. On top of that, our fast, organized processes ensure
                perfection in every bite.”
              </p>

              <div>
                <h2 className="font-heading font-medium text-[34px] sm:text-[42px] leading-none text-white">
                  Kishan Singh Rajput
                </h2>
                <p className="font-sans text-sm uppercase tracking-widest text-white/70 mt-1.5">
                  Jay Bhavani Vadapav • Global Leadership
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
