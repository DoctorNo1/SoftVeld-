export default function CodeWindow({
  title,
  lines,
  className = "",
}: {
  title: string;
  lines: { text: string; className?: string }[];
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-secondary-700 bg-secondary-900 shadow-2xl shadow-secondary-900/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-secondary-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 font-mono text-xs text-secondary-300">{title}</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className={line.className ?? "text-secondary-300"}>
            {line.text || " "}
          </div>
        ))}
      </pre>
    </div>
  );
}
