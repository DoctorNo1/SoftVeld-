import type { Metadata } from "next";
import { Zap, Handshake, TrendingUp, Building2, User } from "lucide-react";
import CodeWindow from "@/components/CodeWindow";
import CTABanner from "@/components/CTABanner";
import ImageBlock from "@/components/ImageBlock";

export const metadata: Metadata = {
  title: "About | SoftVeld",
  description:
    "SoftVeld is a high-end software engineering firm dedicated to bridging the gap between complex technical challenges and elegant, user-centric solutions.",
};

const VALUES = [
  {
    icon: Zap,
    title: "Technical Excellence",
    body: "Every line of code we ship is treated as a permanent artifact of our craftsmanship.",
    tone: "primary" as const,
  },
  {
    icon: Handshake,
    title: "True Partnership",
    body: "We don't work for you, we work with you. Your business goals are our engineering constraints.",
    tone: "light" as const,
  },
  {
    icon: TrendingUp,
    title: "Future-Proofing",
    body: "We build systems designed to scale from 1,000 to 1,000,000 users without refactoring.",
    tone: "light" as const,
  },
];

const TEAM = [
  {
    name: "Adrian Veld",
    role: "CEO & Founder",
    body: "Former Lead Systems Architect at GlobalNexus. Specialist in distributed ledger technology and cloud-native infrastructure.",
  },
  {
    name: "Elena Chen",
    role: "Chief Technology Officer",
    body: "Pioneer in AI-driven automation systems. Holds 14 patents in the field of algorithmic efficiency and machine learning.",
  },
  {
    name: "Marcus Thorne",
    role: "Director of Product Design",
    body: "Award-winning interaction designer. Focused on creating seamless human-computer interfaces for complex data visualization.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-8">
        <div className="rounded-3xl bg-secondary-900 px-8 py-16 text-white sm:px-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary-300">
            Established 2018
          </p>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-tight sm:text-5xl">
            Architecting the Future of{" "}
            <span className="text-primary-300">Digital Excellence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-secondary-300">
            SoftVeld is a high-end software engineering firm dedicated to
            bridging the gap between complex technical challenges and
            elegant, user-centric solutions.
          </p>
        </div>
      </section>

      {/* Genesis */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-secondary-100 bg-white p-8">
            <h2 className="text-xl font-bold text-secondary-900">
              The Genesis of Innovation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-secondary-500">
              Founded by a small collective of senior engineers and
              architects, SoftVeld was born from a singular realization: most
              software projects fail not due to a lack of effort, but a lack
              of structural integrity and deep technical foresight.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-secondary-500">
              We set out to build a firm that prioritizes &ldquo;The
              Architecture First&rdquo; approach. We believe that robust
              software is like modern high-end architecture: it must be
              functional, sustainable, and aesthetically pleasing in its
              implementation.
            </p>
          </div>
          <ImageBlock
            icon={Building2}
            variant="office"
            iconClassName="text-secondary-600"
            className="h-72 w-full rounded-2xl lg:h-80"
          />
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className={`rounded-2xl p-6 ${
                value.tone === "primary"
                  ? "bg-primary-500 text-white"
                  : "border border-secondary-100 bg-white text-secondary-900"
              }`}
            >
              <value.icon
                size={22}
                className={value.tone === "primary" ? "text-white" : "text-primary-500"}
              />
              <h3 className="mt-4 text-sm font-semibold">{value.title}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  value.tone === "primary" ? "text-primary-50" : "text-secondary-500"
                }`}
              >
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary-900 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary-300">
            Our Mission
          </p>
          <p className="mt-6 text-xl italic leading-relaxed sm:text-2xl">
            &ldquo;To empower industry leaders by delivering uncompromising
            software infrastructure that serves as the engine for their next
            decade of growth.&rdquo;
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-secondary-400">
            <span className="h-px w-8 bg-secondary-600" />
            The SoftVeld Promise
            <span className="h-px w-8 bg-secondary-600" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary-900 sm:text-3xl">
            The Minds Behind SoftVeld
          </h2>
          <p className="mt-3 text-secondary-500">
            A leadership team forged in high-stakes engineering environments.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-2xl border border-secondary-100 bg-white"
              >
                <ImageBlock
                  icon={User}
                  variant="portrait"
                  iconClassName="text-secondary-500"
                  label={member.role}
                  className="h-56 w-full"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-secondary-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-primary-500">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-500">
                    {member.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <CodeWindow
            title="Philosophy.ts"
            className="mt-10"
            lines={[
              { text: "interface CompanyDNA {", className: "text-primary-300" },
              { text: "  \"Scalability by Default\"", className: "text-green-400" },
              { text: "  \"Security as an Absolute\"", className: "text-green-400" },
              { text: "  \"Code as High Art\"", className: "text-green-400" },
              { text: "}" },
              { text: " " },
              { text: "const CompanyDNA = {", className: "text-primary-300" },
              { text: "  \"Clean Code\"", className: "text-green-400" },
              { text: "  \"Atomic Design\"", className: "text-green-400" },
              { text: "  \"Performance Obsession\"", className: "text-green-400" },
              { text: "}" },
              { text: " " },
              {
                text: "// We don't just solve problems. We eliminate them.",
                className: "text-secondary-500",
              },
              { text: "export default CompanyDNA;", className: "text-primary-300" },
            ]}
          />
        </div>
      </section>

      <CTABanner
        title="Ready to build the extraordinary?"
        subtitle="Join the ranks of market leaders who trust SoftVeld with their most critical assets."
        primary={{ label: "Get a Quote", href: "/contact" }}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />
    </>
  );
}
