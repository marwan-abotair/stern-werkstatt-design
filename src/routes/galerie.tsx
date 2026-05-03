import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const title = "Galerie | Werkstatt Berlin Tempelhof – Meisterwerkstatt Stern";
const description =
  "Einblicke in unsere KFZ-Meisterwerkstatt in Berlin-Tempelhof. Fotos folgen in Kürze.";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}/galerie` }],
  }),
  component: GaleriePage,
});

function GaleriePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Unsere Werkstatt – Einblicke</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        Fotos aus unserer Meisterwerkstatt in Berlin-Tempelhof folgen in Kürze.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-lg bg-grey-light border flex flex-col items-center justify-center text-muted-foreground"
          >
            <Camera className="h-8 w-8 mb-2" />
            <span className="text-sm font-medium">Foto folgt</span>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 rounded-md bg-red-accent px-6 py-3 font-semibold text-red-accent-foreground hover:opacity-90"
        >
          Jetzt Termin anfragen
        </Link>
      </div>
    </div>
  );
}
