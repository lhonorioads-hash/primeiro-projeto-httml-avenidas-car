import { Repeat, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/constants";

const POINTS = [
  "Avaliamos seu veículo usado com transparência, sem letras miúdas.",
  "O valor avaliado entra como parte do pagamento do novo veículo.",
  "Você paga apenas a diferença — o troco — à vista ou financiado.",
  "Toda a documentação da troca é conduzida pela nossa equipe.",
];

export function TradeIn() {
  return (
    <section id="troca" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[380px] w-[620px] -translate-y-1/2 translate-x-1/3 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--color-red), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <Repeat className="h-10 w-10 text-red-bright" strokeWidth={1.4} />
          <h2 className="section-heading text-balance mt-6 text-4xl font-semibold text-[#f2f1ec] sm:text-5xl">
            Troca com troco: seu usado como parte do pagamento.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-steel-soft">
            Dá seu carro atual na troca e paga só a diferença. Simples assim
            — nossa equipe cuida da avaliação e da papelada.
          </p>
          <a
            href={whatsappLink(
              "Olá! Tenho um carro usado e gostaria de saber como funciona a troca com troco na Avenidas Car."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-red px-8 text-base font-semibold text-[#f2f1ec] transition-colors hover:bg-red-bright"
          >
            Simular troca pelo WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6">
          <ul className="flex flex-col gap-px overflow-hidden rounded-3xl border border-white/[.1] bg-white/[.03]">
            {POINTS.map((point, i) => (
              <li
                key={point}
                className="flex items-start gap-4 border-white/[.06] p-6 [&:not(:last-child)]:border-b"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red/15 text-sm font-semibold text-red-bright">
                  {i + 1}
                </span>
                <p className="text-sm leading-6 text-steel-soft">{point}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
