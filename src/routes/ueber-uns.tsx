import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";

const title = "Über uns | Meisterwerkstatt Stern Berlin-Tempelhof";
const description =
  "KFZ-Meisterbetrieb in Berlin-Tempelhof. Wir stehen für faire Preise, höchste Transparenz und professionelle Arbeit an allen Marken und Modellen.";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}/ueber-uns` }],
  }),
  component: UeberUnsPage,
});

const reasons = [
  "Meisterbetrieb seit JAHR EINTRAGEN", // TODO: Gründungsjahr eintragen
  "Alle Marken und Modelle",
  "Kostenloser Kostenvoranschlag",
  "Faire und transparente Preise",
  "Kurze Wartezeiten",
  "Parkplätze direkt vor der Tür",
];

function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 border-b-2 border-red-accent pb-2">
        Über uns – Meisterwerkstatt Stern Berlin
      </h1>
      <p className="leading-relaxed text-muted-foreground mb-8 max-w-3xl">
        Als KFZ-Meisterbetrieb in Berlin-Tempelhof stehen wir für faire Preise, höchste
        Transparenz und professionelle Arbeit an allen Marken und Modellen. Kunden aus
        Tempelhof, Neukölln, Kreuzberg, Mariendorf und Schöneberg vertrauen auf unsere
        Erfahrung.
      </p>

      <h2 className="text-xl font-bold mb-4 border-b border-border pb-1">Warum zu uns?</h2>
      <div className="grid gap-8 md:grid-cols-2 mb-10">
        <div className="space-y-3 leading-relaxed">
          <p>
            Wir sind ein traditioneller, inhabergeführter Handwerksbetrieb in Berlin-Tempelhof.
            Bei uns kümmern sich erfahrene Kfz-Meister persönlich um Ihr Fahrzeug – ohne
            anonyme Hotline und ohne Aufschwatzen unnötiger Reparaturen.
          </p>
          <p>
            Wir arbeiten an allen Marken und Modellen, vom Kleinwagen bis zum SUV. Sie erhalten
            vorab einen verbindlichen Kostenvoranschlag und werden über jeden weiteren Schritt
            informiert. So wissen Sie immer, was passiert und was es kostet.
          </p>
          <p>
            Unsere Werkstatt liegt verkehrsgünstig in der Ordensmeisterstraße 35, mit
            kostenlosen Parkplätzen direkt vor der Tür. Termine sind in der Regel kurzfristig
            verfügbar.
          </p>
        </div>
        <ul className="space-y-2">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-2 border-b border-border pb-2">
              <span className="text-red-accent font-bold mt-0.5">✓</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 rounded-sm bg-red-accent px-5 py-2.5 font-semibold text-red-accent-foreground hover:opacity-90"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </div>
  );
}
