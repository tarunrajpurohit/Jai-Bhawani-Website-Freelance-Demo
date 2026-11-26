import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { USP_ITEMS } from "@/data/site-data";

export function UspSection() {
  return (
    <section className="relative bg-[#fffeed] py-10 md:py-14 overflow-hidden">
      <div className="w-[92%] sm:w-[80%] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#012973] mb-2">
                Why Foodies Love Us
              </p>
              <h2 className="font-heading font-medium text-[36px] sm:text-[48px] md:text-[56px] leading-[1.03] tracking-[1px] text-black">
                From First Bite to Forever Love!
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg leading-[26px] text-black/75 max-w-md">
              Making you fall in love with every bite is our Ultimate Special
              Power — fresh, crispy, and unforgettable.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {USP_ITEMS.map((item, idx) => (
            <Reveal key={item.title} delayMs={idx * 90} direction="scale">
              <Card className="group h-full bg-white border border-[#e7edf3] hover:border-[#012973] rounded-[20px] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2.5">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="size-16 rounded-2xl bg-[#fffeed] flex items-center justify-center p-2.5 group-hover:bg-[#012973]/10 transition-colors">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <Badge
                        variant="outline"
                        className="rounded-full border-[#012973]/20 text-[#012973] font-sans font-bold text-xs"
                      >
                        0{idx + 1}
                      </Badge>
                    </div>

                    <h3 className="font-heading font-medium text-[26px] leading-tight text-black mb-2.5">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base leading-[24px] text-black/75">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 h-1 w-10 rounded-full bg-[#ffed00] group-hover:w-full group-hover:bg-[#012973] transition-all duration-300" />
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
