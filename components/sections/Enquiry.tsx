"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

import Reveal from "@/components/ui/Reveal";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Store the form reference before the async request.
    const form = event.currentTarget;

    setIsSubmitting(true);
    setError("");

    const formData = new FormData(form);

    const enquiry = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      organisation: formData.get("organisation"),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send enquiry.");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Enquiry submission error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-midnight py-28 sm:py-36"
    >
      {/* ─────────────────────────────────────────
          FLEET → ENQUIRY TRANSITION
      ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-blue/15 via-pink/25 to-midnight blur-3xl"
      />

      {/* Pink ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-pink/10 blur-[120px]"
      />

      {/* Blue ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[30rem] w-[30rem] rounded-full bg-blue/10 blur-[120px]"
      />

      {/* Gold ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/5 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* ─────────────────────────────────────
              LEFT CONTENT
          ───────────────────────────────────── */}
          <Reveal>
            <div className="lg:sticky lg:top-28">

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                  Enquiry
                </p>
              </div>

              <h2 className="mt-7 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Tell us what you need.
              </h2>

              <p className="mt-7 max-w-md text-base leading-8 text-white/60 sm:text-lg">
                Looking for transportation for your company, institution,
                event or group? Send us your details and our team will get
                back to you.
              </p>

              {/* Benefits */}
              <div className="mt-10 space-y-4">
                {[
                  "Quick and simple enquiry",
                  "Suitable for organisations and groups",
                  "Our team will discuss your requirements",
                ].map((item, index) => (
                  <Reveal
                    key={item}
                    delay={0.1 + index * 0.08}
                    y={12}
                  >
                    <div className="group flex items-center gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 transition-all duration-500 group-hover:border-gold/50 group-hover:bg-gold/10">
                        <CheckCircle2
                          size={15}
                          className="text-gold transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <span className="text-sm text-white/65 transition-colors duration-500 group-hover:text-white/85">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Small trust accent */}
              <div className="mt-12 flex items-center gap-4">
                <span className="text-3xl font-semibold tracking-tight text-white">
                  25+
                </span>

                <div className="h-8 w-px bg-white/15" />

                <p className="text-xs uppercase leading-5 tracking-[0.15em] text-white/35">
                  Years of
                  <br />
                  experience
                </p>
              </div>

            </div>
          </Reveal>

          {/* ─────────────────────────────────────
              FORM / SUCCESS STATE
          ───────────────────────────────────── */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-10 lg:p-12">

              {/* Card glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-pink/10 blur-[100px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue/10 blur-[100px]"
              />

              <div className="relative z-10">

                {submitted ? (
                  /* ─────────────────────────────
                     SUCCESS STATE
                  ───────────────────────────── */
                  <div className="flex min-h-[440px] flex-col items-center justify-center text-center">

                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl" />

                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold text-midnight shadow-[0_0_40px_rgba(244,215,106,0.2)]">
                        <CheckCircle2 size={30} />
                      </div>
                    </div>

                    <h3 className="mt-7 text-3xl font-semibold text-white">
                      Enquiry received.
                    </h3>

                    <p className="mt-4 max-w-md leading-7 text-white/55">
                      Thank you for contacting Sun Sai. Our team will get back
                      to you shortly.
                    </p>

                    <div className="mt-8 h-px w-16 bg-gold/50" />
                  </div>
                ) : (
                  /* ─────────────────────────────
                     ENQUIRY FORM
                  ───────────────────────────── */
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-7"
                  >

                    {/* Name */}
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-white/80"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-gold/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(244,215,106,0.05)]"
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid gap-7 sm:grid-cols-2">

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-white/80"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-gold/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(244,215,106,0.05)]"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-white/80"
                        >
                          Phone
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-gold/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(244,215,106,0.05)]"
                        />
                      </div>

                    </div>

                    {/* Organisation */}
                    <div>
                      <label
                        htmlFor="organisation"
                        className="mb-2 block text-sm font-medium text-white/80"
                      >
                        Organisation / Company{" "}
                        <span className="text-white/35">
                          (optional)
                        </span>
                      </label>

                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        autoComplete="organization"
                        placeholder="Company, school, college or organisation"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-gold/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(244,215,106,0.05)]"
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <p className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gold px-6 py-4 text-sm font-semibold text-midnight shadow-[0_10px_30px_rgba(244,215,106,0.08)] transition-all duration-500 hover:scale-[1.01] hover:bg-[#f6d76b] hover:shadow-[0_14px_40px_rgba(244,215,106,0.16)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-midnight/25 border-t-midnight" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Enquiry

                            <ArrowRight
                              size={18}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-center text-xs leading-5 text-white/30">
                      By submitting this form, you agree to be contacted
                      regarding your enquiry.
                    </p>

                  </form>
                )}

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}