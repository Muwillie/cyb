"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/partners", label: "Partners" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A121D]/95 backdrop-blur">
      {/* Incident hotline strip */}
      <div className="border-b border-[#2B3B52] bg-[#0A121D]">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2 text-center sm:justify-end">
          <p className="font-[family-name:var(--font-plex-mono)] text-[11px] uppercase tracking-[0.15em] text-[#8093A8]">
            24/7 Incident Response —{" "}
            <a href="tel:+17069825110" className="text-[#E8A33D] hover:text-[#f0b660]">
              +1 (706) 982-5110
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Apex Anchor Cybersecurity emblem — a stylised anchor merged with a mountain apex, replace with final brand mark"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-[family-name:var(--font-archivo)] text-lg font-bold tracking-tight text-white">
            Apex Anchor
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-plex-sans)] text-sm font-medium text-[#C4CEDB] transition-colors hover:text-[#E8A33D]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[4px] bg-[#E8A33D] px-5 py-2.5 text-sm font-semibold text-[#0A121D] transition-colors hover:bg-[#f0b660]"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#2B3B52] text-white lg:hidden"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            {open ? (
              <path d="M1 1L17 13M17 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0 7H18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0 13H18" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open ? (
        <nav className="border-t border-[#2B3B52] bg-[#0A121D] px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-[family-name:var(--font-plex-sans)] text-base font-medium text-[#C4CEDB] hover:text-[#E8A33D]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-[4px] bg-[#E8A33D] px-5 py-3 text-center text-sm font-semibold text-[#0A121D]"
          >
            Contact
          </Link>
        </nav>
      ) : null}
    </header>
  );
}