"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    q: "Os veículos passam por algum tipo de inspeção antes de entrar no estoque?",
    a: "Sim. Cada veículo é avaliado pela nossa equipe antes de ser anunciado — verificamos documentação, procedência e estado geral de conservação.",
  },
  {
    q: "Posso fazer um test-drive antes de fechar negócio?",
    a: "Sim, agende com um consultor pelo WhatsApp e organizamos o test-drive na loja, em Jundiaí.",
  },
  {
    q: "Como funciona o financiamento?",
    a: "Trabalhamos a simulação junto com você, considerando entrada, prazo e as instituições financeiras disponíveis no momento. Fale com um consultor para simular condições para o seu perfil.",
  },
  {
    q: "Posso dar meu carro usado como parte do pagamento?",
    a: "Sim, fazemos a avaliação do seu veículo e o valor entra como parte do pagamento — você paga apenas a diferença. Veja mais na seção Troca com Troco.",
  },
  {
    q: "Quais documentos preciso levar para comprar um veículo?",
    a: "Documento de identidade, CPF, comprovante de residência e, em caso de financiamento, comprovante de renda. Um consultor confirma a lista completa conforme a forma de pagamento escolhida.",
  },
  {
    q: "A loja fica aberta aos finais de semana?",
    a: "Fale com um consultor pelo WhatsApp para confirmar horários de atendimento atualizados, inclusive aos sábados.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
            Perguntas frequentes
          </p>
          <h2 className="section-heading mt-4 text-4xl font-semibold text-[#f2f1ec] sm:text-5xl">
            Ficou com alguma dúvida?
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-white/[.1] bg-white/[.03]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-[#f2f1ec]">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-steel-soft transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-red-bright" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-7 text-steel-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
