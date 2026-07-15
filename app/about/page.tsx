import type { Metadata } from "next";
import Image from "next/image";
import CoordinateTag from "@/components/CoordinateTag";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import HeroImage from "@/components/HeroImage";

export const metadata: Metadata = {
  title: "About",
  description: "Apex Anchor Cybersecurity is a Kiwi-owned team of analysts, testers, and responders based in Aotearoa New Zealand.",
};

const values = [
  {
    ref: "V.1",
    title: "Plain English, always",
    description: "A finding you can't explain to your board isn't a finding, it's noise. We write for the reader, not the audit trail.",
  },
  {
    ref: "V.2",
    title: "Evidence over alarm",
    description: "We prioritise by real exploitability and business impact, not by how a vulnerability scanner scored it.",
  },
  {
    ref: "V.3",
    title: "On call means on call",
    description: "Our incident response line is answered by a person who can act, at any hour, every day of the year.",
  },
];

const timeline = [
  { year: "2016", detail: "Founded in Wellington by three analysts from the public and finance sectors." },
  { year: "2019", detail: "Opened a Wellington operations desk to support government and critical infrastructure clients." },
  { year: "2022", detail: "Built our 24/7 managed detection and response service in-house, end to end." },
  { year: "2025", detail: "Extended coverage to Christchurch, supporting clients across all three main islands." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#2B3B52]">

        <HeroImage
          src="/images/hero-about1.jpg"
          alt="Apex Anchor team members in discussion, used as the About page hero background"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <CoordinateTag>About Apex Anchor</CoordinateTag>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-archivo)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            We started Apex Anchor because too many good businesses learn security the hard way.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8093A8]">
            We&apos;re a Kiwi-owned team of analysts, penetration testers, and incident responders working from
            Auckland, Wellington, and Christchurch. No offshore call centre, no templated reports, just people who
            answer the phone.
          </p>
        </div>
      </section>

      {/* Mission image */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 h-80 overflow-hidden rounded-[6px] border border-[#2B3B52] sm:h-96 lg:order-1">
            <Image
              src="/images/re.jpg"
              alt="Apex Anchor team members collaborating around a desk in a New Zealand office"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              tag="Our Mission"
              title="Make enterprise-grade security reachable for New Zealand organisations"
              description="Most breaches we investigate weren't caused by a sophisticated adversary. They were caused by a gap nobody had time to close. We exist to find and close those gaps before someone else does."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-[#2B3B52] bg-[#121D2E]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading tag="What We Hold To" title="The standards behind every engagement" tone="sounding" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.ref} className="rounded-[6px] border border-[#2B3B52] bg-[#0A121D] p-8">
                <span className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
                  {value.ref}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-archivo)] text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8093A8]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading tag="Our Course" title="A decade charting New Zealand's threat landscape" />
        <div className="mt-12 flex flex-col divide-y divide-[#2B3B52] border-t border-[#2B3B52]">
          {timeline.map((item) => (
            <div key={item.year} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <span className="w-24 shrink-0 font-[family-name:var(--font-archivo)] text-xl font-bold text-blue-900">
                {item.year}
              </span>
              <p className="text-[#8093A8]">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team grid */}
      <section className="border-t border-[#2B3B52] bg-[#121D2E]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading tag="Leadership" title="The people accountable for your outcome" tone="sounding" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Hana Ropata", role: "Chief Executive Officer" },
              { name: "Marcus Reid", role: "Head of Threat Operations" },
              { name: "Aroha Ngata", role: "Head of Penetration Testing" },
              { name: "Anthony Smith", role: "Head of Compliance Advisory" },
            ].map((person) => (
              <div key={person.name}>
                <div className="relative h-64 overflow-hidden rounded-[6px] border border-[#2B3B52]">
                  <Image
                    src={`/images/team-${person.name.toLowerCase().replace(" ", "-")}.jpg`}
                    alt={`Portrait of ${person.name}, ${person.role} at Apex Anchor Cybersecurity`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-archivo)] text-base font-bold text-white">
                  {person.name}
                </h3>
                <p className="text-sm text-[#8093A8]">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="font-[family-name:var(--font-archivo)] text-2xl font-bold text-[#0b0ea8] sm:text-3xl">
          Want to work alongside a team that answers the phone?
        </h2>
        <div className="mt-8 flex justify-center">
          <CTAButton href="/contact">Get in touch</CTAButton>
        </div>
      </section>
    </>
  );
}