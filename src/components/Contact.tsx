"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="contact" className="relative bg-bg-elevated py-28 bg-noise">
      <div className="absolute top-0 left-0 right-0 h-px bg-border-subtle" />

      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-accent/50" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-dim">
            Get in Touch
          </p>
          <div className="h-px w-8 bg-accent/50" />
        </div>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Let&rsquo;s Connect
        </h2>
        <p className="mt-5 text-base leading-relaxed text-text-secondary">
          I&rsquo;m always open to exploring new opportunities in supply chain, data analytics,
          and strategic operations. Feel free to reach out.
        </p>

        {/* Contact cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:jgunda@asu.edu"
            className="group flex flex-col items-center gap-4 rounded-xl border border-border-subtle bg-bg-surface/50 p-7 transition-all hover:bg-bg-surface hover:border-border-medium"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                Email
              </p>
              <p className="mt-1 text-sm font-medium text-text-primary">
                jgunda@asu.edu
              </p>
            </div>
          </a>

          {/* Resume */}
          <a
            href="/resume"
            className="group flex flex-col items-center gap-4 rounded-xl border border-border-subtle bg-bg-surface/50 p-7 transition-all hover:bg-bg-surface hover:border-border-medium"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                Resume
              </p>
              <p className="mt-1 text-sm font-medium text-text-primary">
                Download PDF
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center gap-4 rounded-xl border border-border-subtle bg-bg-surface/50 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                Location
              </p>
              <p className="mt-1 text-sm font-medium text-text-primary">
                Tempe, Arizona
              </p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jgunda@asu.edu"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-bg-primary transition-all hover:bg-accent-glow hover:scale-[1.02]"
          >
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/jayanigunda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-medium px-7 py-3.5 text-sm font-semibold text-text-primary transition-all hover:border-border-strong hover:bg-bg-surface"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
