import {
  ArrowRight,
  BusFront,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";

const highlights = [
  {
    icon: BusFront,
    title: "Built for every journey",
    description:
      "From regular transportation to tours, events and group travel, our services adapt to different travel requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable by experience",
    description:
      "With decades of experience, we focus on dependable service, careful coordination and timely transportation.",
  },
  {
    icon: UsersRound,
    title: "People-first service",
    description:
      "Our approach is built around understanding the needs of organisations, institutions, groups and individuals.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-blend-light relative overflow-hidden bg-cream py-28 sm:py-36"
    >
      {/* ─────────────────────────────────────────
          HERO → ABOUT ATMOSPHERIC TRANSITION
      ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-blue/20 via-pink/25 to-gold/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-10 h-56 w-56 rounded-full bg-pink/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-blue/15 blur-3xl"
      />

      {/* ─────────────────────────────────────────
          CONTENT
      ───────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Intro */}
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Label */}
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-deep">
                  About Sun Sai
                </p>
              </div>

              <p className="mt-7 max-w-sm text-sm leading-7 text-midnight/50">
                Established in 1999, Sun Sai has grown through years of
                experience in transportation and travel services.
              </p>
            </div>
          </Reveal>

          {/* Main Statement */}
          <Reveal delay={0.1}>
            <div>
              <h2 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-midnight sm:text-5xl lg:text-6xl">
                Moving people.
                <br />
                <span className="text-blue-deep">
                  Supporting journeys.
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-midnight/60 sm:text-lg">
                Sun Sai provides transportation solutions for organisations,
                institutions, companies, groups and individuals — from
                everyday travel requirements to weddings, pilgrimages,
                tourism and special events.
              </p>

              <Link
                href="#services"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-midnight transition-colors hover:text-blue-deep"
              >
                Explore our services

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ─────────────────────────────────────────
            HIGHLIGHT CARDS
        ───────────────────────────────────────── */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={0.12 + index * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-midnight/10 bg-white/75 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-midnight/15 hover:shadow-xl sm:p-8">

                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-pink/0 blur-3xl transition-all duration-700 group-hover:bg-pink/20"
                  />

                  <div className="relative z-10">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-midnight text-gold transition-transform duration-500 group-hover:scale-105">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-midnight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-midnight/55">
                      {item.description}
                    </p>

                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────
            EXPERIENCE STRIP
        ───────────────────────────────────────── */}
        <Reveal delay={0.2}>
          <div className="relative mt-16 overflow-hidden rounded-3xl bg-midnight px-7 py-9 sm:px-10 sm:py-10">

            {/* Ambient colours */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-pink/15 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue/15 blur-3xl"
            />

            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Since 1999
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Experience that keeps every journey moving.
                </h3>
              </div>

              <div className="flex shrink-0 items-baseline gap-3">
                <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                  25+
                </span>

                <span className="text-sm text-white/50">
                  years of experience
                </span>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}