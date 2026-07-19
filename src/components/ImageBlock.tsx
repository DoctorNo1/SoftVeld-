import type { LucideIcon } from "lucide-react";

const VARIANTS = {
  server: "from-secondary-900 via-secondary-800 to-primary-900",
  office: "from-secondary-200 via-secondary-300 to-secondary-400",
  city: "from-primary-900 via-secondary-800 to-secondary-900",
  map: "from-primary-50 via-primary-100 to-secondary-100",
  portrait: "from-secondary-200 via-secondary-100 to-primary-100",
};

export default function ImageBlock({
  icon: Icon,
  label,
  variant = "server",
  className = "",
  iconClassName = "text-primary-300",
}: {
  icon: LucideIcon;
  label?: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${VARIANTS[variant]} ${className}`}
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
      <Icon size={48} className={`relative ${iconClassName}`} strokeWidth={1.25} />
      {label && (
        <span className="absolute bottom-3 right-4 font-mono text-[11px] uppercase tracking-widest text-white/70">
          {label}
        </span>
      )}
    </div>
  );
}
