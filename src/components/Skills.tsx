"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

interface SkillGroup {
  category: string;
  items: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Supply Chain & Logistics",
    items: [
      "Supply Chain Management",
      "Supply Chain Optimization",
      "Logistics Management",
      "Procurement",
      "Inventory Management",
      "Purchasing",
      "Lean Six Sigma",
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      "SQL",
      "Tableau",
      "Power BI",
      "Microsoft Excel",
      "Data Analysis",
      "Data Analytics",
      "Airtable",
    ],
  },
  {
    category: "Business & Finance",
    items: [
      "Account Reconciliation",
      "Financial Accounting",
      "Cost Accounting",
      "Expense Tracking",
      "Financial Management",
      "Payment Processing",
    ],
  },
  {
    category: "Leadership & Communication",
    items: [
      "Leadership",
      "Public Speaking",
      "Strategic Communications",
      "Teamwork",
      "Customer Service",
      "Problem Solving",
    ],
  },
  {
    category: "Tools & Software",
    items: [
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Word",
      "PeopleSoft",
      "Airtable",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="skills" className="relative bg-bg-elevated py-28 bg-noise">
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
              Technical Proficiency
            </p>
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Skills &amp; Tools
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className={`rounded-xl border border-border-subtle bg-bg-surface/50 p-8 transition-all duration-500 hover:bg-bg-surface hover:border-border-medium ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${(i + 1) * 100}ms` : "0ms",
              }}
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block rounded-full border border-border-subtle bg-bg-card px-4 py-1.5 text-sm font-medium text-text-secondary transition-all hover:border-border-medium hover:text-text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
