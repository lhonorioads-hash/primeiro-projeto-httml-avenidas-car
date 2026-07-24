import { CarFront, ShieldCheck, Wallet, Handshake } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: CarFront,
    title: "Veículos selecionados",
    text: "Carros avaliados e preparados para você.",
  },
  {
    icon: ShieldCheck,
    title: "Compra segura",
    text: "Transparência em todas as etapas.",
  },
  {
    icon: Wallet,
    title: "Melhores condições",
    text: "Financiamento facilitado.",
  },
  {
    icon: Handshake,
    title: "Atendimento personalizado",
    text: "Consultores preparados para ajudar.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
            Diferenciais
          </p>
          <h2 className="section-heading mt-4 max-w-xl text-4xl font-semibold text-ink sm:text-5xl">
            Por que comprar na Avenidas Car
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-ink/10 bg-white p-8">
                <item.icon className="h-9 w-9 text-red-dim" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
