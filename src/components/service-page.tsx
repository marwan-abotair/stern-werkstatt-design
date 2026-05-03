import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PriceTable, type PriceRow } from "@/components/price-table";
import { CONTACT } from "@/lib/contact";

export interface ServicePageProps {
  h1: string;
  serviceName: string;
  paragraphs: string[];
  included: string[];
  prices?: PriceRow[];
}

export function ServicePage({ h1, serviceName, paragraphs, included, prices }: ServicePageProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Startseite", to: "/" },
          { label: "Leistungen", to: "/leistungen" },
          { label: serviceName },
        ]}
      />
      <h1 className="text-2xl md:text-3xl font-bold mb-5 border-b-2 border-red-accent pb-2">
        {h1}
      </h1>

      <div className="mb-6 space-y-3 text-foreground">
        {paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="border border-border bg-grey-light p-5 mb-6">
        <h2 className="font-bold text-lg mb-3">Was ist enthalten</h2>
        <ul className="space-y-1.5 list-disc pl-5">
          {included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {prices && prices.length > 0 && (
        <PriceTable rows={prices} caption="Preisübersicht" />
      )}

      <div className="border-t border-border pt-5 mt-6">
        <p className="font-semibold mb-3">
          Kostenvoranschlag kostenlos & unverbindlich.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-sm bg-red-accent px-5 py-2.5 font-semibold text-red-accent-foreground hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Jetzt anrufen
          </a>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-dark px-5 py-2.5 font-semibold hover:bg-dark hover:text-dark-foreground transition"
          >
            Termin vereinbaren <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function makeServiceHead(opts: {
  slug: string;
  title: string;
  description: string;
}) {
  return () => ({
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}/leistungen/${opts.slug}` }],
  });
}
