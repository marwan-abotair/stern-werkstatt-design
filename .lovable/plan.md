
# Meisterwerkstatt Stern — SEO-optimierte Website

Mehrseitige, professionelle Website für die KFZ-Meisterwerkstatt in Berlin-Tempelhof. Schwerpunkt: lokale Suchmaschinenoptimierung (Tempelhof + Nachbarbezirke), Vertrauen, klare Kontaktwege.

## Routenstruktur

**Hauptseiten**
- `/` Startseite
- `/leistungen` Leistungsübersicht
- `/galerie` Fotogalerie
- `/ueber-uns` Über uns
- `/kontakt` Kontakt & Anfahrt
- `/impressum`, `/datenschutz` Platzhalter

**Leistungs-Unterseiten** (eigene URLs für lokale SEO)
- `/leistungen/hu-au`
- `/leistungen/oelwechsel`
- `/leistungen/reifenwechsel`
- `/leistungen/bremsenservice`
- `/leistungen/klimaanlage`
- `/leistungen/achsvermessung`
- `/leistungen/unfallreparatur`

Jede Route hat eigenes `head()` mit eindeutigem `<title>`, `<meta description>` (150–160 Zeichen, deutsch), `og:title`, `og:description`, `og:type=website`, `<link rel="canonical">`. `<html lang="de">` im Root-Shell.

## Geteiltes Layout (`__root.tsx`)

**Sticky Header** (Anthrazit `#2c2c2c`)
- Links: Logo "Meisterwerkstatt Stern" + kleiner roter Stern ★
- Rechts: 📞 PLACEHOLDER_PHONE (rot, tel:) + ✉ PLACEHOLDER_EMAIL (mailto:)
- Navigation: Startseite | Leistungen | Galerie | Über uns | Kontakt
- Mobile: Hamburger-Menü

**Footer**
- Vollständige NAP-Daten, Öffnungszeiten
- Impressum | Datenschutz Links
- Lokaler SEO-Hinweis: "KFZ-Meisterwerkstatt Berlin-Tempelhof – auch für Neukölln, Kreuzberg, Mariendorf und Schöneberg"
- © 2025

**Floating Mobile-Bar** (nur < md, fixed bottom)
- Links: 📞 Anrufen (rot, tel:)
- Rechts: 💬 WhatsApp (grün, wa.me/…)

**Schema.org JSON-LD** (`AutomotiveBusiness`) im Root-Head mit Adresse, Geo-Koordinaten, Öffnungszeiten, areaServed (Tempelhof, Neukölln, Kreuzberg, Mariendorf, Schöneberg).

## Startseite

1. **Hero** mit Werkstattfoto-Hintergrund + dunklem Overlay (0.55), H1 "Ihre KFZ-Meisterwerkstatt in Berlin-Tempelhof", Subline mit Trust-Stichworten, zwei CTAs (Anrufen + Termin anfragen)
2. **Trust-Band** (dunkler Streifen): Meisterbetrieb · Alle Marken · Faire Preise · Transparenz
3. **Service Preview** — 4 Karten (HU/AU, Ölwechsel, Reifenwechsel, Bremsenservice) mit Link zu Detailseiten
4. **Preishinweis-Band** (hellgrau): "Kostenvoranschlag kostenlos & unverbindlich" + großer roter Telefonbutton
5. **Google Bewertungen** — H2 "Das sagen unsere Kunden", Elfsight-Widget eingebunden (Script-Tag im Root-Head per `head().scripts`, Container-`<div>` an Ort und Stelle), darunter Button "⭐ Jetzt auf Google bewerten"
6. **FAQ-Akkordeon** (5 Fragen wie spezifiziert) — strukturiert für Featured Snippets
7. **Kontakt-CTA-Block** (dunkel) mit Adresse, Telefonbutton, Link zum Formular

## Leistungsübersicht (`/leistungen`)

H1, Intro-Absatz mit lokalen Keywords, Karten-Grid mit allen 9 Leistungen. Sieben davon verlinken auf Detailseiten, zwei (Allgemeine Reparaturen, Alle Marken) sind nur Karten. Abschluss-CTA → Kontakt.

## Leistungs-Detailseiten (gemeinsame Vorlage)

Jede der 7 Unterseiten:
- H1 "[Leistung] in Berlin – Meisterwerkstatt Stern"
- Breadcrumb Startseite > Leistungen > [Service]
- 2–3 Absätze deutscher Fließtext mit "Berlin Tempelhof" 3–4× natürlich eingebaut
- Bullet-Liste "Was ist enthalten"
- Hinweis "Kostenvoranschlag kostenlos & unverbindlich"
- Doppel-CTA: Anrufen + Termin vereinbaren
- Eigenes `head()` mit service-spezifischem Title/Description

Inhalte werden pro Service redaktionell verfasst (HU/AU, Ölwechsel, Reifen, Bremsen, Klima, Achsvermessung, Unfallreparatur).

## Galerie

Responsives Grid (2 Spalten Mobile, 3 Desktop). Slot 1: Werkstattfoto mit Alt-Text "Fahrzeuginspektion Meisterwerkstatt Stern Berlin-Tempelhof". Slots 2–6: graue Boxen mit Kamera-Icon + "Foto folgt".

## Über uns

H1, beschreibender Text mit den fünf Bezirken, drei Säulen-Kacheln (🏆 Meisterbetrieb / 🔍 Transparenz / 🔧 Erfahrung), CTA → Kontakt.

## Kontakt

Zwei Spalten:
- **Links:** Formular (Name*, Telefon, E-Mail*, Nachricht*) — Submit löst Sonner-Toast "Vielen Dank! Wir melden uns bald." aus (rein client-seitig, keine Backend-Anbindung).
- **Rechts:** Adresse, großer roter Telefonbutton, E-Mail-Link, grüner WhatsApp-Button, Öffnungszeiten, eingebettete Google-Maps-iframe, "🗺 Route berechnen"-Button.

## SEO-Infrastruktur

- **`/sitemap.xml`** — statische Server-Route, listet alle 14 URLs mit `<lastmod>`
- **`/robots.txt`** — statische Server-Route, erlaubt alle Crawler, verweist auf Sitemap
- Canonical-URL pro Route
- Bild-Alt-Texte enthalten durchgängig "Berlin Tempelhof"
- Strukturierte FAQ (semantisches HTML im Akkordeon)

## Designsystem

In `src/styles.css` als oklch-Tokens hinterlegt:
- Hintergrund: weiß
- Anthrazit `#2c2c2c` (Header, dunkle Bänder, Text)
- Rot `#cc0000` (Primär-CTAs, Akzente)
- Hellgrau `#f5f5f5` (Karten, Bänder)
- Grün für WhatsApp-Button

Schrift: Inter via Google Fonts (im Root-Head). Buttons: rot primär (großzügiges Padding), anthrazit sekundär. Nur dezente Hover-Übergänge, keine Animationen. Mobile-first, Breakpoint `md` (768 px).

## Platzhalter (im Code mit `// TODO:` markiert)

- `PLACEHOLDER_PHONE`, `PLACEHOLDER_EMAIL`, `PLACEHOLDER_WHATSAPP` werden überall sichtbar gerendert und in einer zentralen Konstantendatei (`src/lib/contact.ts`) gehalten — so reicht später eine einzige Änderung.
- Hero-/Galeriefoto: lizenzfreies Werkstatt-/Hebebühnen-Foto als Stock-Platzhalter (austauschbar).
- Google Review Link bereits gesetzt; Place-ID ist im Brief enthalten.

## Technik-Hinweise

- TanStack Start File-based Routing unter `src/routes/`
- Elfsight-Script wird im Root via `head().scripts` mit `async` geladen; das `<div class="elfsight-app-...">`-Element wird dort platziert, wo das Widget erscheinen soll
- JSON-LD wird per `head().scripts` mit `type="application/ld+json"` ausgegeben
- Sitemap & robots.txt als Server-Routen unter `src/routes/api/` mit korrektem Content-Type
- Vorhandene shadcn-Komponenten genutzt: `button`, `card`, `input`, `textarea`, `label`, `accordion`, `sheet` (Mobile-Menü), `sonner` (Toast)
- Kein Backend nötig — Formular-Submit ist client-seitig
