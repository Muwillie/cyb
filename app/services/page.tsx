import type { Metadata } from "next";
import CoordinateTag from "@/components/CoordinateTag";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Services",
  description: "Managed detection and response, penetration testing, incident response, and compliance advisory from Apex Anchor Cybersecurity.",
};

const services = [
  {
    ref: "AA-01",
    title: "Managed Detection & Response",
    summary: "Continuous monitoring backed by analysts who investigate and act, not just triage alerts.",
    points: [
      "24/7 monitoring across endpoint, network, and cloud telemetry",
      "Analyst-led investigation, not just automated scoring",
      "Direct escalation line to a named responder, not a ticket queue",
      "Monthly posture reporting your leadership team can actually read",
    ],
  },
  {
    ref: "AA-02",
    title: "Penetration Testing",
    summary: "Manual, scenario-driven testing of applications, networks, and cloud environments.",
    points: [
      "Web, mobile, and API application testing",
      "External and internal network infrastructure testing",
      "Cloud configuration review across AWS, Azure, and GCP",
      "Social engineering and phishing simulation",
    ],
  },
  {
    ref: "AA-03",
    title: "Incident Response",
    summary: "A retained team ready to contain, investigate, and recover when something goes wrong.",
    points: [
      "Retainer and on-demand response options",
      "Digital forensics and root-cause investigation",
      "Coordinated containment and recovery planning",
      "Clear stakeholder and regulator communication support",
    ],
  },
  {
    ref: "AA-04",
    title: "Compliance & Risk Advisory",
    summary: "Practical guidance aligned to the frameworks New Zealand organisations are actually held to.",
    points: [
      "NZISM and Privacy Act 2020 gap assessments",
      "ISO 27001 readiness and certification support",
      "Third-party and supply-chain risk reviews",
      "Board-level risk reporting and roadmap planning",
    ],
  },
  {
    ref: "AA-05",
    title: "Security Awareness Training",
    summary: "Practical training that changes behaviour, not a once-a-year compliance video.",
    points: [
      "Role-based training for staff, IT, and leadership",
      "Ongoing phishing simulation with real coaching",
      "Onboarding modules for new starters",
      "Reporting your compliance team can cite directly",
    ],
  },
  {
    ref: "AA-06",
    title: "Cloud Security",
    summary: "Configuration, identity, and workload security across your cloud estate.",
    points: [
      "Identity and access management hardening",
      "Workload and container security review",
      "Cloud-native detection and logging setup",
      "Cost-aware architecture recommendations",
    ],
  },
];



export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[#2B3B52]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <CoordinateTag>Capability Set</CoordinateTag>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-archivo)] text-4xl font-bold leading-tight tracking-tight text-[#0b0ea8] sm:text-5xl">
            Six services. One accountable team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8093A8]">
            Every engagement is delivered by Apex Anchor analysts directly, from initial assessment through to
            ongoing monitoring. No subcontracted testing, no anonymous offshore desk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col divide-y divide-[#2B3B52] border-t border-[#2B3B52]">
          {services.map((service) => (
            <div key={service.ref} className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <span className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
                  Ref. {service.ref}
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-archivo)] text-2xl font-bold text-[#0b0ea8]">
                  {service.title}
                </h2>
                <p className="mt-3 text-[#8093A8]">{service.summary}</p>
              </div>
              <ul className="flex flex-col gap-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#24292e]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#E8A33D]" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#2B3B52] bg-[#121D2E]">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-archivo)] text-2xl font-bold text-[#0b0ea8] sm:text-3xl">
              Not sure which service fits?
            </h2>
            <p className="mt-2 max-w-lg text-[#8093A8]">
              Tell us where it hurts and we&apos;ll recommend a starting point, no sales script.
            </p>
          </div>
          <CTAButton href="/contact" className="shrink-0">
            Talk to an analyst
          </CTAButton>
        </div>
      </section>
    </>
  );
}