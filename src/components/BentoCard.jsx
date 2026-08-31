import { Link } from "react-router-dom";
import ClaudeLogo from "./ClaudeLogo";

// Reusable bento tile. `to` makes the whole card a router link;
// `href` makes it an external link. The bottom-right `buttonIcon`
// (Claude mark by default) is the visual click affordance.
export default function BentoCard({
  eyebrow,
  title,
  to,
  href,
  download,
  buttonIcon,
  className = "",
  children,
}) {
  const inner = (
    <>
      <div className="pr-12">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h3 className="card-title">{title}</h3>}
        {children}
      </div>

      {(to || href) && (
        <span className="card-btn">
          {buttonIcon ?? <ClaudeLogo className="h-5 w-5" />}
        </span>
      )}
    </>
  );

  const classes = `group bento-card flex flex-col justify-end ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        target={download ? undefined : "_blank"}
        rel="noreferrer"
        download={download || undefined}
        className={classes}
      >
        {inner}
      </a>
    );
  }
  return <div className={classes}>{inner}</div>;
}
