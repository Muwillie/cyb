import type { Metadata } from "next";
import CoordinateTag from "@/components/CoordinateTag";
import ContactForm from "@/components/ContactForm";
import HeroImage from "@/components/HeroImage";


export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Apex Anchor Cybersecurity for a security assessment, or reach our 24/7 incident response line.",
};

const offices = [
  { city: "Atlanta", detail: `699 Spring St NW, Atlanta, GA 30308, USA` },
  { city: "Wellington", detail: "Level 4, 40 Willis Street, Wellington 6011, New Zealand" },
  { city: "London", detail: "69 Old Broad St, London EC2M 1QS, United Kingdom" },
];

export default function ContactPage() {
  return (
    <>
       <section className="relative overflow-hidden border-b border-[#2B3B52]">
        <HeroImage
          src="/images/rec.jpg"
          alt="Office reception area with soft evening light, used as the Contact page hero background"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <CoordinateTag>Get In Touch</CoordinateTag>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-archivo)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Tell us what&apos;s on your mind. We&apos;ll tell you what we can do about it.
          </h1>
        </div>
      </section>

      {/* Emergency callout */}
      <section className="border-b border-[#2B3B52] bg-[#121D2E]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col items-start gap-3 rounded-[6px] border border-[#E8A33D]/40 bg-[#0A121D] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#E8A33D]">
                Active incident?
              </p>
              <p className="mt-1 text-[#C4CEDB]">Don&apos;t wait for a form response. Call our response line now.</p>
            </div>
            <a
              href="tel:+17069825110"
              className="whitespace-nowrap rounded-[4px] bg-[#E8A33D] px-6 py-3 text-sm font-semibold text-[#0A121D] hover:bg-[#f0b660]"
            >
              +1 (706) 982-5110
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />

          <div>
            <h2 className="font-[family-name:var(--font-archivo)] text-lg font-bold text-white">Our offices</h2>
            <div className="mt-6 flex flex-col divide-y divide-[#2B3B52] border-t border-[#2B3B52]">
              {offices.map((office) => (
                <div key={office.city} className="py-5">
                  <p className="font-[family-name:var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-[#5FB8B0]">
                    {office.city}
                  </p>
                  <p className="mt-2 text-sm text-[#8093A8]">{office.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="font-[family-name:var(--font-archivo)] text-sm font-bold text-white">
                General enquiries
              </h3>
              <a href="mailto:apexanchor@outlook.com" className="mt-2 block text-sm text-[#5FB8B0] hover:text-[#8fd4cd]">
                apexanchor@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}