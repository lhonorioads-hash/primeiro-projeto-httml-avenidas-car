import { Search, MessageCircle, FileCheck2, KeyRound } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/constants";

const STEPS = [
  {
    icon: Search,
    title: "Escolha o veículo",
    text: "Navegue pelo estoque no site ou visite a loja e conheça os veículos disponíveis de perto.",
  },
  {
    icon: MessageCircle,
    title: "Fale com um consultor",
    text: "Tire dúvidas, agende uma avaliação e faça um test-drive com quem conhece cada carro do estoque.",
  },
  {
    icon: FileCheck2,
    title: "Negocie as condições",
    text: "Simule financiamento, avalie seu usado na troca e feche as condições que fizerem sentido pra você.",
  },
  {
    icon: KeyRound,
    title: "Retire seu carro",
    text: "Documentação organizada, transferência acompanhada e a chave na sua mão.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
            Como funciona
          </p>
          <h2 className="section-heading mt-4 max-w-xl text-4xl font-semibold text-ink sm:text-5xl">
            Do primeiro contato até a chave na mão
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-ink/10 bg-white p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-red-dim">
                  Passo {i + 1}
                </span>
                <step.icon
                  className="mt-4 h-9 w-9 text-red-dim"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32} className="mt-12 text-center">
          <a
            href={whatsappLink(
              "Olá! Gostaria de entender melhor como funciona o processo de compra na Avenidas Car."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-[#f2f1ec] transition-colors hover:bg-ink-soft"
          >
            Tirar dúvidas pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
