import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ShoppingCart, HeartPulse, Landmark, ExternalLink } from "lucide-react";
import Badge from "@/components/Badge";
import CTABanner from "@/components/CTABanner";
import ImageBlock from "@/components/ImageBlock";

export const metadata: Metadata = {
  title: "Portfolio | SoftVeld",
  description:
    "Case studies from SoftVeld's work across logistics, fintech, healthcare, and e-commerce.",
};

const CASE_STUDIES = [
  {
    icon: Building2,
    tag: "Logistics",
    title: "Transforming Global Logistics",
    body: "Rebuilt the supply chain management platform for a Fortune 500 logistics firm using a microservices architecture, cutting processing time by 300%.",
  },
  {
    icon: Landmark,
    tag: "Fintech",
    title: "Real-Time Risk Engine",
    body: "Designed a low-latency risk analysis engine processing millions of transactions daily for a leading payments provider.",
  },
  {
    icon: HeartPulse,
    tag: "Healthcare",
    title: "Patient Data Interoperability",
    body: "Built a HIPAA-compliant data layer unifying records across 40+ clinics into a single, secure interface.",
  },
  {
    icon: ShoppingCart,
    tag: "E-Commerce",
    title: "Headless Commerce Rollout",
    body: "Migrated a legacy monolith to a headless commerce stack, improving page load speed by 65% and boosting conversion.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-8">
        <Badge>Case Studies</Badge>
        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-900 sm:text-5xl">
          Work that moves the needle for our partners.
        </h1>
        <p className="mt-5 max-w-xl text-secondary-500">
          A selection of engineering engagements where we replaced fragile
          systems with infrastructure built to last.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.title}
              className="overflow-hidden rounded-2xl border border-secondary-100 bg-white"
            >
              <ImageBlock
                icon={study.icon}
                variant="city"
                className="h-48 w-full"
                label={study.tag}
              />
              <div className="p-6">
                <h3 className="font-semibold text-secondary-900">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-500">
                  {study.body}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-500 hover:text-primary-600"
                >
                  View Case Study <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Have a project in mind?"
        subtitle="Let's discuss how SoftVeld can architect a solution built for your next decade of growth."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Our Services", href: "/services" }}
      />
    </>
  );
}
