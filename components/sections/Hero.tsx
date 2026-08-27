import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-midnight">

      {/* ─────────────────────────────────────────
          CINEMATIC BACKGROUND VIDEO
      ───────────────────────────────────────── */}
      <video
       className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/bus.shot.mp4" type="video/mp4" />
      </video>

      {/* Overall darkening layer */}
      <div className="absolute inset-0 bg-midnight/35" />

      {/* Stronger darkness on the left for readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/65 to-midnight/15" />

      {/* Darker bottom for the statistics area */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-transparent to-midnight/25" />

      {/* ─────────────────────────────────────────
          HERO CONTENT
      ───────────────────────────────────────── */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-20">

          <div className="max-w-4xl">

            {/* Eyebrow */}
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                  Trusted since 1999
                </p>
              </div>
            </Reveal>

            {/* Main Heading */}
            <Reveal delay={0.1}>
              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Reliable Transportation.
                <br />
                <span className="text-[#a9c5df]">
                  Built around your
                  <br />
                  needs.
                </span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.18}>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Corporate, institutional and group transportation services
                designed around the people and organizations we serve.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">

                <Link
                  href="#enquiry"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-midnight transition-all duration-300 hover:scale-[1.03] hover:bg-[#f6d76b]"
                >
                  Send an Enquiry

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/10"
                >
                  Explore Our Services
                </Link>

              </div>
            </Reveal>

          </div>

          {/* ─────────────────────────────────────
              EXPERIENCE STAT
          ───────────────────────────────────── */}
          <Reveal delay={0.34}>
            <div className="mt-16 flex items-center gap-5 border-t border-white/15 pt-6 sm:mt-20 sm:gap-6">

              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                25+
              </p>

              <div className="h-10 w-px bg-white/20" />

              <p className="max-w-xs text-sm leading-6 text-white/65">
                Years of experience
                <br />
                in serving organizations and companies.
              </p>

            </div>
          </Reveal>

        </div>
      </div>

    </section>
  );
}