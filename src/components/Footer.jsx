import { Link } from "react-router-dom";
import ClaudeLogo from "./ClaudeLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/certificates", label: "Works" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-cream-200 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center">
        <Link to="/" className="flex items-center gap-2">
          <ClaudeLogo className="h-6 w-6 text-clay-500" />
          <span className="font-serif text-2xl font-bold text-ink-900">
            Abdelghani
          </span>
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500 transition hover:text-clay-600"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-sm text-ink-500">
          © {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-semibold text-clay-600">
            Abdelghani Hireche
          </span>
        </p>
      </div>
    </footer>
  );
}
