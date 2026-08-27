import {
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Map,
  Trophy,
  Users,
  ArrowUpRight,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const services = [
  {
    number: "01",
    title: "Corporate Transportation",
    description:
      "Dependable transportation solutions designed around the needs of companies and their teams.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Institutional & Education",
    description:
      "Transportation support for schools, colleges, institutes and other educational organizations.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Weddings & Special Events",
    description:
      "Comfortable group transportation for weddings, celebrations and important occasions.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Group Travel & Outings",
    description:
      "Organized transportation for group picnics, outings and journeys with larger groups.",
    icon: Users,
  },
  {
    number: "05",
    title: "Tours & Pilgrimage",
    description:
      "Transportation for tours and pilgrimage journeys, planned around the requirements of each group.",
    icon: Map,
  },
  {
    number: "06",
    title: "Sports & Events",
    description:
      "Reliable group transportation for sporting events, teams and organized gatherings.",
    icon: Trophy,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-midnight py-28 sm:py-36"
    >
      {/* ─────────────────────────────────────────
          ABOUT → SERVICES TRANSITION
      ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-pink/15 via-blue/20 to-gold/10 blur-3xl"
      />

      {/* Ambient pink glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-pink/10 blur-[110px]"
      />

      {/* Ambient blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[28rem] w-[28rem] rounded-full bg-blue/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ─────────────────────────────────────────
            HEADING
        ───────────────────────────────────────── */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                  Our Services
                </p>
              </div>

              <h2 className="mt-7 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Transportation for every kind of journey.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              From everyday corporate transportation to special events and
              group journeys, our services are built around the people and
              organizations we serve.
            </p>
          </Reveal>

        </div>

        {/* ─────────────────────────────────────────
            SERVICES GRID
        ───────────────────────────────────────── */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.number}
                delay={0.08 * index}
                y={24}
                className="h-full"
              >
                <article className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:border-gold/25 hover:bg-white/[0.065] hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:p-8">

                  {/* ─────────────────────────────
                      CARD AMBIENT GLOW
                  ───────────────────────────── */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink/0 blur-3xl transition-all duration-700 group-hover:bg-pink/15"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-blue/0 blur-3xl transition-all duration-700 group-hover:bg-blue/10"
                  />

                  {/* Top */}
                  <div className="relative z-10 flex items-start justify-between">

                    <span className="text-xs font-semibold tracking-[0.2em] text-white/30 transition-colors duration-500 group-hover:text-gold/70">
                      {service.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-blue transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold group-hover:text-midnight">
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        className="transition-transform duration-500 group-hover:rotate-3"
                      />
                    </div>

                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-12">

                    <h3 className="max-w-xs text-2xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/50 transition-colors duration-500 group-hover:text-white/65">
                      {service.description}
                    </p>

                  </div>

                  {/* Bottom */}
                  <div className="relative z-10 mt-8 flex items-center justify-between">

                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/25 transition-colors duration-500 group-hover:text-white/45">
                      Sun Sai
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-gold/40 group-hover:bg-gold/10">
                      <ArrowUpRight
                        size={18}
                        className="text-white/30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                      />
                    </div>

                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────
            BOTTOM ACCENT
        ───────────────────────────────────────── */}
        <Reveal delay={0.25}>
          <div className="mt-16 flex items-center gap-4">

            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_18px_rgba(244,215,106,0.45)]" />

            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          </div>
        </Reveal>

      </div>
    </section>
  );
}