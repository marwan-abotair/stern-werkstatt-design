import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";

const footerServices = [
  { to: "/leistungen/hu-au", label: "Hauptuntersuchung (HU/AU)" },
  { to: "/leistungen/oelwechsel", label: "Ölwechsel" },
  { to: "/leistungen/reifenwechsel", label: "Reifenwechsel & Einlagerung" },
  { to: "/leistungen/bremsenservice", label: "Bremsenservice" },
  { to: "/leistungen/klimaanlage", label: "Klimaanlagenwartung" },
  { to: "/leistungen/achsvermessung", label: "Achsvermessung" },
  { to: "/leistungen/unfallreparatur", label: "Unfallreparatur & Karosserie" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-dark text-dark-foreground mt-12 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-bold text-base mb-2 uppercase tracking-wide">{CONTACT.name}</h3>
          <address className="not-italic leading-relaxed text-dark-foreground/80">
            {CONTACT.street}<br />
            {CONTACT.zip} {CONTACT.city}<br />
            <a href={CONTACT.phoneHref} className="hover:text-red-accent">
              Tel.: {CONTACT.phoneDisplay}
            </a><br />
            <a href={CONTACT.emailHref} className="hover:text-red-accent">
              E-Mail: {CONTACT.emailDisplay}
            </a>
          </address>
        </div>

        <div>
          <h3 className="font-bold text-base mb-2 uppercase tracking-wide">Öffnungszeiten</h3>
          <p className="text-dark-foreground/80">{CONTACT.hours}</p>
          <p className="text-dark-foreground/80">Samstag und Sonntag geschlossen</p>
          <p className="text-dark-foreground/80 mt-2">
            Termine bitte vorab telefonisch vereinbaren.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-base mb-2 uppercase tracking-wide">Leistungen</h3>
          <ul className="space-y-1">
            {footerServices.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="hover:text-red-accent text-dark-foreground/80">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-base mb-2 uppercase tracking-wide">Service-Gebiet</h3>
          <p className="text-dark-foreground/80 leading-relaxed">
            Meisterwerkstatt Stern – Ihre KFZ-Werkstatt in Berlin-Tempelhof, Neukölln,
            Kreuzberg und Mariendorf. Auch Kunden aus Schöneberg und Steglitz sind herzlich
            willkommen.
          </p>
          <h3 className="font-bold text-base mt-4 mb-2 uppercase tracking-wide">Rechtliches</h3>
          <ul className="space-y-1">
            <li><Link to="/impressum" className="hover:text-red-accent text-dark-foreground/80">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-red-accent text-dark-foreground/80">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-3 text-center text-xs text-dark-foreground/60">
        © 2025 {CONTACT.name} · {CONTACT.street}, {CONTACT.zip} {CONTACT.city}
      </div>
    </footer>
  );
}
