import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import Badge from "@/components/Badge";
import ContactForm from "@/components/ContactForm";
import ImageBlock from "@/components/ImageBlock";

export const metadata: Metadata = {
  title: "Contact | SoftVeld",
  description:
    "Whether you have a specific project in mind or just want to explore the possibilities of partnership, our team of engineers and designers is ready.",
};

const LOGOS = ["TechCore", "Velocity", "Datastream", "Quantum"];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-8">
        <Badge>Contact Us</Badge>
        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-900 sm:text-5xl">
          Let&rsquo;s build something exceptional together.
        </h1>
        <p className="mt-5 max-w-xl text-secondary-500">
          Whether you have a specific project in mind or just want to
          explore the possibilities of partnership, our team of engineers
          and designers is ready.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />

          <div className="space-y-6">
            <div className="flex gap-4 rounded-2xl border border-secondary-100 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">Email</h3>
                <p className="mt-1 text-sm text-secondary-500">
                  Our team responds within 24 business hours.
                </p>
                <a
                  href="mailto:hello@softveld.io"
                  className="mt-1 inline-block text-sm font-semibold text-primary-500 hover:text-primary-600"
                >
                  hello@softveld.io
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-secondary-100 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">Office</h3>
                <p className="mt-1 text-sm text-secondary-500">
                  Visit our creative hub for a coffee and a chat.
                </p>
                <p className="mt-1 text-sm text-secondary-700">
                  482 Innovation Dr, Suite 300
                  <br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>

            <ImageBlock
              icon={MapPin}
              variant="map"
              iconClassName="text-primary-500"
              label="Office Location: SF Hub"
              className="h-40 w-full rounded-2xl"
            />

            <div className="rounded-2xl border border-primary-200 bg-white p-6">
              <div className="mb-3 flex items-center gap-2 text-secondary-900">
                <Clock size={16} className="text-primary-500" />
                <h3 className="text-xs font-semibold uppercase tracking-widest">
                  Operational Hours
                </h3>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary-500">Mon — Fri</span>
                <span className="font-semibold text-secondary-900">
                  09:00 — 18:00 PST
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-secondary-500">Sat — Sun</span>
                <span className="font-semibold text-secondary-900">
                  By Appointment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-secondary-100 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary-400">
            Trusted by Industry Leaders
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-sm font-bold uppercase tracking-widest text-secondary-300"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
