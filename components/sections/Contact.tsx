import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const phoneNumbers = [
  "9999424223",
  "987347262828",
  "9205262828",
];

const emailAddresses = [
  "vinodpardhan78@gmail.com",
  "pardhantraveljaykumar5@gmail.com",
];

const contactCards = [
  {
    icon: Phone,
    title: "Call us",
    description:
      "Reach our team directly for enquiries and transportation requirements.",
    content: (
      <div className="space-y-3">
        {phoneNumbers.map((phone) => (
          <a
            key={phone}
            href={`tel:${phone}`}
            className="block text-base font-medium text-midnight transition-colors duration-300 hover:text-[#8b7214]"
          >
            {phone}
          </a>
        ))}
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Email us",
    description:
      "Send us your requirements and we&apos;ll get back to you.",
    content: (
      <div className="space-y-3">
        {emailAddresses.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="block break-all text-sm font-medium text-midnight transition-colors duration-300 hover:text-[#8b7214]"
          >
            {email}
          </a>
        ))}
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-blend-light relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      {/* ─────────────────────────────────────────
          ENQUIRY → CONTACT TRANSITION
      ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/2 h-80 w-[125%] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-midnight/15 via-pink/25 to-blue/15 blur-3xl"
      />

      {/* Pink ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-pink/15 blur-[120px]"
      />

      {/* Blue ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ─────────────────────────────────────────
            HEADING
        ───────────────────────────────────────── */}
        <Reveal>
          <div className="max-w-2xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-deep">
                Contact
              </p>
            </div>

            <h2 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-midnight sm:text-5xl lg:text-6xl">
              Let&apos;s talk about your next journey.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-midnight/60 sm:text-lg">
              Whether you need regular transportation for an organisation or
              transport for a wedding, event, tour or group journey, our team
              is available around the clock.
            </p>

          </div>
        </Reveal>

        {/* ─────────────────────────────────────────
            CONTACT GRID
        ───────────────────────────────────────── */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">

          {/* Phone + Email */}
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal
                key={card.title}
                delay={0.08 + index * 0.07}
                y={22}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-midnight/10 bg-white/80 p-7 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:border-midnight/15 hover:shadow-[0_24px_70px_rgba(16,27,45,0.12)] sm:p-8">

                  {/* Card glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-pink/0 blur-3xl transition-all duration-700 group-hover:bg-pink/15"
                  />

                  <div className="relative z-10">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-midnight text-gold transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(244,215,106,0.12)]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-midnight">
                      {card.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-midnight/55">
                      {card.description}
                    </p>

                    <div className="mt-6">
                      {card.content}
                    </div>

                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Location */}
          <Reveal delay={0.22} y={22}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-midnight/10 bg-white/80 p-7 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:border-midnight/15 hover:shadow-[0_24px_70px_rgba(16,27,45,0.12)] sm:p-8">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -top-20 h-44 w-44 rounded-full bg-blue/0 blur-3xl transition-all duration-700 group-hover:bg-blue/15"
              />

              <div className="relative z-10">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-midnight text-gold transition-all duration-500 group-hover:scale-110">
                  <MapPin size={20} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-midnight">
                  Find us
                </h3>

                <p className="mt-2 text-sm leading-6 text-midnight/55">
                  Our base of operations is in Noida, Uttar Pradesh.
                </p>

                <p className="mt-6 max-w-sm text-base font-medium leading-7 text-midnight">
                  V-247, Sector-12,
                  <br />
                  Noida, Uttar Pradesh,
                  <br />
                  India
                </p>

              </div>
            </div>
          </Reveal>

          {/* Service Area / Hours */}
          <Reveal delay={0.29} y={22}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-midnight/10 bg-white/80 p-7 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:border-midnight/15 hover:shadow-[0_24px_70px_rgba(16,27,45,0.12)] sm:p-8">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-gold/0 blur-3xl transition-all duration-700 group-hover:bg-gold/10"
              />

              <div className="relative z-10">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-midnight text-gold transition-all duration-500 group-hover:scale-110">
                  <Clock3 size={20} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-midnight">
                  Service & availability
                </h3>

                <div className="mt-5">

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-midnight/40">
                    Available
                  </p>

                  <p className="mt-1 text-lg font-semibold text-midnight">
                    24 hours · 7 days a week
                  </p>

                </div>

                <div className="mt-6">

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-midnight/40">
                    Service area
                  </p>

                  <p className="mt-2 text-sm leading-6 text-midnight/60">
                    Regular corporate and institutional transportation across
                    Delhi NCR, including Noida, Greater Noida and Gurgaon.
                    Pan-India services are available for tourism, weddings,
                    cultural and religious events, and group travel.
                  </p>

                </div>

              </div>
            </div>
          </Reveal>
        </div>

        {/* ─────────────────────────────────────────
            BOTTOM CTA
        ───────────────────────────────────────── */}
        <Reveal delay={0.2}>
          <div className="group relative mt-8 overflow-hidden rounded-3xl bg-midnight px-7 py-9 sm:px-9 sm:py-10">

            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink/15 blur-[100px] transition-transform duration-1000 group-hover:scale-110"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-blue/10 blur-[100px]"
            />

            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-lg font-semibold text-white sm:text-xl">
                  Have a transportation requirement?
                </p>

                <p className="mt-1 text-sm text-white/50">
                  Send us a quick enquiry and we&apos;ll take it from there.
                </p>
              </div>

              <a
                href="#enquiry"
                className="group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-midnight transition-all duration-500 hover:scale-[1.03] hover:bg-[#f6d76b] hover:shadow-[0_12px_35px_rgba(244,215,106,0.18)]"
              >
                Send an Enquiry

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                />
              </a>

            </div>
          </div>
        </Reveal>

        {/* Bottom visual fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-16 flex items-center gap-4"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-midnight/10 to-transparent" />

          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_18px_rgba(244,215,106,0.4)]" />

          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-midnight/10 to-transparent" />
        </div>

      </div>
    </section>
  );
}