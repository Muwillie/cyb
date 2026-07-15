import type { Metadata } from "next";
import CoordinateTag from "@/components/CoordinateTag";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Partners",
  description: "Partner with Apex Anchor Cybersecurity as a technology, referral, or managed service partner.",
};

const tiers = [
  {
    ref: "P.1",
    title: "Referral Partner",
    description: "Introduce clients who need security services and receive a commission on delivered work.",
    points: ["No minimum commitment", "Commission on every closed referral", "Co-branded proposal support"],
  },
  {
    ref: "P.2",
    title: "Technology Partner",
    description: "Integrate your platform with our detection and response stack for joint clients.",
    points: ["Joint solution briefs", "Technical integration support", "Shared go-to-market opportunities"],
  },
  {
    ref: "P.3",
    title: "Managed Service Partner",
    description: "White-label Apex Anchor's monitoring and response capability under your own brand.",
    points: ["Dedicated partner success manager", "Volume-based pricing", "Priority escalation access"],
  },
];

const techPartners = [
  "CrowdStrike", "Microsoft Defender", "Okta", "Cloudflare", "Wiz", "Splunk",
];

export default function PartnersPage() {
  return (
    <>
      <section className="border-b border-[#2B3B52]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <CoordinateTag>Partners</CoordinateTag>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-archivo)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            We defend better ground when we defend it together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8093A8]">
            From referral relationships to full white-label delivery, we work with partners who share our standard
            for how security should be done.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading tag="Partner Tracks" title="Three ways to work with us" />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.ref} className="flex flex-col rounded-[6px] border border-[#2B3B52] bg-[#121D2E] p-8">
              <span className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
                {tier.ref}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-archivo)] text-xl font-bold text-white">
                {tier.title}
              </h3>
              <p className="mt-3 text-sm text-[#8093A8]">{tier.description}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.points.map((point) => (
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
          <SectionHeading tag="Technology Stack" title="Platforms we integrate with" tone="sounding" />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {techPartners.map((name) => (
              <div
                key={name}
                className="flex h-20 items-center justify-center rounded-[6px] border border-[#2B3B52] bg-[#0A121D] px-4 text-center text-sm font-medium text-[#8093A8]"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#5A6B80]">
            Logos shown as text placeholders — replace with official partner marks per each vendor&apos;s brand
            guidelines.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="font-[family-name:var(--font-archivo)] text-2xl font-bold text-white sm:text-3xl">
          Interested in partnering with Apex Anchor?
        </h2>
        <div className="mt-8 flex justify-center">
          <CTAButton href="/contact">Start the conversation</CTAButton>
        </div>
      </section>
    </>
  );
}