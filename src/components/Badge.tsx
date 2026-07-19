export default function Badge({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest ${
        tone === "dark"
          ? "bg-white/10 text-primary-200"
          : "bg-primary-50 text-primary-600"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
      {children}
    </span>
  );
}
