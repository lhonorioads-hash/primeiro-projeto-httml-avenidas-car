import Image from "next/image";
import { Wallet, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/constants";
import consultingPhoto from "@/assets/cinematic/showroom-detail.jpg";

export function Financing() {
  return (
    <section id="financiamento" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--color-red), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <Wallet className="h-10 w-10 text-red-bright" strokeWidth={1.4} />
            <h2 className="section-heading text-balance mt-6 text-4xl font-semibold text-[#f2f1ec] sm:text-5xl">
              Facilitamos seu caminho até o carro novo.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-steel-soft">
              Faça uma simulação de financiamento e descubra as melhores
              condições para o seu perfil, com um consultor te acompanhando
              em cada etapa.
            </p>
            <a
              href={whatsappLink(
                "Olá! Gostaria de simular um financiamento na Avenidas Car."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-red px-8 text-base font-semibold text-ink transition-colors hover:bg-red-bright"
            >
              Simular financiamento pelo WhatsApp
              <ArrowRight className="h-5 w-5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[.1]">
            <Image
              src={consultingPhoto}
              alt="Detalhe de um dos veículos disponíveis para financiamento na Avenidas Car"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 55%, rgba(10,10,11,0.7) 100%)",
              }}
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/[.1] bg-black/40 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#f2f1ec]">
                Condições sob medida
              </p>
              <p className="mt-1 text-xs text-steel-soft">
                entrada facilitada, parcelas flexíveis e troca com seu usado
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
