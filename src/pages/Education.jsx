import { useState } from "react";
import ClaudeLogo from "../components/ClaudeLogo";
import { ExternalLink } from "../components/Icons";
import { education } from "../data/content";

// School logo that links to the official website. Falls back to the
// institution initials when the image is missing.
function SchoolLogo({ school, logo, website }) {
  const [broken, setBroken] = useState(false);
  const initials = school
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter((w) => /^[A-Za-zÀ-ÿ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <a
      href={website}
      target="_blank"
      rel="noreferrer"
      aria-label={`${school} — official website`}
      className="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      {logo && !broken ? (
        <img
          src={logo}
          alt={school}
          onError={() => setBroken(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="font-serif text-lg font-bold text-clay-500">
          {initials}
        </span>
      )}
      <span className="absolute inset-0 flex items-center justify-center bg-clay-500/90 text-white opacity-0 transition group-hover:opacity-100">
        <ExternalLink className="h-5 w-5" />
      </span>
    </a>
  );
}

function ProgramBlock({ program }) {
  return (
    <div className="relative">
      {/* timeline dot centered on the line */}
      <span className="absolute -left-6 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-clay-500 ring-4 ring-cream-50" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h4 className="font-semibold text-ink-900">{program.title}</h4>
        <span className="text-xs font-medium uppercase tracking-wide text-clay-600">
          {program.period}
        </span>
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {program.courses.map((course) => (
          <li
            key={course}
            className="rounded-full border border-cream-300 bg-cream-50 px-3 py-1 text-xs text-ink-700"
          >
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InstitutionCard({ item }) {
  return (
    <article className="rounded-xl2 border border-cream-300 bg-white p-6 shadow-soft sm:p-8">
      <header className="flex items-start gap-4">
        <SchoolLogo
          school={item.school}
          logo={item.logo}
          website={item.website}
        />
        <div className="min-w-0">
          <p className="eyebrow">{item.period}</p>
          <a
            href={item.website}
            target="_blank"
            rel="noreferrer"
            className="font-serif text-xl font-bold text-ink-900 transition hover:text-clay-600 sm:text-2xl"
          >
            {item.school}
          </a>
          {item.location && (
            <p className="text-sm text-ink-500">{item.location}</p>
          )}
        </div>
      </header>

      <div className="mt-6 space-y-8 border-l border-cream-300 pl-6 sm:ml-6">
        {item.programs.map((program) => (
          <ProgramBlock key={program.title} program={program} />
        ))}
      </div>
    </article>
  );
}

export default function Education() {
  return (
    <div className="animate-fade-up">
      <header className="mb-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <ClaudeLogo className="h-8 w-8 text-clay-500" />
          <h1 className="font-serif text-4xl font-bold text-ink-900 sm:text-5xl">
            Education
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-4xl space-y-6">
        {education.map((item) => (
          <InstitutionCard key={item.school} item={item} />
        ))}
      </div>
    </div>
  );
}
