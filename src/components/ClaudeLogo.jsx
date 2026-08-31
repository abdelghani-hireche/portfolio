// Claude-inspired sunburst mark, reused across the site as the brand icon.
// `spin` adds a slow rotation; `color` overrides the fill.
export default function ClaudeLogo({
  className = "h-6 w-6",
  spin = false,
  color,
}) {
  const rotations = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${spin ? "animate-spin-slow" : ""}`}
      style={color ? { color } : undefined}
      fill="currentColor"
      aria-hidden="true"
    >
      <g transform="translate(50 50)">
        {rotations.map((r) => (
          <path
            key={r}
            transform={`rotate(${r})`}
            d="M0 -42 C 3 -20 3 -20 0 0 C -3 -20 -3 -20 0 -42 Z"
          />
        ))}
      </g>
    </svg>
  );
}
