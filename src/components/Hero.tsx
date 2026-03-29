import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-bg-primary overflow-hidden bg-noise"
    >
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,124,0.06),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_380px]">
          {/* Text block */}
          <div className="animate-fade-up">
            {/* Tagline */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-accent/50" />
              <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-accent-dim">
                Supply Chain &middot; Data Analytics &middot; Strategy
              </p>
            </div>

            {/* Name */}
            <h1 className="font-display text-6xl font-bold tracking-tight text-text-primary sm:text-7xl lg:text-8xl leading-[0.95]">
              Jayani
              <br />
              <span className="text-text-muted">Gunda</span>
            </h1>

            {/* Brand statement */}
            <p className="mt-8 max-w-md text-[17px] leading-[1.7] text-text-secondary">
              Senior at Arizona State University pursuing dual degrees in Business Data Analytics and Supply Chain Management, leveraging data to drive strategic decisions.
            </p>

            {/* Stats */}
            <div className="mt-12 flex items-center gap-12">
              <Stat value="4.00" label="GPA" />
              <div className="h-10 w-px bg-border-subtle" />
              <Stat value="B.S. + B.S." label="Dual Majors" />
              <div className="h-10 w-px bg-border-subtle hidden sm:block" />
              <div className="hidden sm:block">
                <Stat value="3+" label="Internships" />
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/resume"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-medium text-bg-primary transition-all hover:bg-accent-glow hover:scale-[1.02]"
              >
                Download Resume
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/jayanigunda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-border-medium px-8 py-4 text-sm font-medium text-text-primary transition-all hover:border-border-strong hover:bg-bg-surface"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="hidden lg:block animate-fade-up delay-200">
            <div className="relative h-[480px] w-[380px] overflow-hidden rounded-2xl bg-bg-surface ring-1 ring-border-subtle">
              <Image
                src="/headshot.jpg"
                alt="Jayani Gunda — Professional headshot"
                fill
                sizes="380px"
                className="object-cover"
                priority
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-faint">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-text-faint to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-text-primary">{value}</p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
        {label}
      </p>
    </div>
  );
}
