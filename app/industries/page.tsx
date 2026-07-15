import type { Metadata } from "next";
import Image from "next/image";
import CoordinateTag from "@/components/CoordinateTag";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Industries",
  description: "Apex Anchor Cybersecurity supports financial services, government, healthcare, critical infrastructure, retail, and professional services organisations across New Zealand.",
};

const industries = [
  {
    ref: "I-01",
    title: "Financial Services",
    description:
      "Banks, insurers, and fintechs operating under tight regulatory scrutiny and constant fraud pressure.",
    points: [
      "Alignment to CPS 234-equivalent expectations and NZ financial sector guidance",
      "Fraud-pattern-aware monitoring across transaction systems",
      "Third-party and vendor risk assessments",
    ],
  },
  {
    ref: "I-02",
    title: "Government & Public Sector",
    description: "Central and local government agencies handling citizen data and essential services.",
    points: [
      "NZISM-aligned assessments and certification support",
      "Cleared analysts for sensitive engagements",
      "Incident response coordinated with CERT NZ reporting obligations",
    ],
  },
  {
    ref: "I-03",
    title: "Healthcare",
    description: "Providers and health-tech companies protecting patient data and clinical continuity.",
    points: [
      "Privacy Act 2020 and health information privacy code alignment",
      "Medical device and clinical system network segmentation review",
      "Ransomware-focused incident response planning",
    ],
  },
  {
    ref: "I-04",
    title: "Critical Infrastructure & Utilities",
    description: "Energy, water, and telecommunications operators where downtime has real-world consequences.",
    points: [
      "OT and ICS network exposure assessment",
      "Resilience-focused incident response, built around uptime",
      "Supply-chain risk review for embedded and industrial systems",
    ],
  },
  {
    ref: "I-05",
    title: "Retail & Logistics",
    description: "Retailers and distribution businesses defending payment systems and customer data at scale.",
    points: [
      "PCI DSS scoping and compliance support",
      "Credential-stuffing and account-takeover defence",
      "Peak-season load-aware monitoring",
    ],
  },
  {
    ref: "I-06",
    title: "Professional Services",
    description: "Law firms, accountancies, and consultancies holding sensitive client information.",
    points: [
      "Client-confidentiality-focused access control review",
      "Business email compromise prevention and response",
      "Practical security awareness training for client-facing staff",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-[#2B3B52]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <CoordinateTag>Industries</CoordinateTag>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-archivo)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Different terrain, the same standard of coverage.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8093A8]">
            Every sector has its own regulators, systems, and failure modes. We tailor the same core capability set
            to how your industry actually operates.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {industries.map((industry) => (
            <div key={industry.ref} className="rounded-[6px] border border-[#2B3B52] bg-[#121D2E] p-8">
              <span className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
                Ref. {industry.ref}
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-archivo)] text-xl font-bold text-white">
                {industry.title}
              </h2>
              <p className="mt-3 text-sm text-[#8093A8]">{industry.description}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {industry.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#C4CEDB]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#E8A33D]" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2B3B52] bg-[#121D2E]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              tag="Don't See Your Sector?"
              title="We work beyond these six industries too"
              description="These are where we have the deepest bench, not the limit of who we support. If your organisation carries sensitive data or critical uptime requirements, we've likely got relevant experience."
              tone="sounding"
            />
            <div className="relative h-72 overflow-hidden rounded-[6px] border border-[#2B3B52] sm:h-80">
              <Image
                src="/images/industries-overview.jpg"
                alt="Wide shot of a New Zealand cityscape representing the range of industries served, to be replaced with a relevant photograph"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}