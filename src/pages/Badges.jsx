import ClaudeLogo from "../components/ClaudeLogo";
import { badges } from "../data/content";

function BadgeCard({ title, issuer, accent, image, link }) {
  const Wrapper = link ? "a" : "div";
  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="bento-card flex-col items-center p-6 text-center hover:translate-y-0 hover:shadow-soft"
      aria-label={link ? `View ${title} badge on Credly` : undefined}
    >
      {/* Badge medallion */}
      <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-contain drop-shadow-sm"
          />
        ) : (
          <div
            className="flex h-24 w-24 items-center justify-center shadow-lift"
            style={{
              background: `linear-gradient(145deg, ${accent}, ${accent}cc)`,
              clipPath:
                "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
            }}
          >
            <ClaudeLogo className="h-10 w-10 text-white/90" />
          </div>
        )}
      </div>

      <p className="eyebrow mt-5" style={{ color: accent }}>
        {issuer}
      </p>
      <h3 className="card-title text-base">{title}</h3>

      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-500 ring-1 ring-cream-300 transition-colors duration-300 hover:bg-clay-500 hover:text-white hover:ring-clay-500">
        Verified
      </span>
    </Wrapper>
  );
}

export default function Badges() {
  return (
    <div className="animate-fade-up">
      <header className="mb-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <ClaudeLogo className="h-8 w-8 text-clay-500" spin />
          <h1 className="font-serif text-4xl font-bold text-ink-900 sm:text-5xl">
            Badges
          </h1>
        </div>
        <p className="text-sm text-ink-500">
          Verified skill badges earned across cloud, AI and DevOps tracks.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {badges.map((b) => (
          <BadgeCard key={b.title} {...b} />
        ))}
      </div>
    </div>
  );
}
