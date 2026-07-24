import Image from "next/image";
import { InstagramGlyph as InstagramIcon } from "./icons/InstagramGlyph";
import { Reveal } from "./Reveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";
import jeepCompass from "@/assets/photos/estoque/jeep-compass.jpg";
import vwJetta from "@/assets/photos/estoque/vw-jetta.jpg";
import audiA3 from "@/assets/photos/estoque/audi-a3.jpg";
import hondaHrv from "@/assets/photos/estoque/honda-hrv.jpg";
import fordFocus from "@/assets/photos/estoque/ford-focus.jpg";
import chevroletPrisma from "@/assets/photos/estoque/chevrolet-prisma.jpg";
import fordFiesta from "@/assets/photos/estoque/ford-fiesta.jpg";
import peugeot207 from "@/assets/photos/estoque/peugeot-207.jpg";
import chevroletCelta from "@/assets/photos/estoque/chevrolet-celta.jpg";
import vwVoyage from "@/assets/photos/estoque/vw-voyage.jpg";
import toyotaCorolla from "@/assets/photos/estoque/toyota-corolla.jpg";
import hondaCivic from "@/assets/photos/estoque/honda-civic.jpg";

const POSTS = [
  { src: jeepCompass, alt: "Jeep Compass que passou pela Avenidas Car" },
  { src: vwJetta, alt: "Volkswagen Jetta que passou pela Avenidas Car" },
  { src: audiA3, alt: "Audi A3 que passou pela Avenidas Car" },
  { src: hondaHrv, alt: "Honda HR-V que passou pela Avenidas Car" },
  { src: fordFocus, alt: "Ford Focus que passou pela Avenidas Car" },
  { src: chevroletPrisma, alt: "Chevrolet Prisma que passou pela Avenidas Car" },
  { src: fordFiesta, alt: "Ford Fiesta que passou pela Avenidas Car" },
  { src: peugeot207, alt: "Peugeot 207 que passou pela Avenidas Car" },
  { src: chevroletCelta, alt: "Chevrolet Celta que passou pela Avenidas Car" },
  { src: vwVoyage, alt: "Volkswagen Voyage que passou pela Avenidas Car" },
  { src: toyotaCorolla, alt: "Toyota Corolla que passou pela Avenidas Car" },
  { src: hondaCivic, alt: "Honda Civic que passou pela Avenidas Car" },
];

export function Instagram() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
              Direto do nosso Instagram
            </p>
            <h2 className="section-heading mt-4 text-4xl font-semibold text-[#f2f1ec] sm:text-5xl">
              Siga a Avenidas Car
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[.16] px-5 py-2.5 text-sm font-semibold text-[#f2f1ec] transition-colors hover:border-white/[.32]"
          >
            <InstagramIcon className="h-4 w-4" />
            {INSTAGRAM_HANDLE}
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {POSTS.map((post, i) => (
            <Reveal key={post.alt} delay={i * 0.05}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver publicação no Instagram da Avenidas Car"
                className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover object-[center_30%] transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />
                <InstagramIcon className="relative h-6 w-6 text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
