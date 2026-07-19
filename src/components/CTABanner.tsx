import Link from "next/link";

export default function CTABanner({
  title,
  subtitle,
  primary,
  secondary,
}: {
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-primary-500">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center lg:px-8">
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-primary-50">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={primary.href}
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm transition-transform hover:scale-[1.02]"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
