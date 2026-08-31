import { useState } from "react";
import ClaudeLogo from "../components/ClaudeLogo";
import { ExternalLink } from "../components/Icons";
import { experiences } from "../data/content";

// Company logo linking to the official website, with an initials fallback.
function CompanyLogo({ company, logo, website }) {
  const [broken, setBroken] = useState(false);
  const initials = company
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
        alt={company}
        onError={() => setBroken(true)}
        className="h-full w-full object-cover"
      />
    ) : (
      <span className="font-serif text-lg font-bold text-clay-500">
        {initials}
      </span>
    );

  const base =
    "relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 shadow-soft";

  if (!website) {
    return <div className={base}>{content}</div>;
  }

  return (
    <a
      href={website}
      target="_blank"
      rel="noreferrer"
      aria-label={`${company} — official website`}
      className={`group ${base} transition hover:-translate-y-0.5 hover:shadow-lift`}
    >
      {content}
      <span className="absolute inset-0 flex items-center justify-center bg-clay-500/90 text-white opacity-0 transition group-hover:opacity-100">
        <ExternalLink className="h-5 w-5" />
      </span>
    </a>
  );
}

function TechChips({ technologies }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-clay-200 bg-clay-50 px-3 py-1 text-xs font-medium text-clay-700"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectBlock({ project }) {
  return (
    <div className="relative">
      {/* timeline dot centered on the line */}
      <span className="absolute -left-6 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-clay-500 ring-4 ring-cream-50" />
      <h4 className="font-semibold text-ink-900">{project.title}</h4>

      {project.description && (
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          {project.description}
        </p>
      )}

      {project.responsibilities?.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {project.responsibilities.map((r) => (
            <li key={r} className="flex gap-2 text-sm text-ink-700">
              <ClaudeLogo className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay-400" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      )}

      {project.links?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clay-600 transition hover:text-clay-700 hover:underline"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      )}

      {project.technologies?.length > 0 && (
        <TechChips technologies={project.technologies} />
      )}
    </div>
  );
}

function ExperienceCard({ exp }) {
  return (
    <article className="rounded-xl2 border border-cream-300 bg-white p-6 shadow-soft sm:p-8">
      <header className="flex items-start gap-4">
        <CompanyLogo
          company={exp.company}
          logo={exp.logo}
          website={exp.website}
        />
        <div className="min-w-0">
          <p className="eyebrow">{exp.period}</p>
          <h3 className="font-serif text-xl font-bold text-ink-900 sm:text-2xl">
            {exp.role}
          </h3>
          <p className="text-sm font-medium text-clay-600">
            {exp.website ? (
              <a
                href={exp.website}
                target="_blank"
                rel="noreferrer"
                className="transition hover:underline"
              >
                {exp.company}
              </a>
            ) : (
              exp.company
            )}
            {exp.location && (
              <span className="text-ink-500"> · {exp.location}</span>
            )}
            {exp.status && (
              <span className="text-ink-500"> · {exp.status}</span>
            )}
          </p>
        </div>
      </header>

      {exp.summary && (
        <p className="mt-4 text-sm leading-relaxed text-ink-600">
          {exp.summary}
        </p>
      )}

      <div className="mt-6 space-y-8 border-l border-cream-300 pl-6 sm:ml-6">
        {exp.projects.map((project) => (
          <ProjectBlock key={project.title} project={project} />
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <div className="animate-fade-up">
      <header className="mb-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <ClaudeLogo className="h-8 w-8 text-clay-500" />
          <h1 className="font-serif text-4xl font-bold text-ink-900 sm:text-5xl">
            Professional Experience
          </h1>
        </div>
        <p className="text-sm text-ink-500">
          Roles, projects, and the technologies I worked with.
        </p>
      </header>

      <div className="mx-auto max-w-4xl space-y-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company + exp.period} exp={exp} />
        ))}
      </div>
    </div>
  );
}
