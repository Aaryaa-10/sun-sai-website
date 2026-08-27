import { ArrowUpRight, Users } from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const vehicles = [
  {
    number: "01",
    name: "Tempo Traveller",
    description: "Comfortable travel for smaller groups.",
    image: "/images/tempo.png",
  },
  {
    number: "02",
    name: "25-Seater Coach",
    description: "A practical choice for medium-sized groups.",
    image: "/images/25.png",
  },
  {
    number: "03",
    name: "35-Seater Coach",
    description: "Comfortable transportation for group journeys.",
    image: "/images/35.png",
  },
  {
    number: "04",
    name: "45-Seater Coach",
    description: "Spacious transportation for larger groups.",
    image: "/images/45.png",
  },
  {
    number: "05",
    name: "50-Seater Coach",
    description: "Built for larger group transportation.",
    image: "/images/50.png",
  },
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-cream py-28 sm:py-36"
    >
      {/* ─────────────────────────────────────────
          SERVICES → FLEET TRANSITION
      ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-blue/15 via-pink/25 to-gold/10 blur-3xl"
      />

      {/* Ambient pink glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-pink/15 blur-[120px]"
      />

      {/* Ambient blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-blue/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ─────────────────────────────────────────
            SECTION HEADING
        ───────────────────────────────────────── */}
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-deep">
                  Our Fleet
                </p>
              </div>

              <h2 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-midnight sm:text-5xl lg:text-6xl">
                The right vehicle for every group.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-7 text-midnight/60 sm:text-right">
              A range of vehicles suited to different group sizes and
              transportation requirements.
            </p>
          </Reveal>
        </div>

        {/* ─────────────────────────────────────────
            FLEET GRID
        ───────────────────────────────────────── */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {vehicles.map((vehicle, index) => (
            <Reveal
              key={vehicle.number}
              delay={0.08 * index}
              y={28}
              className={
                index === 4
                  ? "sm:col-span-2 lg:col-span-2"
                  : "sm:col-span-1 lg:col-span-2"
              }
            >
              <article className="group relative h-full overflow-hidden rounded-3xl border border-midnight/10 bg-white/85 shadow-sm backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:border-midnight/15 hover:shadow-[0_24px_70px_rgba(16,27,45,0.16)]">

                {/* Card ambient glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 z-20 h-44 w-44 rounded-full bg-pink/0 blur-3xl transition-all duration-700 group-hover:bg-pink/20"
                />

                {/* ─────────────────────────────
                    VEHICLE IMAGE
                ───────────────────────────── */}
                <div className="relative aspect-[16/10] overflow-hidden">

                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} representative vehicle`}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.07]"
                  />

                  {/* Cinematic image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/65 via-midnight/5 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

                  {/* Soft pink highlight */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-pink/0 via-transparent to-pink/0 transition-all duration-700 group-hover:from-pink/10 group-hover:to-blue/10"
                  />

                  {/* Number */}
                  <span className="absolute left-5 top-5 z-10 text-xs font-semibold tracking-[0.2em] text-white/80">
                    {vehicle.number}
                  </span>

                  {/* Vehicle icon */}
                  <div className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-midnight/20 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold group-hover:text-midnight">
                    <Users size={16} />
                  </div>

                  {/* Bottom image label */}
                  <div className="absolute bottom-5 left-5 z-10">
                    <span className="rounded-full border border-white/20 bg-midnight/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                      Sun Sai Fleet
                    </span>
                  </div>
                </div>

                {/* ─────────────────────────────
                    CARD CONTENT
                ───────────────────────────── */}
                <div className="relative z-10 flex items-end justify-between gap-4 p-6 sm:p-7">

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-midnight transition-transform duration-500 group-hover:translate-x-1">
                      {vehicle.name}
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-midnight/55 transition-colors duration-500 group-hover:text-midnight/70">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-midnight/10 text-midnight/45 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-midnight">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ─────────────────────────────────────────
            ENQUIRY PROMPT
        ───────────────────────────────────────── */}
        <Reveal delay={0.18}>
          <div className="relative mt-10 overflow-hidden rounded-3xl bg-midnight px-7 py-8 sm:px-9 sm:py-9">

            {/* Ambient pink */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-pink/15 blur-[90px]"
            />

            {/* Ambient blue */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-blue/10 blur-[90px]"
            />

            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-lg font-semibold text-white">
                  Not sure which vehicle you need?
                </p>

                <p className="mt-1 text-sm text-white/50">
                  Tell us about your group and we&apos;ll help you choose.
                </p>
              </div>

              <a
                href="#enquiry"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-midnight transition-all duration-300 hover:scale-[1.03] hover:bg-[#f6d76b]"
              >
                Send an Enquiry

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

            </div>
          </div>
        </Reveal>

        {/* ─────────────────────────────────────────
            SECTION ACCENT
        ───────────────────────────────────────── */}
        <Reveal delay={0.25}>
          <div className="mt-16 flex items-center gap-4">

            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-midnight/10 to-transparent" />

            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_18px_rgba(244,215,106,0.4)]" />

            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-midnight/10 to-transparent" />

          </div>
        </Reveal>

      </div>
    </section>
  );
}