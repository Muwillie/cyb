type CoordinateTagProps = {
  children: React.ReactNode;
  tone?: "beacon" | "sounding" | "fog";
};

const toneMap = {
  beacon: "text-[#E8A33D]",
  sounding: "text-[#5FB8B0]",
  fog: "text-[#8093A8]",
};

/**
 * Recurring structural device styled after chart coordinates / incident
 * reference codes. Used as the eyebrow above section headings throughout
 * the site instead of generic numbered markers.
 */
export default function CoordinateTag({ children, tone = "beacon" }: CoordinateTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] ${toneMap[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}