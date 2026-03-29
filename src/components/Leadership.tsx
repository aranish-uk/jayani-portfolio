"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const LEADERSHIP = [
  {
    title: "Vice President of Membership",
    org: "Department of Information Systems Club (DISC)",
    period: "May 2025 – Present",
    description:
      "Leading membership growth and engagement initiatives for a dynamic organization focused on computer information systems and business data analytics. Managing recruitment, onboarding, and retention strategies to build a vibrant community of aspiring technology professionals.",
  },
  {
    title: "Active Brother & Corporate Sponsorship Chair",
    org: "Delta Sigma Pi — Gamma Omega Chapter",
    period: "Mar 2024 – Present",
    description:
      "Serving as an active brother in the premier professional business fraternity, previously holding roles as Corporate Sponsorship Chair, Professional Activities Committee Member, and Recruitment Committee Member. Fostering academic excellence, ethical conduct, and professional development.",
  },
  {
    title: "WPC 101 Facilitator",
    org: "W. P. Carey School of Business — Arizona State University",
    period: "Aug 2023 – Dec 2023",
    description:
      "Guided incoming first-year students by sharing ASU and W.P. Carey experiences, building communication skills, leadership abilities, and public speaking confidence while helping students navigate their academic journey.",
  },
  {
    title: "Mentor",
    org: "Supply Chain Management Association (SCMA) at ASU",
    period: "Sep 2023 – Present",
    description:
      "Serving as a mentor bridging academia and the professional realm, offering guidance and support to members seeking to understand and engage with real-world applications of supply chain management.",
  },
];

export default function Leadership() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="leadership" className="relative bg-bg-primary py-28 bg-noise">
      <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle" />

      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-accent/50" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-dim">
              Leadership
            </p>
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Leading with Discipline
            <br className="hidden sm:block" />
            <span className="text-text-muted"> and Purpose</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
            Actively engaged in organizations that bridge academics and industry, building
            teams, mentoring peers, and developing the next generation of business leaders.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {LEADERSHIP.map((item, i) => (
            <div
              key={item.title + item.org}
              className={`group rounded-xl border border-border-subtle bg-bg-surface/50 p-8 transition-all duration-500 hover:bg-bg-surface hover:border-border-medium ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${(i + 1) * 120}ms` : "0ms",
              }}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-accent-dim">
                    {item.org}
                  </p>
                </div>
                <span className="text-sm font-medium text-text-muted whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 text-sm leading-[1.8] text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
