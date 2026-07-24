import Image from "next/image";
import logo from "@/assets/brand/logo.png";

// O arquivo é uma wordmark bem alongada (1516×122px, ~12:1) — em qualquer
// altura "normal" de logo (ex.: 32px) a largura passa de 390px, maior que a
// tela de um celular. Por isso a altura aqui é bem menor que o padrão de
// ícones/texto ao redor: o objetivo é caber por inteira no lado esquerdo do
// cabeçalho, sem disputar espaço com o menu/CTA, mantendo a proporção real
// (w-auto) para não distorcer o desenho.
export function Logo({ className = "h-4 w-auto sm:h-5" }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="Avenidas Car"
      priority
      className={className}
    />
  );
}
