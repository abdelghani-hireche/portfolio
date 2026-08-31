// Minimal stroke icons (Claude-style: thin, rounded) used for functional UI
// such as contact details, social links and navigation affordances.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Plus({ className = "h-4 w-4" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Mail({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Phone({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 5c0 8.284 6.716 15 15 15a1.5 1.5 0 0 0 1.5-1.5v-2.2a1 1 0 0 0-.76-.97l-3.4-.85a1 1 0 0 0-1 .35l-.86 1.05a11.3 11.3 0 0 1-4.96-4.96l1.05-.86a1 1 0 0 0 .35-1l-.85-3.4a1 1 0 0 0-.97-.76H5.5A1.5 1.5 0 0 0 4 5Z" />
    </svg>
  );
}

export function MapPin({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function LinkedIn({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.56-2.3 3.2V21H9V9Z" />
    </svg>
  );
}

export function Twitter({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.9 3H22l-7.1 8.1L23 21h-6.8l-4.5-5.9L6.4 21H3.3l7.6-8.7L2.4 3h6.9l4.1 5.4L18.9 3Zm-1.2 16h1.7L7.4 4.8H5.6L17.7 19Z" />
    </svg>
  );
}

export function Credly({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2 3 6v6c0 5 3.9 8.7 9 10 5.1-1.3 9-5 9-10V6l-9-4Zm3.5 12.6a4.6 4.6 0 0 1-3.5 1.6 4.6 4.6 0 0 1 0-9.2c1.4 0 2.7.6 3.5 1.6l-1.5 1.2a2.6 2.6 0 0 0-2-1 2.6 2.6 0 0 0 0 5.2c.8 0 1.5-.3 2-1l1.5 1.6Z" />
    </svg>
  );
}

export function Download({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function ExternalLink({ className = "h-4 w-4" }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </svg>
  );
}
