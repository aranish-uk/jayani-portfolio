"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="about" className="relative bg-bg-elevated py-28 bg-noise">
      <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle" />

      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Label>About</Label>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl leading-[1.1]">
          Where Data Meets
          <br />
          <span className="text-text-muted">Supply Chain Strategy</span>
        </h2>

        <div className="mt-10 space-y-6 text-[16px] leading-[1.85] text-text-secondary">
          <p>
            My passion lies in exploring the world of data analytics and how it can
            transform supply chain processes for organizations. With hands-on experience
            in Excel, Tableau, SQL, and Power BI, I have honed my technical expertise and
            problem-solving abilities to create meaningful solutions and decode data for
            insightful decision making.
          </p>
          <p>
            As a W.P. Carey student at Arizona State University, I am actively engaged in
            organizations such as Delta Sigma Pi, the Supply Chain Management Association,
            the Department of Information Systems Club, and served as a WPC 101 Facilitator.
            These experiences have equipped me with leadership skills, professional expertise,
            and a collaborative mindset that I bring to every role.
          </p>
          <p>
            From strategy and operations at WM to procurement at American Airlines, I have
            gained real-world experience in driving efficiency, managing cross-functional
            projects, and delivering measurable results across diverse industries.
          </p>
        </div>

        {/* Education callout */}
        <div className="mt-14 rounded-xl border border-border-medium bg-bg-surface p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary">
                W. P. Carey School of Business
              </h3>
              <p className="mt-0.5 text-sm text-text-secondary">
                Arizona State University
              </p>
            </div>
            <div className="text-sm font-medium text-text-muted sm:text-right">
              Expected August 2026
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <Badge>B.S. in Business Data Analytics</Badge>
            <Badge>B.S. in Supply Chain Management</Badge>
            <Badge highlight>4.00 GPA</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 bg-accent/50" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-dim">
        {children}
      </p>
    </div>
  );
}

function Badge({
  children,
  highlight,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <span
      className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
        highlight
          ? "border border-accent/30 bg-accent/10 text-accent"
          : "border border-border-medium bg-bg-card text-text-secondary"
      }`}
    >
      {children}
    </span>
  );
}
