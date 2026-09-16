import { useState } from "react";
import { Link } from "react-router-dom";
import ClaudeLogo from "../components/ClaudeLogo";
import { LinkedIn, Credly, ArrowRight, ExternalLink } from "../components/Icons";
import { profile, about, experiences, education } from "../data/content";

function Avatar() {
  const [failed, setFailed] = useState(false);
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;
  return (
    <div className="mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full ring-4 ring-cream-200">
      {!failed ? (
        <img
          src={profile.photo}
          alt={profile.name}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-bottom"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-clay-400 to-clay-600 font-serif text-4xl font-bold text-white">
          {initials}
        </div>
      )}
    </div>
  );
}

function SectionHeader({ children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <ClaudeLogo className="h-5 w-5 text-clay-500" />
      <h2 className="eyebrow text-sm">{children}</h2>
    </div>
  );
}

// Small timeline logo for companies/schools. Falls back to initials and
// links to the official website when available.
function TimelineLogo({ name, logo, website }) {
  const [broken, setBroken] = useState(false);
  const initials = name
    .replace(/\(.*?\)/g, "")
    .split(/[\s—-]+/)
    .filter((w) => /^[A-Za-zÀ-ÿ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const content =
    logo && !broken ? (
      <img
        src={logo}
        alt={name}
        onError={() => setBroken(true)}
        className="h-full w-full object-cover"
      />
    ) : (
      <span className="font-serif text-xs font-bold text-clay-500">
        {initials}
      </span>
    );

  const base =
    "absolute -left-[54px] top-0 flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-cream-300 bg-cream-50 shadow-soft";

  if (!website) {
    return <span className={base}>{content}</span>;
  }

  return (
    <a
      href={website}
      target="_blank"
      rel="noreferrer"
      aria-label={`${name} — official website`}
      className={`group ${base} transition hover:-translate-y-0.5 hover:shadow-lift`}
    >
      {content}
      <span className="absolute inset-0 flex items-center justify-center bg-clay-500/90 text-white opacity-0 transition group-hover:opacity-100">
        <ExternalLink className="h-4 w-4" />
      </span>
    </a>
  );
}

export default function About() {
  return (
    <div className="animate-fade-up grid grid-cols-1 gap-8 lg:grid-cols-[320px,1fr]">
      {/* Profile card */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl2 border border-cream-300 bg-white p-8 text-center shadow-soft">
          <Avatar />
          <h1 className="mt-5 font-serif text-2xl font-bold text-ink-900">
            {profile.name}
          </h1>
          <p className="text-sm text-ink-500">{profile.handle}</p>

          <div className="mt-5 flex justify-center gap-3">
            <a
              href={profile.socials.credly}
              target="_blank"
              rel="noreferrer"
              className="icon-badge h-10 w-10 hover:text-clay-600"
              aria-label="Credly"
            >
              <Credly className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="icon-badge h-10 w-10 hover:text-clay-600"
              aria-label="LinkedIn"
            >
              <LinkedIn className="h-5 w-5" />
            </a>
          </div>

          <Link
            to="/contact"
            className="btn-primary mt-6 w-full justify-center"
          >
            Contact me
          </Link>
        </div>
      </aside>

      {/* Content */}
      <div className="space-y-12">
        <section className="rounded-xl2 border border-cream-300 bg-white p-8 shadow-soft">
          <SectionHeader>About me</SectionHeader>
          <div className="space-y-4 text-[0.95rem] leading-relaxed text-ink-700">
            {about.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader>Professional experiences</SectionHeader>
          <div className="relative space-y-6 border-l border-cream-300 pl-8">
            {experiences.map((exp) => (
              <article key={exp.company + exp.period} className="relative">
                <TimelineLogo
                  name={exp.company}
                  logo={exp.logo}
                  website={exp.website}
                />
                <div className="rounded-xl2 border border-cream-300 bg-white p-6 shadow-soft">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-clay-600">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-medium text-ink-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-ink-900">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {exp.summary ?? exp.projects[0]?.description}
                  </p>
                  <Link
                    to="/experience"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-clay-600 transition hover:underline"
                  >
                    View details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader>Education</SectionHeader>
          <div className="relative space-y-6 border-l border-cream-300 pl-8">
            {education.map((ed) => (
              <article key={ed.school} className="relative">
                <TimelineLogo
                  name={ed.school}
                  logo={ed.logo}
                  website={ed.website}
                />
                <div className="rounded-xl2 border border-cream-300 bg-white p-6 shadow-soft">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-clay-600">
                      {ed.school}
                    </h3>
                    <span className="text-xs font-medium text-ink-500">
                      {ed.period}
                    </span>
                  </div>
                  {ed.location && (
                    <p className="text-sm font-medium text-ink-900">
                      {ed.location}
                    </p>
                  )}
                  <ul className="mt-3 space-y-1.5">
                    {ed.programs.map((p) => (
                      <li
                        key={p.title}
                        className="flex gap-2 text-sm leading-relaxed text-ink-700"
                      >
                        <ClaudeLogo className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay-400" />
                        <span>{p.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/education"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-clay-600 transition hover:underline"
                  >
                    View details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
