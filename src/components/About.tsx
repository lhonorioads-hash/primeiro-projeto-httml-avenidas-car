import Image from "next/image";
import { ShieldCheck, Users, Sparkles, HandCoins } from "lucide-react";
import { Reveal } from "./Reveal";
import showroomPhoto from "@/assets/cinematic/showroom-wide.jpg";

const POINTS = [
  {
    icon: Users,
    title: "Atendimento personalizado",
    text: "Consultores que ouvem sua necessidade antes de indicar um carro.",
  },
  {
    icon: Sparkles,
    title: "Veículos selecionados",
    text: "Cada unidade passa por avaliação criteriosa antes de entrar no estoque.",
  },
  {
    icon: ShieldCheck,
    title: "Procedência garantida",
    text: "Histórico verificado e documentação transparente, do início ao fim.",
  },
  {
    icon: HandCoins,
    title: "Facilidade na negociação",
    text: "Condições flexíveis de entrada, financiamento e troca com seu usado.",
  },
];

export function About() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
              Sobre a Avenidas Car
            </p>
            <h2 className="section-heading text-balance mt-4 text-4xl font-semibold text-ink sm:text-5xl">
              Comprar um carro precisa ser uma experiência segura e
              transparente.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-ink/60">
              Trabalhamos para que cada visita à loja termine com um cliente
              tranquilo — não apenas com um carro novo, mas com a certeza de
              que fez a escolha certa.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.05} className="relative -mr-6 aspect-[16/10] overflow-hidden rounded-3xl sm:mr-0">
            <Image
              src={showroomPhoto}
              alt="Showroom da Avenidas Car com veículos selecionados em exposição"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(10,10,11,0.35) 0%, transparent 45%)",
              }}
            />
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={0.1 + i * 0.08} className="bg-paper p-8">
                <point.icon className="h-8 w-8 text-red-dim" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
