"use client";

import { useMemo, useState } from "react";
import { Car, Gauge, Calendar, Settings2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { CATEGORIES, VEHICLES, formatKm, formatPrice, type VehicleCategory } from "@/lib/vehicles";
import { whatsappLink } from "@/lib/constants";

const PRICE_RANGES = [
  { label: "Todos os preços", min: 0, max: Infinity },
  { label: "Até R$ 100 mil", min: 0, max: 100_000 },
  { label: "R$ 100 a 200 mil", min: 100_000, max: 200_000 },
  { label: "Acima de R$ 200 mil", min: 200_000, max: Infinity },
];

export function Inventory() {
  const [category, setCategory] = useState<VehicleCategory | "Todos">("Todos");
  const [priceRange, setPriceRange] = useState(0);
  const [brand, setBrand] = useState("Todas");

  const brands = useMemo(
    () => ["Todas", ...Array.from(new Set(VEHICLES.map((v) => v.brand))).sort()],
    []
  );

  const filtered = useMemo(() => {
    const range = PRICE_RANGES[priceRange];
    return VEHICLES.filter((v) => {
      const matchesCategory = category === "Todos" || v.category === category;
      const matchesBrand = brand === "Todas" || v.brand === brand;
      const matchesPrice = v.price >= range.min && v.price < range.max;
      return matchesCategory && matchesBrand && matchesPrice;
    });
  }, [category, brand, priceRange]);

  return (
    <section id="estoque" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
            Estoque
          </p>
          <h2 className="section-heading mt-4 max-w-2xl text-4xl font-semibold text-[#f2f1ec] sm:text-5xl">
            Veículos disponíveis agora
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {(["Todos", ...CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat
                    ? "border-red bg-red text-ink"
                    : "border-white/[.14] text-steel-soft hover:border-white/[.3] hover:text-[#f2f1ec]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="rounded-full border border-white/[.14] bg-surface px-4 py-2 text-sm text-steel-soft focus:border-red focus-visible:outline-2 focus-visible:outline-red"
              aria-label="Filtrar por marca"
            >
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b === "Todas" ? "Todas as marcas" : b}
                </option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="rounded-full border border-white/[.14] bg-surface px-4 py-2 text-sm text-steel-soft focus:border-red focus-visible:outline-2 focus-visible:outline-red"
              aria-label="Filtrar por faixa de preço"
            >
              {PRICE_RANGES.map((r, i) => (
                <option key={r.label} value={i}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-steel-soft">
            Nenhum veículo encontrado com esses filtros — fale com um
            consultor, novidades chegam toda semana.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[.1] bg-surface transition-colors hover:border-white/[.22]">
                  <div className="relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-ink-soft to-surface">
                    <Car
                      className="h-16 w-16 text-steel transition-transform duration-300 group-hover:scale-105"
                      strokeWidth={1}
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-[#f2f1ec] backdrop-blur-sm">
                      {v.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-[#f2f1ec]">
                      {v.brand} {v.model}
                    </h3>

                    <dl className="mt-4 grid grid-cols-3 gap-3 text-xs text-steel-soft">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" strokeWidth={1.6} />
                        {v.year}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Gauge className="h-3.5 w-3.5" strokeWidth={1.6} />
                        {formatKm(v.km)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Settings2 className="h-3.5 w-3.5" strokeWidth={1.6} />
                        {v.transmission}
                      </div>
                    </dl>

                    <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                      <p className="text-xl font-semibold text-red-bright">
                        {formatPrice(v.price)}
                      </p>
                      <a
                        href={whatsappLink(
                          `Olá! Tenho interesse no ${v.brand} ${v.model} ${v.year} anunciado no site.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-red px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-red-bright"
                      >
                        Tenho interesse
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
