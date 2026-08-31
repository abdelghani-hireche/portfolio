import { Link, NavLink } from "react-router-dom";
import ClaudeLogo from "./ClaudeLogo";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-cream-200/70 bg-cream-50/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <ClaudeLogo className="h-7 w-7 text-clay-500" />
          <span className="font-serif text-xl font-bold tracking-tight text-ink-900">
            Abdelghani
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-cream-200 text-ink-900"
                      : "text-ink-500 hover:text-ink-900"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn-primary">
          Let&apos;s talk
          <ClaudeLogo className="h-4 w-4" />
        </Link>
      </nav>
    </header>
  );
}
