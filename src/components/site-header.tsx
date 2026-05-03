import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, Star } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const navItems = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/galerie", label: "Galerie" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark text-dark-foreground shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg whitespace-nowrap">
            <Star className="h-5 w-5 fill-red-accent text-red-accent" />
            <span>Meisterwerkstatt Stern</span>
          </Link>

          {/* Desktop contact */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-red-accent px-4 py-2 text-sm font-semibold text-red-accent-foreground hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-2 text-sm hover:text-red-accent transition"
            >
              <Mail className="h-4 w-4" /> {CONTACT.emailDisplay}
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 pb-3 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-red-accent font-semibold" }}
              className="hover:text-red-accent transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 space-y-3">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-red-accent font-semibold" }}
                  className="py-2 hover:text-red-accent transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-md bg-red-accent px-4 py-2 text-sm font-semibold text-red-accent-foreground"
              >
                <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.emailHref}
                className="inline-flex items-center gap-2 text-sm"
              >
                <Mail className="h-4 w-4" /> {CONTACT.emailDisplay}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
