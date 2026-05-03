import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";

export function ServiceCTA() {
  return (
    <div className="mt-10 rounded-xl bg-dark text-dark-foreground p-8 text-center">
      <h2 className="text-2xl font-bold mb-2">Kostenvoranschlag kostenlos & unverbindlich</h2>
      <p className="text-dark-foreground/80 mb-6">
        Rufen Sie uns an oder schreiben Sie uns – wir beraten Sie gerne.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-red-accent px-6 py-3 font-semibold text-red-accent-foreground hover:opacity-90"
        >
          <Phone className="h-5 w-5" /> Jetzt anrufen
        </a>
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-transparent px-6 py-3 font-semibold hover:bg-white/10"
        >
          Termin vereinbaren
        </Link>
      </div>
    </div>
  );
}
