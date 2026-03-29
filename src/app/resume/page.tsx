import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Jayani Gunda",
  description: "Resume of Jayani Gunda — Supply Chain, Data Analytics & Strategy",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle">
        <a
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-text-primary transition-colors hover:text-accent"
        >
          JG<span className="text-accent">.</span>
        </a>
        <a
          href="/jayanigunda.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-bg-primary transition-all hover:bg-accent-glow"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
          </svg>
          Download
        </a>
      </div>

      {/* PDF embed */}
      <div className="flex-1">
        <iframe
          src="/jayanigunda.pdf"
          className="h-full w-full min-h-[calc(100vh-65px)]"
          title="Jayani Gunda Resume"
        />
      </div>
    </div>
  );
}
