import { Link } from "react-router-dom";
import BentoCard from "../components/BentoCard";
import ClaudeLogo from "../components/ClaudeLogo";
import { Download, ArrowRight } from "../components/Icons";
import { profile, stats } from "../data/content";

export default function Home() {
  return (
    <div className="animate-fade-up">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-[auto_1fr]">
        {/* HERO — left, spans 2 rows */}
        <section className="relative overflow-hidden rounded-xl2 bg-gradient-to-br from-clay-400 via-clay-500 to-clay-600 p-6 text-white shadow-lift md:col-span-2 md:row-span-2">
          <ClaudeLogo
            className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 text-white/10"
            spin
          />
          <div className="relative flex h-full flex-col justify-center gap-3">
            <ClaudeLogo className="h-8 w-8 text-white/90" />
            <h1 className="font-serif text-3xl font-bold leading-[1.05] sm:text-4xl">
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>
            <p className="max-w-sm text-sm text-white/80">{profile.role}</p>
            <Link
              to="/about"
              className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-clay-600 shadow-soft ring-1 ring-white/40 transition hover:-translate-y-0.5 hover:bg-cream-50 hover:shadow-lift"
            >
              About me
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* QUOTE — thin dynamic banner, top-right, spans 2 cols */}
        <div className="marquee-mask relative flex h-11 items-center self-start overflow-hidden rounded-full border border-cream-300 bg-white shadow-soft md:col-span-2">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                className="flex items-center"
                aria-hidden={dup === 1}
              >
                {profile.taglines.map((line) => (
                  <span key={line} className="flex items-center">
                    <ClaudeLogo className="mx-4 h-2.5 w-2.5 shrink-0 text-clay-400" />
                    <span className="whitespace-nowrap font-serif text-[0.8rem] italic text-ink-500">
                      {line}
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* PROFILE */}
        {/* PROFILE */}
        <BentoCard eyebrow="About me" title="Profile" to="/about" />

        {/* RESUME */}
        <BentoCard
          eyebrow="Download my"
          title="Resume"
          href={profile.resumeUrl}
          download="Abdelghani-Hireche-CV.zip"
          buttonIcon={<Download className="h-5 w-5" />}
        />

        {/* EDUCATION */}
        <BentoCard eyebrow="Stay with me" title="Education" to="/education" />

        {/* PROFESSIONAL EXPERIENCE */}
        <BentoCard
          eyebrow="Stay with me"
          title="Professional Experience"
          to="/experience"
          className="md:col-span-3"
        ></BentoCard>

        {/* COMMUNITY & CONTRIBUTIONS */}
        <BentoCard eyebrow="Beyond code" title="Involvement" to="/community" />

        {/* COURSEWORK CERTIFICATIONS */}
        <BentoCard
          eyebrow="All my"
          title="Coursework Certifications"
          to="/certificates"
          className="md:col-span-2"
        ></BentoCard>

        {/* TECH BADGES */}
        <BentoCard eyebrow="All my" title="Tech Badges" to="/badges" />

        {/* STATS — grouped container */}
        <div className="rounded-xl2 border border-cream-300 bg-white p-3 shadow-soft md:col-span-2">
          <div className="grid h-full grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center rounded-xl border border-cream-200 bg-cream-50 p-4 text-center"
              >
                <span className="font-serif text-2xl font-bold text-clay-600 sm:text-3xl">
                  {s.value}
                </span>
                <span className="mt-1 text-[0.62rem] uppercase leading-tight tracking-wide text-ink-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* GET IN TOUCH */}
        <Link
          to="/contact"
          className="group relative flex flex-col justify-between overflow-hidden rounded-xl2 border border-cream-300 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift md:col-span-2"
        >
          <ClaudeLogo className="absolute right-6 top-6 h-6 w-6 text-clay-500" />
          <h2 className="font-serif text-3xl font-bold text-ink-900">
            Get in touch with <span className="text-clay-500">me.</span>
          </h2>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay-600">
            Contact me
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </div>
  );
}
