import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | Meisterwerkstatt Stern Berlin" },
      { name: "description", content: "Datenschutzerklärung der Meisterwerkstatt Stern in Berlin-Tempelhof." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}/datenschutz` }],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      <p className="text-muted-foreground">
        Platzhalter – bitte vor Veröffentlichung mit einer vollständigen Datenschutzerklärung
        ersetzen, die u.a. Auskunft über Server-Logs, Kontaktformular, Google Maps und
        eingebundene Drittanbieter (z. B. Google Reviews) gibt.
      </p>
    </div>
  ),
});
