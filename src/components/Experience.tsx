"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "../hooks/useInView";

interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  logo?: string;
  bullets: string[];
}

const ROLES: Role[] = [
  {
    company: "WM",
    title: "Strategy and Operations Intern",
    period: "Jan 2026 – Present",
    location: "Tempe, Arizona",
    logo: "/companies/wm.png",
    bullets: [
      "Supporting strategic initiatives and operational improvements within the strategy and operations division",
      "Analyzing business data to identify optimization opportunities and drive process efficiency across departments",
      "Collaborating with cross-functional teams to develop and implement data-driven strategic recommendations",
    ],
  },
  {
    company: "American Airlines",
    title: "Procurement Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Dallas-Fort Worth, Texas",
    logo: "/companies/aa.png",
    bullets: [
      "Assisted with procurement operations and vendor management processes for one of the world's largest airlines",
      "Supported sourcing and purchasing activities to optimize supply chain efficiency and cost reduction",
      "Gained hands-on experience in enterprise procurement within a Fortune 500 aviation company",
    ],
  },
  {
    company: "Arizona State University",
    title: "Business Office Assistant — Global Outreach & Extended Education",
    period: "Feb 2023 – Jan 2026",
    location: "Tempe, Arizona",
    logo: "/companies/asu.png",
    bullets: [
      "Managed account reconciliations, payment processing, purchasing, and expense tracking for the division",
      "Processed travel requests, expense reports, and purchase requisitions ensuring accuracy and compliance",
      "Maintained financial records and supported data analytics initiatives for budgeting and inventory control",
    ],
  },
  {
    company: "Arizona State University",
    title: "Administrative Assistant",
    period: "Jan 2023 – Feb 2023",
    location: "Tempe, Arizona",
    logo: "/companies/asu.png",
    bullets: [
      "Performed administrative and clerical duties including greeting visitors, scheduling appointments, and data entry",
      "Supported Office of Student Services admission and advising functions including file management and reporting",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="experience" className="relative bg-bg-elevated py-28 bg-noise">
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
              Professional Experience
            </p>
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Where I&rsquo;ve Made an Impact
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/30 via-border-subtle to-border-subtle hidden sm:block" />
          <div className="space-y-0">
            {ROLES.map((role, i) => (
              <TimelineCard key={`${role.company}-${role.title}`} role={role} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  role,
  index,
  visible,
}: {
  role: Role;
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className={`relative flex gap-8 pb-10 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: visible ? `${(index + 1) * 100}ms` : "0ms" }}
    >
      {/* Timeline dot */}
      <div className="relative z-10 hidden sm:flex shrink-0 mt-2">
        <div className="h-[10px] w-[10px] rounded-full border-2 border-accent bg-bg-elevated ring-4 ring-bg-elevated" />
      </div>

      {/* Card */}
      <div className="flex-1 group rounded-xl border border-border-subtle bg-bg-surface/50 p-7 transition-all duration-300 hover:bg-bg-surface hover:border-border-medium">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            {role.logo && (
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-border-subtle bg-bg-card">
                <Image
                  src={role.logo}
                  alt={`${role.company} logo`}
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-text-primary">{role.title}</h3>
              <p className="text-sm font-medium text-accent-dim">{role.company}</p>
            </div>
          </div>
          <div className="flex flex-col text-sm text-text-muted sm:text-right shrink-0">
            <span className="font-medium">{role.period}</span>
            {role.location && <span className="text-text-faint">{role.location}</span>}
          </div>
        </div>
        <ul className="mt-4 space-y-2.5">
          {role.bullets.map((b) => (
            <li key={b.slice(0, 40)} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/40" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
