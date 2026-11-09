# VYRA Socials website

Premium demo website for VYRA Socials (@vyrasocials), a Toronto experiential nightlife and event producer.

Concept: "Enter the next frame." A dark editorial, cinematic site that treats each VYRA night as a scene and sends every visitor to tickets on Eventbrite or a DM on Instagram.

## Stack

Next.js 16 (App Router), React 19, Tailwind v4, GSAP ScrollTrigger and Lenis (loaded after idle), built from the ClaudAura premium starter kit.

* All copy and facts: `lib/content.ts` (sourced from public @vyrasocials posts and the VYRA SOCIALS Eventbrite organizer page)
* Sections: `components/sections.tsx`
* Styles and motion CSS: `app/globals.css`; scroll motion: `components/motion-root.tsx`
* Photos: `public/images` (saved locally, never hotlinked); `npm run build` makes static WebP and AVIF copies in `public/images/_opt`
* Share image: `python3 scripts/make-og.py` writes `public/og.jpg` (1200x630, under 200 KB)
* `prefers-reduced-motion` turns off all motion

## Run

```
npm ci
npm run build
npm start
```

The build fails if any copy contains two hyphens in a row (`scripts/check-copy.mjs`).

Website by ClaudAura.
