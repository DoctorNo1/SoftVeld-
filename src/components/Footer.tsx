import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/careers", label: "Careers" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-bold">SoftVeld</p>
          <p className="mt-1 max-w-xs text-sm text-secondary-300">
            Premium software engineering and digital transformation for
            visionary enterprises worldwide.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-secondary-300">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-secondary-400">
          &copy; {new Date().getFullYear()} SoftVeld. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
