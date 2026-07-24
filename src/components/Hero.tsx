import Image from "next/image";
import { ArrowRight, MessageCircle, Star, StarHalf } from "lucide-react";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import audiHero1 from "@/assets/cinematic/audi-hero-1.jpg";
import audiHero1Mobile from "@/assets/cinematic/audi-hero-1-mobile.jpg";

/**
 * Hero estático: uma única imagem de fundo, sem scroll-jacking, sem corte de
 * cena, sem parallax — a marca e a proposta de valor precisam ser lidas de
 * imediato, com uma apresentação natural.
 *
 * No mobile usamos um recorte vertical dedicado (mais fechado na grade/logo)
 * em vez de depender do corte automático do object-fit sobre a foto widescreen,
 * para o rosto do carro nunca ficar pequeno demais ou fora de enquadramento.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pt-32 pb-20 sm:pt-48 sm:pb-32"
    >
      <Image
        src={audiHero1Mobile}
        alt="Veículo em destaque no pátio da Avenidas Car ao entardecer"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="block object-cover object-center md:hidden"
      />
      <Image
        src={audiHero1}
        alt="Veículo em destaque no pátio da Avenidas Car ao entardecer"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="hidden object-cover object-center md:block"
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
            <div className="flex items-center gap-0.5 text-red-bright" aria-label="4,5 de 5 estrelas">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <StarHalf className="h-5 w-5 fill-current" />
            </div>
            <p className="mt-1.5 text-xs font-medium text-[#e7e6e1]">avaliação dos clientes</p>
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
