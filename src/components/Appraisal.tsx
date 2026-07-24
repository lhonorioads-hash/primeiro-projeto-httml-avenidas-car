import { ClipboardCheck, FileText, Gauge, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/constants";

const CRITERIA = [
  {
    icon: FileText,
    title: "Documentação",
    text: "Histórico, procedência e situação de débitos do veículo.",
  },
  {
    icon: Gauge,
    title: "Quilometragem e uso",
    text: "Compatibilidade entre o ano, a quilometragem e o estado geral.",
  },
  {
    icon: ShieldCheck,
    title: "Estado de conservação",
    text: "Lataria, pintura, mecânica, elétrica e itens de série.",
  },
];

export function Appraisal() {
  return (
    <section id="avaliacao" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <ClipboardCheck className="h-10 w-10 text-red-dim" strokeWidth={1.4} />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
              Avaliação do veículo
            </p>
            <h2 className="section-heading text-balance mt-4 text-4xl font-semibold text-ink sm:text-5xl">
              Quer saber quanto vale o seu carro?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-ink/60">
              Envie os dados do seu veículo pelo WhatsApp e um consultor
              retorna com uma avaliação, seja para venda direta ou para
              usar como parte de pagamento na troca.
            </p>
            <a
              href={whatsappLink(
                "Olá! Gostaria de avaliar meu carro na Avenidas Car."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-8 text-base font-semibold text-[#f2f1ec] transition-colors hover:bg-ink-soft"
            >
              Avaliar meu carro agora
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
              O que levamos em conta na avaliação
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {CRITERIA.map((item, i) => (
              <Reveal key={item.title} delay={0.14 + i * 0.08}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-7">
                  <item.icon className="h-8 w-8 text-red-dim" strokeWidth={1.5} />
                  <h3 className="mt-5 text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
