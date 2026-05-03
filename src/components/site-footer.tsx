import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="bg-dark text-dark-foreground mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-bold text-lg mb-3">{CONTACT.name}</h3>
          <address className="not-italic text-sm leading-relaxed text-dark-foreground/80">
            {CONTACT.street}<br />
            {CONTACT.zip} {CONTACT.city}<br />
            <a href={CONTACT.phoneHref} className="hover:text-red-accent">
              📞 {CONTACT.phoneDisplay}
            </a><br />
            <a href={CONTACT.emailHref} className="hover:text-red-accent">
              ✉ {CONTACT.emailDisplay}
            </a>
          </address>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Öffnungszeiten</h3>
          <p className="text-sm text-dark-foreground/80">{CONTACT.hours}</p>
          <h3 className="font-bold text-lg mt-6 mb-3">Rechtliches</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/impressum" className="hover:text-red-accent">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-red-accent">Datenschutz</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Ihr Bezirk</h3>
          <p className="text-sm text-dark-foreground/80">
            KFZ-Meisterwerkstatt Berlin-Tempelhof – auch für Neukölln, Kreuzberg, Mariendorf und Schöneberg.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-dark-foreground/60">
        © 2025 {CONTACT.name}
      </div>
    </footer>
  );
}
