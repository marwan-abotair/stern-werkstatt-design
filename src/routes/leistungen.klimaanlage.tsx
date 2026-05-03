import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, makeServiceHead } from "@/components/service-page";

export const Route = createFileRoute("/leistungen/klimaanlage")({
  head: makeServiceHead({
    slug: "klimaanlage",
    title: "Klimaanlagenwartung Berlin Tempelhof | Meisterwerkstatt Stern",
    description:
      "Klimaanlagenwartung in Berlin-Tempelhof: Desinfektion, Befüllung und Funktionsprüfung. Frische Luft im Auto – Termin in Ihrer KFZ-Meisterwerkstatt.",
  }),
  component: () => (
    <ServicePage
      h1="Klimaanlagenwartung in Berlin – Meisterwerkstatt Stern"
      serviceName="Klimaanlagenwartung"
      paragraphs={[
        "Eine gepflegte Klimaanlage sorgt für angenehme Temperaturen und gesunde Luft im Innenraum. In unserer Meisterwerkstatt in Berlin Tempelhof prüfen, befüllen und desinfizieren wir Ihre Klimaanlage fachgerecht.",
        "Wir empfehlen die Wartung mindestens alle zwei Jahre. Damit beugen Sie Leistungseinbußen und unangenehmen Gerüchen vor – auch im Berliner Stadtverkehr.",
        "Klimaanlagenservice in Berlin Tempelhof für alle gängigen Kältemittel (R134a / R1234yf).",
      ]}
      included={[
        "Dichtheitsprüfung des Systems",
        "Absaugen und Befüllen mit neuem Kältemittel",
        "Wechsel von Innenraumfilter auf Wunsch",
        "Desinfektion des Verdampfers",
        "Funktionstest und Kühlleistungsmessung",
      ]}
      prices={[
        // TODO: Add real prices
        { label: "Klimaanlagen-Service R134a", price: "ab XX €" },
        { label: "Klimaanlagen-Service R1234yf", price: "ab XX €" },
        { label: "Klimaanlagen-Desinfektion", price: "ab XX €" },
        { label: "Innenraumfilter wechseln", price: "ab XX €" },
      ]}
    />
  ),
});
