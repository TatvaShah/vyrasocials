import { Photo } from "@/components/photo";
import {
  ABOUT,
  CLAUDAURA_URL,
  CREDITS,
  EMBEDS,
  EVENTBRITE_URL,
  EXPERIENCES,
  HERO,
  IG_DM_URL,
  IG_HANDLE,
  IG_URL,
  MARQUEE,
  MOMENTS,
  NAME,
  NEXT_UP,
  STATEMENT,
} from "@/lib/content";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <Photo img={HERO.photo} sizes="100vw" priority className="hero-bg-img" />
      </div>
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-in" style={{ animationDelay: "0.05s" }}>
            <span className="rec" aria-hidden="true" /> {HERO.kicker}
          </p>
          <h1 id="hero-title" className="display hero-title">
            {HERO.lines.map((l, i) => (
              <span key={l} className="mask">
                <span className="hero-word" style={{ animationDelay: `${0.12 + i * 0.11}s` }}>
                  {i === 2 ? <em className="serif-em">{l}</em> : l}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: "0.55s" }}>
            {HERO.sub}
          </p>
          <div className="hero-ctas hero-in" style={{ animationDelay: "0.68s" }}>
            <a href={EVENTBRITE_URL} target="_blank" rel="noopener" className="btn btn-red" data-magnetic="0.22">
              Get tickets <Arrow />
            </a>
            <a href={IG_DM_URL} target="_blank" rel="noopener" className="btn btn-ghost">
              DM on Instagram
            </a>
          </div>
        </div>
        <figure className="viewfinder hero-in" style={{ animationDelay: "0.3s" }}>
          <div className="vf-photo">
            <Photo img={HERO.photo} sizes="(min-width: 1024px) 34vw, 0px" priority />
          </div>
          <span className="corner tl" aria-hidden="true" />
          <span className="corner tr" aria-hidden="true" />
          <span className="corner bl" aria-hidden="true" />
          <span className="corner br" aria-hidden="true" />
          <figcaption className="slate">
            {HERO.slate.map(([k, v]) => (
              <span key={k}>
                <b>{k}</b> {v}
              </span>
            ))}
          </figcaption>
        </figure>
      </div>
      <p className="hero-scroll" aria-hidden="true">
        Scroll to roll
      </p>
    </section>
  );
}

export function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee-wrap">
    <div className="marquee" role="img" aria-label={MARQUEE.join(". ")}>
      <div className="marquee-track" aria-hidden="true">
        {row.map((m, i) => (
          <span key={i}>
            {m}
            <i className="star">✦</i>
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}

export function NextUp() {
  return (
    <section className="nextup" aria-labelledby="next-title">
      <div className="wrap nextup-grid">
        <p className="eyebrow" data-reveal>
          <span className="rec" aria-hidden="true" /> {NEXT_UP.label}
        </p>
        <h2 id="next-title" className="display nextup-title" data-split>
          {NEXT_UP.title}
        </h2>
        <div className="nextup-side" data-reveal>
          <p className="serif-quote">“{NEXT_UP.line}”</p>
          <p className="muted small">{NEXT_UP.source}</p>
          <p className="placeholder">
            <b>Placeholder</b> {NEXT_UP.placeholder}
          </p>
          <div className="row-ctas">
            <a href={IG_URL} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">
              Follow for the drop <Arrow />
            </a>
            <a href={EVENTBRITE_URL} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">
              Eventbrite <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experiences() {
  return (
    <section id="experiences" className="experiences" aria-labelledby="exp-title">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow" data-reveal>
            Experiences · 2026
          </p>
          <h2 id="exp-title" className="display sec-title" data-split>
            Four scenes. One city.
          </h2>
        </div>
        <ol className="exp-list">
          {EXPERIENCES.map((e, i) => (
            <li key={e.id} id={e.id} className={`exp exp-${e.tone} ${i % 2 ? "exp-flip" : ""}`}>
              <div className="exp-media" data-reveal="clip">
                <div className="exp-media-inner" data-parallax="6">
                  <Photo img={e.img} sizes="(min-width: 1024px) 42vw, 100vw" />
                </div>
                {e.status ? <span className="stamp">{e.status}</span> : null}
                <span className="exp-no" aria-hidden="true">
                  {e.no}
                </span>
              </div>
              <div className="exp-body">
                <p className="eyebrow exp-tone" data-reveal>
                  Scene {e.no} · {e.subtitle}
                </p>
                <h3 className="display exp-title" data-reveal>
                  {e.title}
                </h3>
                <dl className="exp-meta" data-reveal>
                  <div>
                    <dt>When</dt>
                    <dd>{e.when}</dd>
                  </div>
                  <div>
                    <dt>Where</dt>
                    <dd>{e.where}</dd>
                  </div>
                </dl>
                <ul className="exp-details" data-stagger>
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <blockquote className="serif-quote exp-quote" data-reveal>
                  “{e.quote}”
                </blockquote>
                <div className="row-ctas" data-reveal>
                  <a href={e.post} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">
                    See it on Instagram <Arrow />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Statement() {
  return (
    <section className="statement" aria-label="Statement">
      <p className="display statement-text" data-words>
        {STATEMENT.split(" ").map((w, i) => (
          <span key={i} className="w">
            {w}{" "}
          </span>
        ))}
      </p>
      <p className="eyebrow statement-src">From a VYRA aftermovie caption</p>
    </section>
  );
}

export function Moments() {
  return (
    <section id="moments" className="moments" data-pin aria-labelledby="moments-title">
      <div className="moments-head wrap">
        <p className="eyebrow">Moments</p>
        <h2 id="moments-title" className="display sec-title">
          Caught on camera.
        </h2>
      </div>
      <div className="filmstrip" data-track>
        {MOMENTS.map((m, i) => (
          <figure key={m.src} className="frame">
            <div className="frame-photo">
              <Photo img={m} sizes="(min-width: 1024px) 26vw, 70vw" />
            </div>
            <figcaption>
              <span>{String(i + 1).padStart(2, "0")}</span> {m.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function embedSrc(url: string) {
  const m = url.match(/instagram\.com\/(p|reel)\/([A-Za-z0-9_-]+)/);
  return m ? `https://www.instagram.com/${m[1]}/${m[2]}/embed/` : url;
}

export function Watch() {
  return (
    <section id="watch" className="watch" aria-labelledby="watch-title">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow" data-reveal>
            Watch · @{IG_HANDLE}
          </p>
          <h2 id="watch-title" className="display sec-title" data-split>
            Press play on the recap.
          </h2>
        </div>
        <div className="embeds" data-stagger>
          {EMBEDS.map((u) => (
            <iframe key={u} src={embedSrc(u)} title={`Instagram reel from @${IG_HANDLE}`} loading="lazy" allow="encrypted-media; autoplay" allowFullScreen />
          ))}
        </div>
        <a href={IG_URL} target="_blank" rel="noopener" className="btn btn-ghost" data-reveal>
          More on @{IG_HANDLE} <Arrow />
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <div>
          <p className="eyebrow" data-reveal>
            About
          </p>
          <h2 id="about-title" className="display sec-title" data-split>
            {ABOUT.title}
          </h2>
        </div>
        <div className="about-body">
          {ABOUT.body.map((p) => (
            <p key={p} data-reveal>
              {p}
            </p>
          ))}
          <p className="placeholder" data-reveal>
            <b>Placeholder</b> {ABOUT.placeholder}
          </p>
          <div className="credits" data-stagger>
            {CREDITS.map((c) => (
              <div key={c.role}>
                <p className="credit-role">{c.role}</p>
                <p>{c.names.join(" · ")}</p>
              </div>
            ))}
          </div>
          <p className="muted small" data-reveal>
            Names as credited in VYRA posts.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Tickets() {
  return (
    <section id="tickets" className="tickets" aria-labelledby="tickets-title">
      <div className="wrap tickets-inner">
        <p className="eyebrow" data-reveal>
          Tickets · Toronto
        </p>
        <h2 id="tickets-title" className="display tickets-title" data-split>
          Don&apos;t watch the recap.
        </h2>
        <p className="tickets-sub" data-reveal>
          Every VYRA experience is ticketed on Eventbrite. Questions, guest lists or collabs: slide into the DMs.
        </p>
        <div className="row-ctas center" data-reveal>
          <a href={EVENTBRITE_URL} target="_blank" rel="noopener" className="btn btn-red btn-lg" data-magnetic="0.25">
            Tickets on Eventbrite <Arrow />
          </a>
          <a href={IG_DM_URL} target="_blank" rel="noopener" className="btn btn-ghost btn-lg">
            DM @{IG_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/vyra-mark.png" alt="VYRA Socials" width={900} height={466} className="footer-mark" loading="lazy" />
        <ul>
          <li>
            <a className="uline" href={IG_URL} target="_blank" rel="noopener">
              Instagram @{IG_HANDLE}
            </a>
          </li>
          <li>
            <a className="uline" href={EVENTBRITE_URL} target="_blank" rel="noopener">
              Eventbrite
            </a>
          </li>
          <li>
            <a className="uline" href={IG_DM_URL} target="_blank" rel="noopener">
              Send a DM
            </a>
          </li>
        </ul>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {NAME}, Toronto
        </p>
        <p>
          Website by{" "}
          <a href={CLAUDAURA_URL} className="uline strong">
            ClaudAura
          </a>
        </p>
      </div>
    </footer>
  );
}
