import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  RefreshCw,
  Cloud,
  Code2,
  Database,
  Monitor,
  Zap,
  Server,
  Boxes,
  Bot,
  Building2,
  ExternalLink,
} from "lucide-react";
import Badge from "@/components/Badge";
import CodeWindow from "@/components/CodeWindow";
import CTABanner from "@/components/CTABanner";
import ImageBlock from "@/components/ImageBlock";

const REASONS = [
  {
    icon: LayoutDashboard,
    title: "Technical Superiority",
    body: "We don't just build apps, we build robust architectures using the latest tech stacks that ensure long-term stability and high performance under load.",
    image: true,
  },
  {
    icon: Users,
    title: "Deep Integration",
    body: "Our team functions as a seamless extension of your organization, adopting your goals and culture to deliver aligned outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    body: "Security is woven into our SDLC. We implement rigorous testing and compliance standards to protect your intellectual property and data.",
  },
];

const TECHNOLOGIES = [
  { icon: Code2, label: "C# / .NET 6–10" },
  { icon: Server, label: "ASP.NET Core" },
  { icon: Monitor, label: "WPF & Desktop Apps" },
  { icon: Database, label: "SQL Server & MongoDB" },
  { icon: Zap, label: "Redis & RabbitMQ" },
  { icon: Cloud, label: "AWS & Azure" },
  { icon: Boxes, label: "Docker & CI/CD" },
  { icon: Bot, label: "AI-Assisted Development" },
];

const TESTIMONIALS = [
  {
    quote:
      "SoftVeld didn't just deliver a product; they architected a solution that increased our processing efficiency by 300%. Their technical depth and proactive approach made them feel like part of our internal team.",
    name: "Sarah Jenkins",
    role: "CTO, NexaCorp Systems",
  },
  {
    quote:
      "The code quality and attention to scalability were beyond what we expected. SoftVeld navigated our complex legacy requirements and built a modern API layer that's now the backbone of our global operations.",
    name: "Marcus Chen",
    role: "Head of Engineering, FlowState AI",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Badge>Software Excellence</Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-secondary-900 sm:text-5xl">
              Architecting Your{" "}
              <span className="text-primary-500">Digital Future</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary-500">
              We engineer enterprise-grade custom software solutions that
              scale with your vision. From cloud architecture to seamless
              user experiences, SoftVeld is your partner in technical
              innovation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-primary-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-primary-500/30 transition-colors hover:bg-primary-600"
              >
                Launch Your Project
              </Link>
              <Link
                href="/portfolio"
                className="rounded-lg border border-secondary-200 bg-white px-6 py-3 text-center text-sm font-semibold text-secondary-700 transition-colors hover:border-secondary-300"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>

          <CodeWindow
            title="SoftVeldEngine.cs"
            className="lg:ml-auto lg:max-w-md"
            lines={[
              { text: "public class DigitalArchitecture", className: "text-primary-300" },
              { text: "{" },
              {
                text: "  public async Task<FutureProofSystem> EngineerSolution(",
              },
              { text: "    Project vision)" },
              { text: "  {" },
              {
                text: "    var infrastructure = await Cloud.DeployAsync(new()",
              },
              { text: "    {" },
              { text: "      Scalability = true,", className: "text-green-400" },
              { text: "      Resilience = \"99.99%\",", className: "text-green-400" },
              { text: "    });" },
              { text: " " },
              {
                text: "    return new FutureProofSystem(vision, infrastructure);",
                className: "text-primary-300",
              },
              { text: "  }" },
              { text: "}" },
            ]}
          />
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              Why Leading Firms Choose SoftVeld
            </h2>
            <p className="mt-4 text-secondary-500">
              Precision engineering, transparent communication, and a
              commitment to technical excellence in every line of code.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {REASONS.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-secondary-100 bg-neutral-50 p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                  <reason.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-secondary-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-500">
                  {reason.body}
                </p>
                {reason.image && (
                  <ImageBlock
                    icon={Server}
                    variant="server"
                    className="mt-6 h-40 w-full rounded-xl"
                  />
                )}
              </div>
            ))}

            <div className="rounded-2xl bg-secondary-900 p-8 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Agile &amp; Transparent</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-secondary-300">
                    Bi-weekly sprints, daily updates, and direct access to
                    your dev team through dedicated Slack channels and Jira
                    boards.
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500">
                  <RefreshCw size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core technologies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 sm:text-3xl">
                Our Core Technologies
              </h2>
              <p className="mt-3 max-w-lg text-secondary-500">
                We specialize in the most effective modern frameworks to
                deliver scalable, performant, and maintainable software.
              </p>
            </div>
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-semibold text-primary-500 hover:text-primary-600"
            >
              Explore Our Stack <ExternalLink size={14} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.label}
                className="flex items-center gap-3 rounded-xl border border-secondary-100 bg-white px-5 py-5"
              >
                <tech.icon size={18} className="text-primary-500" />
                <span className="text-sm font-medium text-secondary-700">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + case study */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary-900 sm:text-3xl">
            Partnerships Built on Trust
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col justify-between rounded-2xl border border-secondary-100 bg-neutral-50 p-6"
                >
                  <p className="text-sm italic leading-relaxed text-secondary-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-600">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary-900">
                        {t.name}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-secondary-400">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-secondary-100">
              <ImageBlock icon={Building2} variant="city" className="h-48 w-full" />
              <div className="bg-neutral-50 p-6">
                <h3 className="font-semibold text-secondary-900">
                  Transforming Global Logistics
                </h3>
                <p className="mt-2 text-sm text-secondary-500">
                  Read the full case study on how we rebuilt the supply
                  chain management platform for a Fortune 500 logistics firm
                  using a microservices architecture.
                </p>
                <Link
                  href="/portfolio"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-500 hover:text-primary-600"
                >
                  View Case Study <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to build the future?"
        subtitle="Schedule a technical discovery call with our architects today and let's discuss your roadmap."
        primary={{ label: "Get Started Now", href: "/contact" }}
      />
    </>
  );
}
