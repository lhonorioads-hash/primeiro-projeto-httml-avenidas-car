"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  amount?: number;
  duration?: number;
  className?: string;
};

/**
 * `viewport.once` fica em `false` de propósito: o efeito de entrada deve
 * reaparecer sempre que o elemento volta a cruzar a viewport, tanto descendo
 * quanto subindo a página. Isso é feito via IntersectionObserver nativo (o
 * mecanismo por trás de `whileInView`), não por um listener de scroll — o
 * replay não adiciona trabalho por frame de scroll, só por transição real de
 * visibilidade, então é seguro em mobile mesmo com scroll rápido.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  amount = 0.3,
  duration = 0.7,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y, x: prefersReducedMotion ? 0 : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
