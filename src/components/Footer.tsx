import { MessageCircle, MapPin } from "lucide-react";
import { InstagramGlyph as InstagramIcon } from "./icons/InstagramGlyph";
import { Logo } from "./Logo";
import { ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DEFAULT_MESSAGE, whatsappLink } from "@/lib/constants";

const LINKS = [
  { href: "#estoque", label: "Estoque" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#financiamento", label: "Financiamento" },
  { href: "#troca", label: "Troca com troco" },
  { href: "#avaliacao", label: "Avaliação do veículo" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#localizacao", label: "Localização" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[.08] bg-ink py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Logo className="h-5 w-auto" />
            <p className="mt-4 flex items-start gap-2 text-sm text-steel-soft">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {ADDRESS.full}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
              Navegação
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-soft transition-colors hover:text-[#f2f1ec]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
              Fale conosco
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-steel-soft transition-colors hover:text-[#f2f1ec]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-steel-soft transition-colors hover:text-[#f2f1ec]"
              >
                <InstagramIcon className="h-4 w-4" />
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[.08] pt-8">
          <p className="text-xs text-steel">
            © {new Date().getFullYear()} Avenidas Car. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
