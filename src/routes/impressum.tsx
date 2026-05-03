import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Meisterwerkstatt Stern Berlin" },
      { name: "description", content: "Impressum der Meisterwerkstatt Stern in Berlin-Tempelhof." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}/impressum` }],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <p className="text-muted-foreground mb-4">
        Angaben gemäß § 5 TMG (Platzhalter – bitte vor Veröffentlichung vervollständigen).
      </p>
      <address className="not-italic">
        {CONTACT.name}<br />
        {CONTACT.street}<br />
        {CONTACT.zip} {CONTACT.city}<br /><br />
        Telefon: {CONTACT.phoneDisplay}<br />
        E-Mail: {CONTACT.emailDisplay}
      </address>
    </div>
  ),
});
