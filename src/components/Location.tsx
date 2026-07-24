import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { ADDRESS, MAPS_DIRECTIONS_URL, MAPS_EMBED_SRC } from "@/lib/constants";

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
              Localização
            </p>
            <h2 className="section-heading mt-4 text-4xl font-semibold text-ink sm:text-5xl">
              Venha conhecer a loja
            </h2>
            <div className="mt-6 flex items-start gap-3 text-ink/70">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-dim" />
              <p className="text-base leading-7">
                {ADDRESS.street}
                <br />
                {ADDRESS.neighborhood} — {ADDRESS.city}, {ADDRESS.state}
              </p>
            </div>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-[#f2f1ec] transition-colors hover:bg-ink-soft"
            >
              <Navigation className="h-4 w-4" />
              Como chegar
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-ink/10">
            <iframe
              title="Localização da Avenidas Car"
              src={MAPS_EMBED_SRC}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[320px] w-full sm:h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
