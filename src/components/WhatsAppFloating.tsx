"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_DEFAULT_MESSAGE, whatsappLink } from "@/lib/constants";

export function WhatsAppFloating() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Avenidas Car no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
    >
      <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={2.2} />
      <span className="hidden text-sm font-semibold sm:inline">
        Falar no WhatsApp
      </span>
    </motion.a>
  );
}
