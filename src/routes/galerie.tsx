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
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 border-b-2 border-red-accent pb-2">
        Unsere Werkstatt – Einblicke
      </h1>
      <p className="text-muted-foreground mb-2 max-w-2xl">
        Fotos aus unserer Meisterwerkstatt in Berlin-Tempelhof.
      </p>
      <p className="text-sm font-medium mb-6">Weitere Fotos folgen in Kürze.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-sm border-2 border-dashed border-border bg-grey-light flex flex-col items-center justify-center text-muted-foreground"
          >
            <Camera className="h-6 w-6 mb-1.5 opacity-60" />
            <span className="text-xs font-medium">Foto wird ergänzt</span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 rounded-sm bg-red-accent px-5 py-2.5 font-semibold text-red-accent-foreground hover:opacity-90"
        >
          Jetzt Termin anfragen
        </Link>
      </div>
    </div>
  );
}
