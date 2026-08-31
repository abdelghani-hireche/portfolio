import ClaudeLogo from "../components/ClaudeLogo";
import { certificates } from "../data/content";

function CertCard({ title, issuer, accent, image, link }) {
  const Wrapper = link ? "a" : "div";
  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="bento-card flex-col items-center p-4 text-center hover:translate-y-0 hover:shadow-soft"
      aria-label={link ? `View ${title} certificate` : undefined}
    >
      {/* Certificate preview */}
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-cream-200 bg-white p-3">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
            <span
              className="text-sm font-bold tracking-tight"
              style={{ color: accent }}
            >
              {issuer}
            </span>
            <div className="h-px w-16 bg-cream-300" />
            <span className="font-serif text-base text-ink-700">{title}</span>
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-cream-300">
              <ClaudeLogo className="h-5 w-5" style={{ color: accent }} />
            </div>
          </div>
        )}
      </div>

      <p className="eyebrow mt-4" style={{ color: accent }}>
        {issuer}
      </p>
      <h3 className="card-title text-base">{title}</h3>

      <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-cream-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-500 ring-1 ring-cream-300 transition-colors duration-300 hover:bg-clay-500 hover:text-white hover:ring-clay-500">
        Verified
      </span>
    </Wrapper>
  );
}

export default function Certificates() {
  return (
    <div className="animate-fade-up">
      <header className="mb-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <ClaudeLogo className="h-8 w-8 text-clay-500" />
          <h1 className="font-serif text-4xl font-bold text-ink-900 sm:text-5xl">
            Certificates
          </h1>
        </div>
        <p className="text-sm text-ink-500">
          A selection of coursework and professional certifications.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <CertCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}
