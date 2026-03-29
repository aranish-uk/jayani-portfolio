"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const CERTIFICATIONS = [
  { name: "Lean Six Sigma Yellow Belt" },
  { name: "Supply Chain Foundations" },
  { name: "Learning Data Analytics: 1 Foundations" },
  { name: "SQL Essential Training" },
  { name: "Learning Airtable" },
];

const AWARDS = [
  { name: "Dean's List — Fall 2023", issuer: "Arizona State University" },
  { name: "Dean's List — Spring 2023", issuer: "Arizona State University" },
  { name: "Dean's List — Fall 2022", issuer: "Arizona State University" },
  { name: "New American University Scholar", issuer: "Arizona State University" },
];

const VOLUNTEER = [
  "Student Volunteer — Lost Our Home Pet Rescue",
  "Mentor — SCMA & DISC at Arizona State University",
  "Treasurer — KoDE at Arizona State University",
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="achievements" className="relative bg-bg-primary py-28 bg-noise">
      <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,124,0.03),transparent_60%)]" />

      <div ref={ref} className="relative mx-auto max-w-5xl px-6">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-accent/50" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-dim">
              Recognition
            </p>
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Certifications &amp; Achievements
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Certifications */}
          <div
            className={`rounded-xl border border-border-subtle bg-bg-surface/50 p-8 transition-all duration-500 hover:bg-bg-surface hover:border-border-medium ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: visible ? "100ms" : "0ms" }}
          >
            <h3 className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-dim">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              Certifications
            </h3>
            <ul className="mt-6 space-y-4">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div
            className={`rounded-xl border border-border-subtle bg-bg-surface/50 p-8 transition-all duration-500 hover:bg-bg-surface hover:border-border-medium ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: visible ? "200ms" : "0ms" }}
          >
            <h3 className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-dim">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.704 6.023 6.023 0 01-2.77-.704" />
              </svg>
              Academic Awards
            </h3>
            <ul className="mt-6 space-y-4">
              {AWARDS.map((a) => (
                <li key={a.name} className="text-sm">
                  <span className="font-medium text-text-primary">{a.name}</span>
                  <br />
                  <span className="text-[12px] text-text-faint">{a.issuer}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Volunteer & Service */}
          <div
            className={`rounded-xl border border-border-subtle bg-bg-surface/50 p-8 transition-all duration-500 hover:bg-bg-surface hover:border-border-medium ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: visible ? "300ms" : "0ms" }}
          >
            <h3 className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-dim">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Community &amp; Service
            </h3>
            <ul className="mt-6 space-y-4">
              {VOLUNTEER.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
