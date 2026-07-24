import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    name: "Marcos Andrade",
    text: "Excelente atendimento, comprei meu carro com segurança e sem dor de cabeça.",
  },
  {
    name: "Fernanda Lopes",
    text: "Equipe muito transparente sobre o histórico do veículo. Me senti segura durante toda a negociação.",
  },
  {
    name: "Ricardo Souza",
    text: "Consegui um financiamento com condições melhores do que esperava. Recomendo demais.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
            Depoimentos
          </p>
          <h2 className="section-heading mt-4 max-w-xl text-4xl font-semibold text-ink sm:text-5xl">
            Quem comprou, recomenda
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="h-full rounded-2xl border border-ink/10 bg-white p-8">
                <div className="flex gap-1 text-red" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-7 text-ink/70">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-red-bright">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {t.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
