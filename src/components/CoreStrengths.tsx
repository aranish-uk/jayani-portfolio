"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const STRENGTHS = [
  {
    title: "Data-Driven Decision Making",
    description:
      "Skilled in transforming raw data into actionable insights using SQL, Tableau, Power BI, and Excel to support strategic business decisions and optimize performance.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Supply Chain Optimization",
    description:
      "Experienced in procurement, logistics, and inventory management with a Lean Six Sigma Yellow Belt certification, driving operational efficiency across complex supply chains.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75M2.25 14.25h1.5m0 0v-2.625c0-.621.504-1.125 1.125-1.125H9M3.75 14.25V5.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v8.625M9 10.5h6.75M9 14.25h6.75" />
      </svg>
    ),
  },
  {
    title: "Strategic Operations",
    description:
      "Proven ability to support cross-functional operations and strategy initiatives at Fortune 500 companies including WM and American Airlines, bridging data and business outcomes.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Leadership & Collaboration",
    description:
      "Active leader in Delta Sigma Pi, DISC, and SCMA. Experienced as VP of Membership, Corporate Sponsorship Chair, and WPC 101 Facilitator — building teams and mentoring peers.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function CoreStrengths() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section className="relative bg-bg-primary py-28 bg-noise">
      <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,124,0.04),transparent_50%)]" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-accent/50" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-dim">
              What I Bring
            </p>
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Core Strengths
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STRENGTHS.map((s, i) => (
            <div
              key={s.title}
              className={`group rounded-xl border border-border-subtle bg-bg-surface/50 p-7 transition-all duration-500 hover:bg-bg-surface hover:border-border-medium ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${(i + 1) * 100}ms` : "0ms" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                {s.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold text-text-primary">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
