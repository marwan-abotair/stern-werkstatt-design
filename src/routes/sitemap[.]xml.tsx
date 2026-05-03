import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://meisterwerkstatt-stern.de";

const urls = [
  "/",
  "/leistungen",
  "/leistungen/hu-au",
  "/leistungen/oelwechsel",
  "/leistungen/reifenwechsel",
  "/leistungen/bremsenservice",
  "/leistungen/klimaanlage",
  "/leistungen/achsvermessung",
  "/leistungen/unfallreparatur",
  "/galerie",
  "/ueber-uns",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
