import { useState } from "react";
import ClaudeLogo from "../components/ClaudeLogo";
import { ExternalLink } from "../components/Icons";
import { community } from "../data/content";

function CommunityLogo({ org, logo, accent, website }) {
  const [broken, setBroken] = useState(false);

  const content =
    logo && !broken ? (
      <img
        src={logo}
        alt={org}
        onError={() => setBroken(true)}
        className="h-full w-full object-cover"
      />
    ) : (
      <ClaudeLogo className="h-7 w-7 text-white" />
    );

  const base =
    "relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-soft";
  const frameStyle =
    logo && !broken
      ? { borderWidth: 1, borderColor: "#eeece3", backgroundColor: "#faf9f5" }
      : { backgroundColor: accent };

  if (!website) {
    return (
      <span className={base} style={frameStyle}>
        {content}
      </span>
    );
  }

  return (
    <a
      href={website}
      target="_blank"
      rel="noreferrer"
      aria-label={`${org} — official website`}
      className={`group ${base} transition hover:-translate-y-0.5 hover:shadow-lift`}
      style={frameStyle}
    >
      {content}
      <span className="absolute inset-0 flex items-center justify-center bg-clay-500/90 text-white opacity-0 transition group-hover:opacity-100">
        <ExternalLink className="h-5 w-5" />
      </span>
    </a>
  );
}

function CommunityCard({ item }) {
  return (
    <article className="rounded-xl2 border border-cream-300 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row">
        {/* Accent icon / logo */}
        <CommunityLogo
          org={item.org}
          logo={item.logo}
          accent={item.accent}
          website={item.website}
        />

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="eyebrow" style={{ color: item.accent }}>
              {item.org}
            </p>
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                color: item.accent,
                backgroundColor: `${item.accent}14`,
              }}
            >
              {item.status}
            </span>
          </div>
          <h3 className="mt-1 font-serif text-xl font-bold text-ink-900 sm:text-2xl">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            {item.description}
          </p>

          {item.tags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-clay-200 bg-clay-50 px-3 py-1 text-xs font-medium text-clay-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {item.resources?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {item.resources.map((res) => (
                <a
                  key={res.label + res.url}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-cream-300 bg-cream-50 px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:border-clay-400 hover:text-clay-700"
                >
                  <ClaudeLogo className="h-4 w-4 text-clay-400" />
                  {res.label}
                  <ExternalLink className="h-4 w-4 shrink-0" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Community() {
  return (
    <div className="animate-fade-up">
      <header className="mb-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <ClaudeLogo className="h-8 w-8 text-clay-500" />
          <h1 className="font-serif text-4xl font-bold text-ink-900 sm:text-5xl">
            Community/Contributions
          </h1>
        </div>
        <p className="text-sm text-ink-500">
          Professional communities, learning programs, and technical
          contributions.
        </p>
      </header>

      <div className="mx-auto max-w-4xl space-y-6">
        {community.map((item) => (
          <CommunityCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
