import Image from "next/image";
import Link from "next/link";
import CoordinateTag from "./CoordinateTag";


const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/partners", label: "Partners" },
      { href: "/research", label: "Research" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Managed Detection & Response" },
      { href: "/services", label: "Penetration Testing" },
      { href: "/services", label: "Incident Response" },
      { href: "/services", label: "Compliance Advisory" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: "tel:+64800000000", label: "+64 800 000 000" },
      { href: "mailto:hello@apexanchor.co.nz", label: "hello@apexanchor.co.nz" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2B3B52] bg-[#0A121D]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Apex Anchor Cybersecurity emblem — a stylised anchor merged with a mountain apex, replace with final brand mark"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-[family-name:var(--font-archivo)] text-lg font-bold tracking-tight text-white">
                Apex Anchor
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8093A8]">
              Managed cybersecurity, penetration testing, and incident response for organisations across Aotearoa
              New Zealand.
            </p>
            <div className="mt-6">
              <CoordinateTag tone="sounding">36.8485° S, 174.7633° E — Tāmaki Makaurau</CoordinateTag>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#8093A8]">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#C4CEDB] transition-colors hover:text-[#E8A33D]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#2B3B52] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-plex-mono)] text-xs text-[#5A6B80]">
            © {new Date().getFullYear()} Apex Anchor Cybersecurity Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-[#5A6B80] hover:text-[#C4CEDB]">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-[#5A6B80] hover:text-[#C4CEDB]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}