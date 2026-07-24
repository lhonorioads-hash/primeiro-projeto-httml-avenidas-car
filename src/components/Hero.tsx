"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import audiHero1 from "@/assets/cinematic/audi-hero-1.jpg";
import audiHero2 from "@/assets/cinematic/audi-hero-2.jpg";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero cinemático: dolly-in contínuo sobre o mesmo veículo, ao entardecer.
 * A maior parte do movimento vem de uma única imagem escalando (push-in real
 * de câmera, sem cortes) com o ponto de fuga ancorado na grade/logo — só na
 * pontinha final, quando o zoom da primeira foto começa a perder nitidez,
 * um corte rápido ("flash cut", como em comerciais automotivos reais) troca
 * para a segunda foto, já no mesmo enquadramento. Sem desfoque de crossfade.
 * Conduzido por GSAP ScrollTrigger (pin + scrub) e Lenis.
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameARef = useRef<HTMLDivElement>(null);
  const frameBRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            gsap.set(progressRef.current, { scaleX: self.progress });
            gsap.set(hintRef.current, { opacity: self.progress < 0.04 ? 1 : 0 });
          },
        },
      });

      gsap.set(frameBRef.current, { opacity: 0, scale: 1.08 });
      gsap.set(flashRef.current, { opacity: 0 });
      gsap.set(contentRef.current, { opacity: 0, y: 28 });

      const CUT = 0.58;
      const CUT_WINDOW = 0.05;

      tl.to(
        frameARef.current,
        { scale: 1.55, ease: "none", duration: CUT },
        0
      )
        .to(
          flashRef.current,
          { opacity: 0.55, duration: CUT_WINDOW / 2, ease: "power1.in" },
          CUT - CUT_WINDOW / 2
        )
        .to(
          frameARef.current,
          { opacity: 0, duration: 0.001 },
          CUT
        )
        .set(frameBRef.current, { opacity: 1 }, CUT)
        .to(
          flashRef.current,
          { opacity: 0, duration: CUT_WINDOW / 2, ease: "power1.out" },
          CUT
        )
        .to(
          frameBRef.current,
          { scale: 1.0, ease: "power2.out", duration: 0.28 },
          CUT
        )
        .to(
          contentRef.current,
          { opacity: 1, y: 0, duration: 0.16, ease: "power2.out" },
          0.82
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <StaticHero />;
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-dvh overflow-hidden bg-ink"
    >
      <div className="grain" />

      {/* Indicador de progresso do scroll */}
      <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-white/[.06]">
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 bg-red"
        />
      </div>

      {/* Palco cinematográfico — dolly-in contínuo em duas cenas */}
      <div className="absolute inset-0">
        <div
          ref={frameARef}
          className="absolute inset-0 will-change-transform"
          style={{ transformOrigin: "50% 58%" }}
        >
          <Image
            src={audiHero1}
            alt="Audi em destaque no pátio da Avenidas Car ao entardecer"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-center"
          />
          <HeroGradient />
        </div>

        <div ref={frameBRef} className="absolute inset-0 will-change-transform">
          <Image
            src={audiHero2}
            alt="Detalhe da grade e dos faróis do veículo em destaque na Avenidas Car"
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-center"
          />
          <HeroGradient />
        </div>

        {/* Flash de exposição no corte — mascara a troca de quadro, como em
            comerciais automotivos reais, sem recorrer a desfoque. */}
        <div
          ref={flashRef}
          className="pointer-events-none absolute inset-0 z-[5] bg-white"
        />
      </div>

      {/* Conteúdo final — headline, subtítulo, CTAs */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center sm:px-8"
      >
        <h1 className="display-heading text-balance text-4xl font-semibold text-[#f2f1ec] sm:text-6xl lg:text-7xl">
          Seu próximo carro
          <br />
          <span className="red-gradient-text">está aqui.</span>
        </h1>

        <p className="mt-6 max-w-lg text-base font-medium leading-7 text-[#e7e6e1] sm:text-lg sm:leading-8">
          Na Avenidas Car você encontra carros novos e seminovos
          selecionados, com qualidade, segurança e as melhores condições.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a
            href="#estoque"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-red px-7 text-sm font-semibold text-[#f2f1ec] transition-colors hover:bg-red-bright sm:h-14 sm:px-8 sm:text-base"
          >
            Ver Estoque
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/[.24] bg-black/20 px-7 text-sm font-semibold text-[#f2f1ec] backdrop-blur-sm transition-colors hover:border-white/[.4] hover:bg-white/[.08] sm:h-14 sm:px-8 sm:text-base"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-10 flex items-center gap-6 sm:mt-14 sm:gap-10">
          <div className="text-left">
            <p className="text-xl font-bold text-red-bright sm:text-2xl">
              4.9/5
            </p>
            <p className="text-xs font-medium text-[#e7e6e1]">avaliação dos clientes</p>
          </div>
          <div className="h-8 w-px bg-white/[.2]" />
          <div className="text-left">
            <p className="text-xl font-bold text-[#f2f1ec] sm:text-2xl">
              +200
            </p>
            <p className="text-xs font-medium text-[#e7e6e1]">veículos entregues</p>
          </div>
        </div>
      </div>

      {/* Dica de rolagem */}
      <div
        ref={hintRef}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-1 text-[#e7e6e1]"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em]">
          Role para explorar
        </p>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}

function HeroGradient() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,11,0.5) 0%, rgba(10,10,11,0.25) 40%, rgba(10,10,11,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 100%, rgba(200,32,47,0.18), transparent 55%)",
        }}
      />
    </>
  );
}

function StaticHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      <Image
        src={audiHero1}
        alt="Audi em destaque no pátio da Avenidas Car ao entardecer"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,11,0.7) 0%, rgba(10,10,11,0.5) 35%, rgba(10,10,11,0.92) 100%)",
        }}
      />
      <div className="grain" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center sm:px-8">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[.14] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-steel-soft">
          Carros novos & seminovos selecionados em Jundiaí
        </p>

        <h1 className="display-heading text-balance text-5xl font-semibold text-[#f2f1ec] sm:text-6xl lg:text-7xl">
          Seu próximo carro
          <br />
          <span className="red-gradient-text">está aqui.</span>
        </h1>

        <p className="mt-8 max-w-lg text-lg font-medium leading-8 text-[#e7e6e1]">
          Na Avenidas Car você encontra carros novos e seminovos
          selecionados, com qualidade, segurança e as melhores condições.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#estoque"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-red px-8 text-base font-semibold text-[#f2f1ec] transition-colors hover:bg-red-bright"
          >
            Ver Estoque
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/[.24] bg-black/20 px-8 text-base font-semibold text-[#f2f1ec] backdrop-blur-sm transition-colors hover:border-white/[.4] hover:bg-white/[.08]"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-14 flex items-center gap-10">
          <div className="text-left">
            <p className="text-2xl font-bold text-red-bright">4.9/5</p>
            <p className="text-xs font-medium text-[#e7e6e1]">avaliação dos clientes</p>
          </div>
          <div className="h-8 w-px bg-white/[.2]" />
          <div className="text-left">
            <p className="text-2xl font-bold text-[#f2f1ec]">+200</p>
            <p className="text-xs font-medium text-[#e7e6e1]">veículos entregues</p>
          </div>
        </div>
      </div>
    </section>
  );
}
