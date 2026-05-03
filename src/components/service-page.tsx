import { Link } from "@tanstack/react-router";
import { Phone, Check, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CONTACT } from "@/lib/contact";

export interface ServicePageProps {
  h1: string;
  serviceName: string;
  paragraphs: string[];
  included: string[];
}

export function ServicePage({ h1, serviceName, paragraphs, included }: ServicePageProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
      <Breadcrumbs
        items={[
          { label: "Startseite", to: "/" },
          { label: "Leistungen", to: "/leistungen" },
          { label: serviceName },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{h1}</h1>

      <div className="prose prose-neutral max-w-none mb-8 space-y-4 text-foreground">
        {paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-base md:text-lg text-muted-foreground">
            {p}
          </p>
        ))}
      </div>

      <div className="rounded-xl border bg-grey-light p-6 mb-8">
        <h2 className="font-bold text-xl mb-4">Was ist enthalten</h2>
        <ul className="space-y-2">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-accent mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center text-lg font-semibold mb-6">
        Kostenvoranschlag kostenlos & unverbindlich.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-red-accent px-6 py-3 font-semibold text-red-accent-foreground hover:opacity-90"
        >
          <Phone className="h-5 w-5" /> Jetzt anrufen
        </a>
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 rounded-md border-2 border-dark px-6 py-3 font-semibold hover:bg-dark hover:text-dark-foreground transition"
        >
          Termin vereinbaren <ArrowRight className="h-5 w-5" />
        </Link>
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
