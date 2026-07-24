import Image from "next/image";
import { Reveal } from "./Reveal";
import jeepCompass from "@/assets/photos/estoque/jeep-compass.jpg";
import toyotaCorolla from "@/assets/photos/estoque/toyota-corolla.jpg";
import hondaCivic from "@/assets/photos/estoque/honda-civic.jpg";

const FEATURED = [
  {
    src: jeepCompass,
    alt: "Jeep Compass seminovo do estoque da Avenidas Car",
    tag: "SUV",
  },
  {
    src: toyotaCorolla,
    alt: "Toyota Corolla seminovo do estoque da Avenidas Car",
    tag: "Sedan",
  },
  {
    src: hondaCivic,
    alt: "Honda Civic seminovo do estoque da Avenidas Car",
    tag: "Sedan",
  },
];

export function FeaturedVehicles() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
              Destaque dos veículos
            </p>
            <h2 className="section-heading mt-4 max-w-xl text-3xl font-semibold text-[#f2f1ec] sm:text-4xl">
              Alguns dos veículos que já passaram pela nossa loja
            </h2>
          </div>
          <a
            href="#estoque"
            className="text-sm font-semibold text-red-bright transition-colors hover:text-red"
          >
            Ver estoque completo →
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {FEATURED.map((item, i) => (
            <Reveal key={item.alt} delay={i * 0.08}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[.1]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(10,10,11,0.75) 100%)",
                  }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-[#f2f1ec] backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
