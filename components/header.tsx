import { EVENTBRITE_URL } from "@/lib/content";

const NAV = [
  ["Experiences", "#experiences"],
  ["Moments", "#moments"],
  ["Watch", "#watch"],
  ["About", "#about"],
];

export function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="VYRA Socials, back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/vyra-mark.png" alt="VYRA Socials" width={900} height={466} />
      </a>
      <nav aria-label="Main" className="nav">
        {NAV.map(([label, href]) => (
          <a key={href} href={href} className="uline">
            {label}
          </a>
        ))}
      </nav>
      <a href={EVENTBRITE_URL} target="_blank" rel="noopener" className="btn btn-red btn-sm" data-magnetic="0.2">
        <span className="dot" aria-hidden="true" /> Tickets
      </a>
    </header>
  );
}
