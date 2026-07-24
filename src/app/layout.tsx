import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Avenidas Car | Carros novos e seminovos em Jundiaí",
  description:
    "Na Avenidas Car você encontra carros novos e seminovos selecionados, com qualidade, segurança e as melhores condições. Fale agora com um consultor pelo WhatsApp.",
  keywords: [
    "carros seminovos Jundiaí",
    "concessionária Jundiaí",
    "comprar carro Jundiaí",
    "Avenidas Car",
  ],
  openGraph: {
    title: "Avenidas Car | Carros novos e seminovos em Jundiaí",
    description:
      "Carros novos e seminovos selecionados, com procedência garantida e as melhores condições de financiamento.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
