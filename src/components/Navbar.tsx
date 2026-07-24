"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

const LINKS = [
  { href: "#estoque", label: "Estoque" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#financiamento", label: "Financiamento" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#localizacao", label: "Localização" },
];

// Painel: fade + slide suave na abertura; saída mais rápida e sem stagger.
const panelVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut", staggerChildren: 0.06, delayChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.18, ease: "easeIn", staggerChildren: 0 },
  },
};

// Lista de links: apenas orquestra o stagger dos itens filhos.
const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
  exit: { transition: { staggerChildren: 0 } },
};

// Cada item: desce com fade, ~250-300ms na entrada, saída rápida sem atraso.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15, ease: "easeIn" } },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-white/[.08]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" aria-label="Avenidas Car">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-steel-soft transition-colors hover:text-[#f2f1ec]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-red-bright"
          >
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-[#f2f1ec] lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {prefersReducedMotion ? (
        open && (
          <div className="border-t border-white/[.08] bg-ink px-6 pb-6 pt-2 lg:hidden">
            <ul className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-steel-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full bg-red px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Falar no WhatsApp
            </a>
          </div>
        )
      ) : (
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden border-t border-white/[.08] bg-ink px-6 pb-6 pt-2 lg:hidden"
            >
              <motion.ul variants={listVariants} className="flex flex-col gap-1">
                {LINKS.map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-base font-medium text-steel-soft"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a
                variants={itemVariants}
                href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full bg-red px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                Falar no WhatsApp
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}
