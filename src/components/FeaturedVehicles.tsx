"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { InstagramGlyph as InstagramIcon } from "./icons/InstagramGlyph";
import { INSTAGRAM_URL } from "@/lib/constants";

const FEATURED = [
  {
    src: "/videos/passaram-pela-loja/golf-branco.mp4",
    alt: "Volkswagen Golf branco que passou pela Avenidas Car",
    tag: "Hatch",
  },
  {
    src: "/videos/passaram-pela-loja/gol-prata.mp4",
    alt: "Volkswagen Gol prata que passou pela Avenidas Car",
    tag: "Hatch",
  },
  {
    src: "/videos/passaram-pela-loja/hyundai-i30.mp4",
    alt: "Hyundai i30 que passou pela Avenidas Car",
    tag: "Hatch",
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
            <Reveal key={item.src} delay={i * 0.08}>
              <FeaturedVideoCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedVideoCard({
  item,
}: {
  item: (typeof FEATURED)[number];
}) {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    videoRef.current?.play().catch(() => {});
  }, [prefersReducedMotion]);

  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[.1] bg-surface">
      <video
        ref={videoRef}
        src={item.src}
        aria-label={item.alt}
        muted
        loop
        playsInline
        autoPlay={!prefersReducedMotion}
        controls={!!prefersReducedMotion}
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, rgba(10,10,11,0.75) 100%)",
        }}
      />
      <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-[#f2f1ec] backdrop-blur-sm">
        {item.tag}
      </span>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold text-[#f2f1ec] backdrop-blur-sm transition-colors hover:bg-black/75"
      >
        <InstagramIcon className="h-3.5 w-3.5" />
        Assistir com som no Instagram
      </a>
    </div>
  );
}
