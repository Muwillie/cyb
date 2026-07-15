import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-[#E8A33D] text-[#0A121D] hover:bg-[#f0b660] focus-visible:outline-[#E8A33D]",
  secondary:
    "border border-[#2B3B52] text-[#E8A33D] hover:border-[#5FB8B0] hover:text-[#5FB8B0] focus-visible:outline-[#5FB8B0]",
  ghost:
    "text-[#5FB8B0] hover:text-[#8fd4cd] focus-visible:outline-[#5FB8B0]",
};

export default function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] px-6 py-3 font-[family-name:var(--font-plex-sans)] text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}