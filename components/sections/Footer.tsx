import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Contact", href: "#contact" },
];

const phoneNumbers = [
  "9999424223",
  "987347262828",
  "9205262828",
];

const emailAddresses = [
  "vinodpardhan78@gmail.com",
  "pardhantraveljaykumar5@gmail.com",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-white">

      {/* ─────────────────────────────────────────
          CONTACT → FOOTER ATMOSPHERIC TRANSITION
      ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-blue/10 via-pink/15 to-gold/5 blur-3xl"
      />

      {/* Ambient pink */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-pink/8 blur-[120px]"
      />

      {/* Ambient blue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-blue/8 blur-[120px]"
      />

      {/* ─────────────────────────────────────────
          MAIN FOOTER
      ───────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_1fr]">

          {/* ─────────────────────────────────────
              BRAND
          ───────────────────────────────────── */}
          <div>

            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Sun Sai home"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-sm font-bold text-midnight transition-transform duration-500 group-hover:scale-105">
                SS
              </div>

              <div className="leading-none">
                <p className="text-lg font-bold tracking-wide">
                  SUN SAI
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/45">
                  Since 1999
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
              Reliable transportation for companies, institutions,
              groups, events and journeys across Delhi NCR and
              throughout India.
            </p>

            <Link
              href="#enquiry"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-midnight transition-all duration-500 hover:scale-[1.03] hover:bg-[#f6d76b] hover:shadow-[0_10px_30px_rgba(244,215,106,0.12)]"
            >
              Send an Enquiry

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* ─────────────────────────────────────
              NAVIGATION
          ───────────────────────────────────── */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ─────────────────────────────────────
              CONTACT
          ───────────────────────────────────── */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </p>

            <div className="mt-6 space-y-6">

              {/* Phone */}
              <div className="group flex gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10">
                  <Phone
                    size={15}
                    className="text-gold"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-sm text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      {phone}
                    </a>
                  ))}
                </div>

              </div>

              {/* Email */}
              <div className="group flex gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10">
                  <Mail
                    size={15}
                    className="text-gold"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  {emailAddresses.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block break-all text-sm text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      {email}
                    </a>
                  ))}
                </div>

              </div>

              {/* Location */}
              <div className="group flex gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10">
                  <MapPin
                    size={15}
                    className="text-gold"
                  />
                </div>

                <p className="pt-1 text-sm leading-6 text-white/55">
                  V-247, Sector-12,
                  <br />
                  Noida, Uttar Pradesh,
                  <br />
                  India
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────
          BOTTOM BAR
      ───────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Sun Sai. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <span>Available 24/7</span>

            <span className="h-1 w-1 rounded-full bg-gold/40" />

            <span>Noida, India</span>

          </div>

        </div>
      </div>

    </footer>
  );
}