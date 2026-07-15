import Image from "next/image";

type HeroImageProps = {
  src: string;
  alt: string;
};

/**
 * Drop-in hero background image. Place as the first child inside any
 * hero <section> (the section needs `relative overflow-hidden` in its
 * className), and everything else in that section can stay untouched —
 * the overlay keeps the existing white/fog text readable on top of it.
 */
export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image src={src} alt={alt} fill priority className="object-cover" />
      {/* Dark gradient so headline text stays readable over any photo */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0A121D]/60 via-[#0A121D]/80 to-[#0A121D]" />
    </div>
  );
}