import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, MapPin, Clock, ArrowRight, Star, Check } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CONTACT } from "@/lib/contact";

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
  { to: "/leistungen/hu-au", title: "Hauptuntersuchung (HU/AU)" },
  { to: "/leistungen/oelwechsel", title: "Ölwechsel" },
  { to: "/leistungen/reifenwechsel", title: "Reifenwechsel & Einlagerung" },
  { to: "/leistungen/bremsenservice", title: "Bremsenservice" },
  { to: "/leistungen/klimaanlage", title: "Klimaanlagenwartung" },
  { to: "/leistungen/achsvermessung", title: "Achsvermessung" },
  { to: "/leistungen/unfallreparatur", title: "Unfallreparatur & Karosserie" },
] as const;

function Index() {
  // Mount Elfsight widget container only on the client to avoid SSR hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div>
      {/* HERO – schlicht, sachlich, kein Bild */}
      <section className="bg-dark text-dark-foreground border-b-4 border-red-accent">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <p className="text-sm uppercase tracking-wider text-red-accent font-semibold mb-3">
            KFZ-Meisterbetrieb · Berlin-Tempelhof
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Ihre KFZ-Meisterwerkstatt in Berlin-Tempelhof
          </h1>
          <p className="mt-4 text-base md:text-lg text-dark-foreground/80 max-w-2xl">
            Hauptuntersuchung, Ölwechsel, Reifen, Bremsen, Klimaanlage und allgemeine
            Reparaturen – an allen Marken und Modellen. Faire Preise und transparente Beratung.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-red-accent px-5 py-3 font-semibold text-red-accent-foreground hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Termin anfragen
            </Link>
          </div>

          {/* Sachliche Eckdaten */}
          <dl className="mt-10 grid gap-4 sm:grid-cols-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-red-accent mt-0.5" />
              <div>
                <dt className="font-semibold">Adresse</dt>
                <dd className="text-dark-foreground/80">
                  {CONTACT.street}, {CONTACT.zip} {CONTACT.city}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-red-accent mt-0.5" />
              <div>
                <dt className="font-semibold">Öffnungszeiten</dt>
                <dd className="text-dark-foreground/80">{CONTACT.hours}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 text-red-accent mt-0.5" />
              <div>
                <dt className="font-semibold">Telefon</dt>
                <dd className="text-dark-foreground/80">
                  <a href={CONTACT.phoneHref} className="hover:text-red-accent">
                    {CONTACT.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      {/* TRUST BAND – schlicht */}
      <section className="bg-grey-light border-b">
        <div className="mx-auto max-w-7xl px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {["Meisterbetrieb", "Alle Marken & Modelle", "Faire Preise", "Transparente Beratung"].map(
            (label) => (
              <div key={label} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-red-accent" />
                <span className="font-medium">{label}</span>
              </div>
            ),
          )}
        </div>
      </section>

      {/* LEISTUNGEN – Listenartig, informativ */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Unsere Leistungen</h2>
          <p className="text-muted-foreground">
            Wir bieten das gesamte Spektrum einer modernen Kfz-Werkstatt unter einem Dach.
            Klicken Sie auf eine Leistung für weitere Informationen.
          </p>
        </div>
        <ul className="divide-y border rounded-lg bg-card">
          {previewServices.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-grey-light transition"
              >
                <span className="font-medium">{s.title}</span>
                <ArrowRight className="h-4 w-4 text-red-accent shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link to="/leistungen" className="inline-flex items-center gap-1 font-semibold text-red-accent hover:underline">
            Alle Leistungen ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PREISHINWEIS BAND */}
      <section className="bg-grey-light border-y">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Kostenvoranschlag kostenlos & unverbindlich</h2>
            <p className="text-muted-foreground text-sm">
              Wir beraten Sie gerne persönlich am Telefon oder vor Ort.
            </p>
          </div>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-red-accent px-6 py-3 font-bold text-red-accent-foreground hover:opacity-90"
          >
            <Phone className="h-5 w-5" /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </section>

      {/* GOOGLE BEWERTUNGEN */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Das sagen unsere Kunden</h2>
          <p className="text-muted-foreground text-sm">Echte Bewertungen von Google.</p>
        </div>
        {mounted && (
          <div
            className="elfsight-app-e167dac1-be4f-4eba-8432-b66906d93f74"
            data-elfsight-app-lazy
          />
        )}
        <div className="mt-6">
          <a
            href={CONTACT.reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-dark px-5 py-2.5 font-semibold hover:bg-dark hover:text-dark-foreground transition"
          >
            <Star className="h-4 w-4" /> Jetzt auf Google bewerten
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            Ihre Meinung hilft uns und anderen Kunden.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-grey-light">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Häufige Fragen</h2>
          <Accordion type="single" collapsible className="bg-background rounded-lg border px-5">
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
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Bereit für Ihren Termin?</h2>
              <p className="text-dark-foreground/80 text-sm">
                {CONTACT.street}, {CONTACT.zip} {CONTACT.city}<br />
                {CONTACT.hours}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-md bg-red-accent px-6 py-3 font-bold text-red-accent-foreground hover:opacity-90"
              >
                <Phone className="h-5 w-5" /> {CONTACT.phoneDisplay}
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
              >
                Zum Kontaktformular
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
