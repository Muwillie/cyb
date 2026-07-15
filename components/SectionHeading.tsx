import CoordinateTag from "./CoordinateTag";

type SectionHeadingProps = {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "beacon" | "sounding" | "fog";
};

export default function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  tone = "beacon",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <CoordinateTag tone={tone}>{tag}</CoordinateTag>
      <h2 className="mt-4 font-[family-name:var(--font-archivo)] text-3xl font-bold tracking-tight text-[#0b0ea8] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[#0b0ea8] leading-relaxed text-[#8093A8] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}