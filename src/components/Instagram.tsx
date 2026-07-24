"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramGlyph as InstagramIcon } from "./icons/InstagramGlyph";
import { Reveal } from "./Reveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";
import hondaHrvEstrada from "@/assets/photos/instagram/honda-hrv-estrada.jpg";
import hondaCityEstrada from "@/assets/photos/instagram/honda-city-estrada.jpg";
import vwJettaEstrada from "@/assets/photos/instagram/vw-jetta-estrada.jpg";
import avmotosNovidade from "@/assets/photos/instagram/avmotos-novidade-eletrica.jpg";
import chevroletOnixAnuncio from "@/assets/photos/instagram/chevrolet-onix-anuncio.jpg";
import chevroletCruzeAnuncio from "@/assets/photos/instagram/chevrolet-cruze-anuncio.jpg";
import vwSaveiroAnuncio from "@/assets/photos/instagram/vw-saveiro-trooper-anuncio.jpg";
import audiA3Anuncio from "@/assets/photos/instagram/audi-a3-anuncio.jpg";

// As 8 fotos reais publicadas no Instagram @avenidascar.
const POSTS = [
  { src: hondaHrvEstrada, alt: "Honda HR-V que passou pela Avenidas Car" },
  { src: hondaCityEstrada, alt: "Honda City que passou pela Avenidas Car" },
  { src: vwJettaEstrada, alt: "Volkswagen Jetta que passou pela Avenidas Car" },
  { src: chevroletOnixAnuncio, alt: "Chevrolet Onix anunciado pela Avenidas Car" },
  { src: chevroletCruzeAnuncio, alt: "Chevrolet Cruze anunciado pela Avenidas Car" },
  { src: vwSaveiroAnuncio, alt: "Volkswagen Saveiro Trooper anunciada pela Avenidas Car" },
  { src: audiA3Anuncio, alt: "Audi A3 anunciado pela Avenidas Car" },
  { src: avmotosNovidade, alt: "Novidade elétrica da AV Motos, parceira da Avenidas Car" },
];

/**
 * Carrossel horizontal (não a rolagem vertical padrão da página).
 *
 * Decisões pensadas para mobile primeiro:
 * - `touch-action: pan-x` no trilho avisa o navegador que ESTE elemento
 *   trata o gesto horizontal — um arrasto predominantemente vertical some
 *   normal para a página, um arrasto horizontal rola o carrossel. Sem isso,
 *   o gesto fica ambíguo e o usuário sente o "cabo de guerra" entre rolar a
 *   página e arrastar os cards.
 * - `scroll-snap` nativo (CSS, sem JS) encaixa cada card na tela ao soltar o
 *   dedo — sem isso o carrossel para em qualquer posição intermediária.
 * - Cada card ocupa ~72% da largura no mobile de propósito: mostra o próximo
 *   card "espiando" na borda, sinalizando visualmente que dá para arrastar,
 *   sem precisar de nenhum texto explicativo (ajuda quem tem JS de reveal
 *   desabilitado ou reduced-motion também).
 * - A animação de entrada de cada card usa só `transform`/`opacity` (via
 *   Reveal) — as duas propriedades mais baratas para o compositor, mesmo em
 *   aparelhos de entrada; nada de blur ou box-shadow animado aqui.
 * - `viewport.amount` mais baixo (0.35) e duração mais curta (0.45s) que o
 *   padrão do site: numa fileira horizontal o usuário já está com o dedo em
 *   movimento constante, então a entrada precisa resolver rápido — um delay
 *   perceptível aqui lida como "esperando o card carregar", não como um
 *   efeito bonito.
 */
export function Instagram() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const amount = firstCard ? firstCard.getBoundingClientRect().width + 16 : 320;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

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

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/[.16] px-5 py-2.5 text-sm font-semibold text-[#f2f1ec] transition-colors hover:border-white/[.32]"
            >
              <InstagramIcon className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Ver publicação anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[.16] text-[#f2f1ec] transition-colors hover:border-white/[.32] hover:bg-white/[.06]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Ver próxima publicação"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[.16] text-[#f2f1ec] transition-colors hover:border-white/[.32] hover:bg-white/[.06]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 flex items-center gap-1.5 text-xs font-medium text-steel sm:hidden">
          Arraste para o lado para ver mais posts
          <ChevronRight className="h-3.5 w-3.5 animate-pulse" />
        </p>

        <div
          ref={scrollerRef}
          className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 sm:mt-6 [touch-action:pan-x]"
        >
          {POSTS.map((post, i) => (
            <Reveal
              key={post.alt}
              x={28}
              y={0}
              amount={0.35}
              duration={0.45}
              delay={Math.min(i, 4) * 0.05}
              className="w-[72%] shrink-0 snap-start sm:w-[42%] lg:w-[23%]"
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver publicação no Instagram da Avenidas Car"
                className="group relative block aspect-[3/4] overflow-hidden rounded-xl"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 42vw, 72vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />
                <InstagramIcon className="absolute bottom-4 right-4 h-6 w-6 text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
