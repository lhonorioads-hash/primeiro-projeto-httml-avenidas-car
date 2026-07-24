import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="grain" />
      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <h2 className="display-heading text-balance text-4xl font-semibold text-[#f2f1ec] sm:text-6xl">
            Pronto para encontrar
            <br />
            <span className="red-gradient-text">seu próximo carro?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-steel-soft">
            Fale agora com um consultor da Avenidas Car.
          </p>
          <a
            href={whatsappLink(
              "Olá! Estou pronto para encontrar meu próximo carro na Avenidas Car."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-16 items-center justify-center gap-3 rounded-full bg-red px-10 text-lg font-semibold text-ink transition-colors hover:bg-red-bright"
          >
            <MessageCircle className="h-6 w-6" />
            Chamar no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
