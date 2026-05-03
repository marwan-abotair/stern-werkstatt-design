import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, makeServiceHead } from "@/components/service-page";

export const Route = createFileRoute("/leistungen/reifenwechsel")({
  head: makeServiceHead({
    slug: "reifenwechsel",
    title: "Reifenwechsel Berlin Tempelhof | Meisterwerkstatt Stern",
    description:
      "Reifenwechsel & Einlagerung in Berlin-Tempelhof. Saisonwechsel, Wuchten, fachgerechte Lagerung Ihrer Räder. Schneller Service zu fairen Preisen.",
  }),
  component: () => (
    <ServicePage
      h1="Reifenwechsel & Einlagerung in Berlin – Meisterwerkstatt Stern"
      serviceName="Reifenwechsel & Einlagerung"
      paragraphs={[
        "Saisonwechsel ohne Stress: Wir wechseln Ihre Sommer- und Winterreifen schnell und sicher. Unsere Meisterwerkstatt in Berlin Tempelhof bietet Ihnen den kompletten Reifenservice aus einer Hand.",
        "Auf Wunsch lagern wir Ihre Reifen fachgerecht für Sie ein – trocken, sauber und kennzeichnet. Ein Anruf genügt für Ihren Termin in Berlin Tempelhof.",
        "Auch für Kunden aus Neukölln, Kreuzberg, Mariendorf und Schöneberg.",
      ]}
      included={[
        "Demontage und Montage der Räder",
        "Wuchten der Reifen",
        "Prüfung von Profiltiefe und Reifendruck",
        "Reifeneinlagerung im Saisonpaket möglich",
        "Beratung bei Reifenneukauf",
      ]}
    />
  ),
});
