import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  Smartphone,
  Cloud,
  Palette,
  Microscope,
  Rocket,
  Quote,
  ArrowRight,
  Server,
} from "lucide-react";
import Badge from "@/components/Badge";
import CodeWindow from "@/components/CodeWindow";
import CTABanner from "@/components/CTABanner";
import ImageBlock from "@/components/ImageBlock";

export const metadata: Metadata = {
  title: "Services | SoftVeld",
  description:
    "Custom web apps, mobile development, cloud infrastructure, and UI/UX design engineered by SoftVeld.",
};

const OFFERINGS = [
  {
    icon: LayoutDashboard,
    title: "Custom Web Apps",
    body: "High-performance enterprise applications built with modern frameworks to streamline your internal workflows and customer-facing portals.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    body: "Native and cross-platform mobile solutions for iOS and Android, focusing on fluid performance and seamless hardware integration.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Architecture design, deployment automation, and scaling strategies for AWS, Azure, and Google Cloud environments.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    body: "User-centric design systems that balance aesthetic elegance with functional clarity to drive engagement and retention.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>Expert Engineering</Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-900 sm:text-5xl">
              Technical excellence for{" "}
              <span className="text-primary-500">visionary</span> brands.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary-500">
              We build robust, scalable, and sophisticated software solutions
              that solve complex business challenges. From enterprise
              infrastructure to mobile experiences.
            </p>
          </div>
          <ImageBlock
            icon={Server}
            variant="server"
            className="h-72 w-full rounded-2xl lg:h-80"
          />
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-l-4 border-primary-500 pl-4">
            <h2 className="text-2xl font-bold text-secondary-900 sm:text-3xl">
              Our Specialized Offerings
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OFFERINGS.map((offering) => (
              <div
                key={offering.title}
                className="flex flex-col rounded-2xl border border-secondary-100 bg-neutral-50 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                  <offering.icon size={20} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-secondary-900">
                  {offering.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary-500">
                  {offering.body}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-500 hover:text-primary-600"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we deliver excellence */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary-900 sm:text-3xl">
            How We Deliver Excellence
          </h2>
          <p className="mt-3 max-w-lg text-secondary-500">
            We combine rigorous engineering standards with an agile
            methodology to ensure predictable outcomes and high-velocity
            shipping.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col justify-between rounded-2xl bg-secondary-900 p-8 text-white">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary-300">
                  01 / Discovery
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Deep Technical Audits
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary-300">
                  We begin every partnership with a comprehensive analysis of
                  your existing stack, identifying bottlenecks and
                  architecting a roadmap for scalability.
                </p>
              </div>
              <Microscope size={40} className="mt-8 self-end text-secondary-500" strokeWidth={1.25} />
            </div>

            <div className="rounded-2xl border border-secondary-100 bg-white p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary-500">
                02 / Code
              </p>
              <h3 className="mt-3 text-xl font-semibold text-secondary-900">
                Clean Code Culture
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-500">
                Our engineers follow strict SOLID principles, ensuring your
                codebase remains maintainable for years.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-secondary-100 pt-4">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium uppercase tracking-widest text-secondary-400">
                  Active Development
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col justify-between rounded-2xl bg-primary-500 p-8 text-white">
              <Rocket size={32} strokeWidth={1.5} />
              <div className="mt-8">
                <h3 className="text-xl font-semibold">Rapid Deployment</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-50">
                  CI/CD pipelines configured for hourly releases without
                  downtime.
                </p>
              </div>
            </div>

            <div className="grid gap-6 rounded-2xl border border-secondary-100 bg-white p-8 sm:grid-cols-2 sm:items-center">
              <CodeWindow
                title="optimize.ts"
                lines={[
                  { text: "const optimizeStack = () =>", className: "text-primary-300" },
                  { text: "  services.map((s) => ({" },
                  { text: "    ...s," },
                  { text: "    status: 'performant',", className: "text-green-400" },
                  { text: "  }));" },
                ]}
              />
              <div>
                <h3 className="text-lg font-semibold text-secondary-900">
                  Modern Tech Stacks
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-500">
                  We leverage TypeScript, React, Go, and Rust to build
                  applications that don&rsquo;t just work—they excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-8">
          <Quote size={40} className="text-primary-500" />
          <p className="mt-4 text-lg italic leading-relaxed text-secondary-700">
            &ldquo;SoftVeld transformed our archaic legacy infrastructure into
            a cloud-native powerhouse. Their engineering team didn&rsquo;t
            just build what we asked for; they built what we actually needed
            for the next decade.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-600">
              MC
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-secondary-900">
                Marcus Chen
              </p>
              <p className="text-xs uppercase tracking-wide text-secondary-400">
                CTO, NexGen Systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to scale your technical vision?"
        subtitle="Schedule a 30-minute architecture review with our lead consultants today. No obligations, just expertise."
        primary={{ label: "Book a Call", href: "/contact" }}
        secondary={{ label: "View Our Work", href: "/portfolio" }}
      />
    </>
  );
}
