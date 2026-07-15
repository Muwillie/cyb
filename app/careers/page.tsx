import type { Metadata } from "next";
import Image from "next/image";
import CoordinateTag from "@/components/CoordinateTag";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Apex Anchor Cybersecurity team in Auckland, Wellington, or Christchurch.",
};

const benefits = [
  { ref: "B.1", title: "Genuine on-call rotation", description: "Fair, well-compensated on-call, with hard limits on consecutive rotations." },
  { ref: "B.2", title: "Training budget", description: "$3,000 a year toward certifications, conferences, or courses of your choosing." },
  { ref: "B.3", title: "Flexible base", description: "Work from any of our three offices, or remotely within New Zealand." },
  { ref: "B.4", title: "Health cover", description: "Full medical insurance for you and your immediate family from day one." },
];

const roles = [
  { ref: "R-014", title: "Senior SOC Analyst", location: "Auckland", type: "Full-time" },
  { ref: "R-018", title: "Penetration Tester", location: "Wellington", type: "Full-time" },
  { ref: "R-021", title: "Incident Response Lead", location: "Auckland", type: "Full-time" },
  { ref: "R-023", title: "Compliance Consultant", location: "Christchurch", type: "Full-time" },
  { ref: "R-025", title: "Graduate Security Analyst", location: "Auckland / Wellington", type: "Graduate" },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#2B3B52]">
        <HeroImage
          src="/images/dep.webp"
          alt="Apex Anchor staff collaborating in a bright office space, used as the Careers page hero background"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <CoordinateTag>Careers</CoordinateTag>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-archivo)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Work on problems that matter, with people who have your back at 2am.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8093A8]">
            We&apos;re a small team by design. That means real ownership, direct client contact from day one, and no
            layers of process between you and the work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-[6px] border border-[#2B3B52] sm:h-96">
            <Image
              src="/images/ss.jpeg"
              alt="Apex Anchor staff in an informal team discussion in a bright office space"
              fill
              className="object-cover"
            />
          </div>
          <SectionHeading
            tag="Life at Apex Anchor"
            title="A team that treats on-call as a shared responsibility, not a punishment"
            description="You'll work alongside senior analysts who mentor deliberately, on a rotation that respects your time outside work. We measure success by outcomes for clients, not hours logged."
          />
        </div>
      </section>

      <section className="border-y border-[#2B3B52] bg-[#121D2E]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading tag="Benefits" title="What you get beyond the salary" tone="sounding" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.ref} className="rounded-[6px] border border-[#2B3B52] bg-[#0A121D] p-6">
                <span className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
                  {b.ref}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-archivo)] text-base font-bold text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8093A8]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading tag="Open Roles" title="Current openings" />
        <div className="mt-12 flex flex-col divide-y divide-[#2B3B52] border-t border-[#2B3B52]">
          {roles.map((role) => (
            <div
              key={role.ref}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-[family-name:var(--font-plex-mono)] text-xs text-[#5A6B80]">{role.ref}</span>
                <h3 className="font-[family-name:var(--font-archivo)] text-lg font-bold text-white">{role.title}</h3>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#8093A8]">
                <span>{role.location}</span>
                <span className="h-1 w-1 rounded-full bg-[#2B3B52]" aria-hidden="true" />
                <span>{role.type}</span>
                <CTAButton href="/contact" variant="ghost" className="!px-0 !py-0">
                  Apply →
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#8093A8]">
          Don&apos;t see the right role?{" "}
          <a href="mailto:careers@apexanchor.co.nz" className="text-[#5FB8B0] hover:text-[#8fd4cd]">
            Send us your CV anyway
          </a>
          .
        </p>
      </section>
    </>
  );
}