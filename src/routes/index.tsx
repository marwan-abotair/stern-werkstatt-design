import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Wrench, ShieldCheck, Euro, Search, ArrowRight, Star } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CONTACT } from "@/lib/contact";
import heroImg from "@/assets/workshop-hero.jpg";

const title = "Meisterwerkstatt Stern Berlin | KFZ-Werkstatt Tempelhof";
const description =
  "Ihre KFZ-Meisterwerkstatt in Berlin-Tempelhof. HU/AU, Ölwechsel, Reifenwechsel, Bremsen & mehr. Alle Marken. Jetzt Termin anfragen.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}/` }],
  }),
  component: Index,
});

const previewServices = [
  { to: "/leistungen/hu-au", title: "Hauptuntersuchung (HU/AU)", desc: "Pünktlich, zuverlässig und ohne lange Wartezeiten." },
  { to: "/leistungen/oelwechsel", title: "Ölwechsel", desc: "Schneller Service mit hochwertigen Markenölen." },
  { to: "/leistungen/reifenwechsel", title: "Reifenwechsel & Einlagerung", desc: "Saisonwechsel inkl. fachgerechter Einlagerung." },
  { to: "/leistungen/bremsenservice", title: "Bremsenservice", desc: "Sicherheit zuerst – Bremsen prüfen und tauschen." },
] as const;

const trust = [
  { icon: ShieldCheck, label: "Meisterbetrieb" },
  { icon: Wrench, label: "Alle Marken" },
  { icon: Euro, label: "Faire Preise" },
  { icon: Search, label: "Transparenz" },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-dark/65" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36 text-dark-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
            Ihre KFZ-Meisterwerkstatt in Berlin-Tempelhof
          </h1>
          <p className="mt-4 text-lg md:text-xl text-dark-foreground/90 max-w-2xl">
            Meisterbetrieb · Alle Marken · Faire Preise · HU/AU · Reparaturen
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-red-accent px-6 py-3 font-semibold text-red-accent-foreground hover:opacity-90"
            >
              <Phone className="h-5 w-5" /> Jetzt anrufen
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 font-semibold text-dark-foreground backdrop-blur hover:bg-white/20"
            >
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center justify-center gap-2 text-sm md:text-base">
              <t.icon className="h-5 w-5 text-red-accent" />
              <span className="font-semibold">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-2">Unsere Leistungen</h2>
        <p className="text-center text-muted-foreground mb-10">
          Alles aus einer Hand für Ihr Fahrzeug
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewServices.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-xl border bg-card p-6 hover:border-red-accent hover:shadow-md transition"
            >
              <Wrench className="h-8 w-8 text-red-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-accent">
                Mehr erfahren <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/leistungen" className="inline-flex items-center gap-2 font-semibold text-red-accent hover:underline">
            Alle Leistungen ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PREISHINWEIS BAND */}
      <section className="bg-grey-light">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Kostenvoranschlag kostenlos & unverbindlich
          </h2>
          <p className="text-muted-foreground mb-6">Rufen Sie uns einfach an – wir beraten Sie persönlich.</p>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-3 rounded-lg bg-red-accent px-8 py-4 text-lg font-bold text-red-accent-foreground hover:opacity-90"
          >
            <Phone className="h-6 w-6" /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </section>

      {/* GOOGLE BEWERTUNGEN */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Das sagen unsere Kunden</h2>
          <p className="text-muted-foreground">Echte Bewertungen von Google</p>
        </div>
        {/* Elfsight Google Reviews Widget */}
        <div
          className="elfsight-app-e167dac1-be4f-4eba-8432-b66906d93f74"
          data-elfsight-app-lazy
        />
        <div className="text-center mt-8">
          <a
            href={CONTACT.reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-red-accent px-6 py-3 font-semibold text-red-accent-foreground hover:opacity-90"
          >
            <Star className="h-5 w-5 fill-current" /> Jetzt auf Google bewerten
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            Ihre Meinung hilft uns und anderen Kunden.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-grey-light">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Häufige Fragen</h2>
          <Accordion type="single" collapsible className="bg-background rounded-xl border px-6">
            <AccordionItem value="q1">
              <AccordionTrigger>Welche Marken reparieren Sie?</AccordionTrigger>
              <AccordionContent>
                Alle gängigen Marken und Modelle – VW, BMW, Mercedes, Toyota, Ford und mehr.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Bieten Sie einen kostenlosen Kostenvoranschlag?</AccordionTrigger>
              <AccordionContent>
                Ja, unverbindlich per Telefon oder Kontaktformular.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Wie vereinbare ich einen Termin?</AccordionTrigger>
              <AccordionContent>
                Anruf {CONTACT.phoneDisplay} (Mo–Fr 08–17 Uhr) oder über unser Kontaktformular.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Führen Sie HU/AU durch?</AccordionTrigger>
              <AccordionContent>
                Ja, wir sind berechtigt, Haupt- und Abgasuntersuchungen durchzuführen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>Gibt es Parkplätze?</AccordionTrigger>
              <AccordionContent>
                Ja, kostenlose Parkplätze direkt vor der Werkstatt.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* KONTAKT CTA */}
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für Ihren Termin?</h2>
          <p className="text-dark-foreground/80 mb-2">{CONTACT.street}, {CONTACT.zip} {CONTACT.city}</p>
          <p className="text-dark-foreground/80 mb-8">{CONTACT.hours}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-red-accent px-8 py-4 text-lg font-bold text-red-accent-foreground hover:opacity-90"
            >
              <Phone className="h-5 w-5" /> {CONTACT.phoneDisplay}
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/10"
            >
              Zum Kontaktformular <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
