import Image from "next/image";
import CoordinateTag from "@/components/CoordinateTag";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ContourField from "@/components/ContourField";
import HeroImage from "@/components/HeroImage";

const services = [
  {
    ref: "AA-01",
    title: "Managed Detection & Response",
    description: "Around-the-clock monitoring across your network, endpoints, and cloud, with analysts who act on what they see, not just alert on it.",
  },
  {
    ref: "AA-02",
    title: "Penetration Testing",
    description: "Manual, scenario-led testing of your applications, infrastructure, and people, reported in language your board can act on.",
  },
  {
    ref: "AA-03",
    title: "Incident Response",
    description: "A retained team on call to contain, investigate, and recover from a breach, with clear communication at every step.",
  },
  {
    ref: "AA-04",
    title: "Compliance & Risk Advisory",
    description: "Practical guidance against NZISM, the Privacy Act, and ISO 27001, sized to how your organisation actually operates.",
  },
];

const approach = [
  {
    ref: "01",
    title: "Chart the terrain",
    description: "We map your assets, dependencies, and exposure before recommending a single control.",
  },
  {
    ref: "02",
    title: "Set the anchor points",
    description: "We prioritise the fixes that remove the most risk first, not the longest list of findings.",
  },
  {
    ref: "03",
    title: "Hold the position",
    description: "We monitor and report continuously, so your security posture doesn't quietly drift.",
  },
];

const stats = [
  { value: "24/7", label: "Analyst-monitored coverage" },
  { value: "<15 min", label: "Median incident acknowledgement" },
  { value: "NZ-based", label: "Analysts, on NZ time" },
];

const articles = [
  {
    ref: "R-112",
    date: "12 Jun 2026",
    category: "Threat Advisory",
    title: "A rise in invoice-fraud phishing targeting NZ construction firms",
    excerpt: "What we're seeing across client environments this quarter, and the two controls that stop it cold.",
  },
  {
    ref: "R-109",
    date: "28 May 2026",
    category: "Research",
    title: "Cloud misconfiguration remains the top root cause in our IR caseload",
    excerpt: "A breakdown of the identity and storage misconfigurations behind our last twelve engagements.",
  },
  {
    ref: "R-104",
    date: "9 May 2026",
    category: "Compliance",
    title: "What the latest Privacy Act guidance means for SME reporting timelines",
    excerpt: "A practical read of the updated notification expectations, without the legal jargon.",
  },
  {
    ref: "R-098",
    date: "22 Apr 2026",
    category: "Threat Advisory",
    title: "Credential-stuffing attempts against NZ retail logins are climbing",
    excerpt: "Attack volume, targeted sectors, and the rate-limiting approach we recommend.",
  },
];


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2B3B52]">
        <HeroImage
          src="/images/hero-home.jpg"
          alt="Wide shot of an Apex Anchor security operations centre at night, screens glowing, used as the homepage hero background"
        />
        <ContourField />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-28">
          <CoordinateTag>Threat Watch — Aotearoa New Zealand</CoordinateTag>
          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-archivo)] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Security that holds its position when everything else moves.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#8093A8]">
            Apex Anchor is a Kiwi-owned cybersecurity partner for organisations that can&apos;t afford to guess.
            We monitor, test, and defend, so a bad afternoon never becomes a bad year.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/contact">Request a security assessment</CTAButton>
            <CTAButton href="/services" variant="secondary" className="text-amber-300">
              View our services
            </CTAButton>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-[#2B3B52] bg-[#0A121D]/60">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#2B3B52] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 py-6 sm:px-8 sm:py-8">
                <span className="font-[family-name:var(--font-archivo)] text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-[#8093A8]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          tag="Capability Set"
          title="Coverage across the whole attack surface"
          description="Four core services, delivered by one accountable team, rather than a stack of disconnected vendors."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.ref}
              className="group rounded-[6px] border border-[#2B3B52] bg-[#121D2E] p-8 transition-colors hover:border-[#5FB8B0]"
            >
              <span className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
                Ref. {service.ref}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-archivo)] text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#8093A8]">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-[#2B3B52] bg-[#121D2E]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            tag="How We Work"
            title="A method built for a moving threat landscape"
            tone="sounding"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {approach.map((step) => (
              <div key={step.ref} className="border-l border-[#2B3B52] pl-6">
                <span className="font-[family-name:var(--font-plex-mono)] text-xs text-[#5A6B80]">
                  {step.ref}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-archivo)] text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8093A8]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / imagery section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              tag="Why Apex Anchor"
              title="Local analysts. No offshore hand-off. No jargon."
              description="We're built for New Zealand organisations: NZ business hours as standard, NZ compliance frameworks as fluent, and a plain-English incident call when it matters most."
            />
            <div className="mt-8">
              <CTAButton href="/about" variant="ghost">
                Read our story →
              </CTAButton>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-[6px] border border-[#2B3B52] sm:h-96">
            <Image
              src="/images/opc.jpg"
              alt="Apex Anchor security operations analysts monitoring dashboards in a dimly lit operations room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <>
            <section className="border-b border-[#2B3B52]">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
                <CoordinateTag>Research</CoordinateTag>
                <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-archivo)] text-4xl font-bold leading-tight tracking-tight text-[#0b0ea8] sm:text-5xl">
                  What we're seeing across New Zealand's threat landscape.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8093A8]">
                  Notes from our SOC, penetration testing, and incident response teams, published as we see patterns
                  worth sharing.
                </p>
              </div>
            </section>
      
            {/* Featured article */}
            <section className="mx-auto max-w-7xl px-6 py-16">
              <div className="grid grid-cols-1 gap-10 overflow-hidden rounded-[6px] border border-[#2B3B52] bg-[#121D2E] lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src="/images/ab.jpg"
                    alt="Abstract visualisation of network traffic data used to illustrate the featured research article"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
                    Featured — Ref. {articles[0].ref}
                  </span>
                  <h2 className="mt-4 font-[family-name:var(--font-archivo)] text-2xl font-bold text-white sm:text-3xl">
                    {articles[0].title}
                  </h2>
                  <p className="mt-4 text-[#8093A8]">{articles[0].excerpt}</p>
                  <p className="mt-6 font-[family-name:var(--font-plex-mono)] text-xs text-[#5A6B80]">
                    {articles[0].date} · {articles[0].category}
                  </p>
                </div>
              </div>
            </section>
      
            {/* Article grid */}
            <section className="mx-auto max-w-7xl px-6 py-16">
              <SectionHeading tag="Latest" title="More from the team" />
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                {articles.slice(1).map((article) => (
                  <article key={article.ref} className="flex flex-col rounded-[6px] border border-[#2B3B52] bg-[#121D2E] p-6">
                    <span className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
                      {article.category}
                    </span>
                    <h3 className="mt-3 font-[family-name:var(--font-archivo)] text-lg font-bold text-white">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#8093A8]">{article.excerpt}</p>
                    <p className="mt-4 font-[family-name:var(--font-plex-mono)] text-xs text-[#5A6B80]">{article.date}</p>
                  </article>
                ))}
              </div>
            </section>
      
            {/* Subscribe */}
            <section className="border-t border-[#2B3B52] bg-[#121D2E]">
              <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-[family-name:var(--font-archivo)] text-xl font-bold text-white">
                      Get our research in your inbox
                    </h2>
                    <p className="mt-2 text-sm text-[#8093A8]">One email a month. No vendor pitches.</p>
                  </div>
                  <form className="flex w-full max-w-md gap-3 sm:w-auto">
                    <input
                      type="email"
                      required
                      placeholder="you@company.co.nz"
                      className="w-full rounded-[4px] border border-[#2B3B52] bg-[#0A121D] px-4 py-3 text-sm text-white placeholder:text-[#5A6B80] focus:border-[#5FB8B0] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="shrink-0 rounded-[4px] bg-[#E8A33D] px-5 py-3 text-sm font-semibold text-[#0A121D] hover:bg-[#f0b660]"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </>
    </>
  );
}