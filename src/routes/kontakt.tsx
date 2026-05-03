import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, MessageCircle, Map } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/contact";

const title = "Kontakt & Anfahrt | Meisterwerkstatt Stern Berlin Tempelhof";
const description =
  "Kontakt zur KFZ-Meisterwerkstatt Stern in Berlin-Tempelhof. Adresse, Telefon, E-Mail, WhatsApp und Anfahrt mit Google Maps. Mo–Fr 08–17 Uhr.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}/kontakt` }],
  }),
  component: KontaktPage,
});

const formSchema = z.object({
  name: z.string().trim().min(1, "Bitte Namen angeben").max(100),
  phone: z.string().trim().max(50).optional(),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  message: z.string().trim().min(1, "Bitte Nachricht eingeben").max(2000),
});

function KontaktPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const result = formSchema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Bitte Eingaben prüfen");
      return;
    }
    setSubmitting(true);
    // TODO: Wire up to backend / email service
    setTimeout(() => {
      toast.success("Vielen Dank! Wir melden uns bald.");
      form.reset();
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Kontakt – Meisterwerkstatt Stern Berlin Tempelhof
      </h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        Schreiben Sie uns oder rufen Sie an – wir melden uns schnellstmöglich.
      </p>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="rounded-xl border bg-card p-6 space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input id="name" name="name" required maxLength={100} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" name="phone" type="tel" maxLength={50} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">E-Mail *</Label>
            <Input id="email" name="email" type="email" required maxLength={255} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="message">Nachricht *</Label>
            <Textarea id="message" name="message" required maxLength={2000} rows={5} className="mt-1" />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-red-accent px-6 py-3 font-semibold text-red-accent-foreground hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? "Wird gesendet…" : "Senden"}
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-6 space-y-4">
            <p className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-red-accent mt-0.5" />
              <span>
                {CONTACT.street}<br />{CONTACT.zip} {CONTACT.city}
              </span>
            </p>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center justify-center gap-2 rounded-md bg-red-accent px-6 py-4 text-lg font-bold text-red-accent-foreground hover:opacity-90"
            >
              <Phone className="h-5 w-5" /> {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.emailHref}
              className="flex items-center gap-3 hover:text-red-accent"
            >
              <Mail className="h-5 w-5 text-red-accent" /> {CONTACT.emailDisplay}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp schreiben
            </a>
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 text-red-accent" /> {CONTACT.hours}
            </p>
          </div>

          <div className="rounded-sm overflow-hidden border">
            <iframe
              title="Karte zur Werkstatt"
              src="https://www.google.com/maps?q=Ordensmeisterstra%C3%9Fe+35,+12099+Berlin&output=embed"
              width="100%"
              height="300"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-sm">
            Sie erreichen uns auch per WhatsApp: <strong>{CONTACT.whatsappDisplay}</strong>
          </p>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-sm bg-whatsapp px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp schreiben
          </a>

          <a
            href={CONTACT.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-sm border-2 border-dark px-6 py-3 font-semibold hover:bg-dark hover:text-dark-foreground transition"
          >
            <Map className="h-5 w-5" /> Route berechnen
          </a>
        </div>
      </div>
    </div>
  );
}
