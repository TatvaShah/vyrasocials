// Every fact on this page comes from public @vyrasocials posts or the VYRA SOCIALS Eventbrite organizer page.
// Anything not confirmed is marked as a placeholder. Copy must never contain two hyphens in a row:
// scripts/check-copy.mjs fails the build if it does.

// On Vercel, previews use their branch URL so share images resolve on the preview itself.
const vercelHost =
  process.env.VERCEL_ENV === "production" ? process.env.VERCEL_PROJECT_PRODUCTION_URL : process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL;
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || (vercelHost ? `https://${vercelHost}` : "https://vyrasocials.vercel.app")).replace(/\/$/, "");
export const NAME = "VYRA Socials";
export const IG_HANDLE = "vyrasocials";
export const IG_URL = "https://www.instagram.com/vyrasocials/";
export const IG_DM_URL = "https://ig.me/m/vyrasocials";
export const EVENTBRITE_URL = "https://www.eventbrite.ca/o/vyra-socials-121393942644";
export const CLAUDAURA_URL = "https://www.claudaura.ca";

export const SEO = {
  title: "VYRA Socials | Toronto experiences, nights and sundowners",
  description:
    "VYRA Socials creates Toronto experiences: THE RED ROOM haunted movie set night, NAZAR Bollywood horror night, the Coffee Yacht Party and the ÁUREA sunflower sundowner. Tickets on Eventbrite.",
};

export type Img = { src: string; alt: string };

export const HERO = {
  kicker: "Toronto experiences",
  lines: ["Enter", "the next", "frame."],
  sub: "Movie set nights, coffee on the water and golden hour in the sunflowers. If you know, you know.",
  photo: { src: "/images/red-room-recap.jpg", alt: "Guest lit in red light beside candles at THE RED ROOM, OBJX Studio" },
  slate: [
    ["Scene", "THE RED ROOM"],
    ["Location", "OBJX Studio"],
    ["Status", "Sold out"],
  ],
};

// Short lines lifted from VYRA captions and posters.
export const MARQUEE = [
  "Red lights on",
  "Sold out",
  "If you know, you know",
  "Be part of the movie",
  "Coffee on the water",
  "Golden hour in the sunflowers",
  "Toronto forgot what time it was",
];

export const NEXT_UP = {
  label: "Now loading",
  title: "New Years",
  line: "New Years loading soon!",
  source: "From the @vyrasocials bio",
  // PLACEHOLDER: date, venue and ticket link are not announced yet.
  placeholder: "Date, venue and tickets: to be announced by VYRA",
};

export type Experience = {
  id: string;
  no: string;
  title: string;
  subtitle: string;
  tone: "red" | "plum" | "sea" | "gold";
  when: string;
  where: string;
  details: string[];
  quote: string;
  status?: string;
  img: Img;
  post: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "red-room",
    no: "01",
    title: "THE RED ROOM",
    subtitle: "A Haunted House Night",
    tone: "red",
    when: "Sat, Oct 31, 2026 · 10:30 PM onwards",
    where: "OBJX Studio, Toronto",
    details: [
      "A Halloween party inside a haunted movie set",
      "3 rooms: Hip Hop, Rap, Techno, Club Anthems",
      "DJ CHEFBOYRD × DJ MARYINSYNC",
      "Halloween costumes · 19+",
    ],
    quote: "The room was red. The night was a blur. The energy was all you.",
    status: "Sold out",
    img: { src: "/images/red-room-portrait.jpg", alt: "Guest in red light at THE RED ROOM by VYRA" },
    post: "https://www.instagram.com/reel/DfS0iw7tikq/",
  },
  {
    id: "nazar",
    no: "02",
    title: "NAZAR",
    subtitle: "A Bollywood Horror Night",
    tone: "plum",
    when: "Fri, Oct 30, 2026 · 10:30 PM onwards",
    where: "OBJX Studio, Toronto",
    details: ["Night one of the VYRA Halloween weekend", "Bollywood meets the haunted house"],
    quote: "The comments tried to warn her.",
    img: { src: "/images/nazar-red-room-weekend.jpg", alt: "Masked guests from the NAZAR and THE RED ROOM Halloween weekend promo" },
    post: "https://www.instagram.com/reel/Dew8u7pgghr/",
  },
  {
    id: "coffee-yacht",
    no: "03",
    title: "THE COFFEE YACHT PARTY",
    subtitle: "Taking coffee to the water",
    tone: "sea",
    when: "Sun, July 5, 2026 · 1 to 5 PM",
    where: "Empress of Canada, 11 Polson St, Toronto",
    details: [
      "Coffee by Red Rose Café · bites by Indian Desire",
      "House, Afro House, Bolly Afro",
      "360° video booth",
    ],
    quote: "This Sunday, we're taking coffee to the water.",
    img: { src: "/images/coffee-yacht-poster.jpg", alt: "The Coffee Yacht Party poster: 5 July, 1 to 5 PM, 11 Polson St" },
    post: "https://www.instagram.com/p/DaTAnFgOm4M/",
  },
  {
    id: "aurea",
    no: "04",
    title: "ÁUREA",
    subtitle: "Sundowner Farm Party",
    tone: "gold",
    when: "Sat, Aug 15, 2026 · 5 to 9 PM",
    where: "Campbells Cross Farms, Caledon",
    details: [
      "Golden hour among the sunflowers · 19+",
      "DJ Mary · house, techno, indo house, afrobeats, bollyfusion",
      "Córdoba Coffee, a bar and a 360 booth",
    ],
    quote: "A little golden hour magic, a lot of dancing, and one day we're still not over.",
    img: { src: "/images/aurea-recap.jpg", alt: "DJ playing a set in a sunflower field at ÁUREA by VYRA" },
    post: "https://www.instagram.com/p/DcmKJAFCN0H/",
  },
];

export const STATEMENT = "Next time, be part of the movie, not the ones watching the recap.";

export const MOMENTS: (Img & { caption: string })[] = [
  { src: "/images/red-room-trio.jpg", alt: "Three guests in costume at THE RED ROOM", caption: "THE RED ROOM" },
  { src: "/images/aurea-teaser.jpg", alt: "Sunflower field at golden hour, ÁUREA teaser", caption: "ÁUREA" },
  { src: "/images/red-room-dancefloor.jpg", alt: "Dance floor under red and blue light", caption: "Halloweekend 26" },
  { src: "/images/red-room-movie-set.jpg", alt: "Guests on the haunted movie set", caption: "The movie set" },
  { src: "/images/halloweekend-collab.jpg", alt: "Guests in costume during Halloweekend", caption: "Halloweekend" },
  { src: "/images/aurea-poster.jpg", alt: "ÁUREA Sundowner poster, August 15, 2026, 5 to 9 PM", caption: "ÁUREA poster" },
  { src: "/images/red-room-aftermovie.jpg", alt: "Guest in a mask at the aftermovie shoot", caption: "Aftermovie" },
  { src: "/images/red-room-promo.jpg", alt: "Toronto's hottest Halloween party promo still", caption: "The promo" },
  { src: "/images/red-room-poster.jpg", alt: "THE RED ROOM poster: Sat Oct 31, 10:30 PM, OBJX Studio", caption: "THE RED ROOM poster" },
  { src: "/images/halloweekend-reel.jpg", alt: "Guest under green light in a flat cap", caption: "Still haunts you" },
];

// Real posts and reels that play inside Instagram's official embed.
export const EMBEDS = [
  "https://www.instagram.com/reel/DfS0iw7tikq/",
  "https://www.instagram.com/reel/DfVWAQ6gRm0/",
  "https://www.instagram.com/reel/Dew8u7pgghr/",
  "https://www.instagram.com/reel/DbOX9cXBTfJ/",
];

// Named in VYRA posts as DJs, venues, partners and photo credits. Not presented as clients.
export const CREDITS = [
  { role: "DJs", names: ["DJ MARYINSYNC", "DJ CHEFBOYRD"] },
  { role: "Venues", names: ["OBJX Studio", "Empress of Canada", "Campbells Cross Farms"] },
  { role: "Partners", names: ["Red Rose Café", "Indian Desire", "Córdoba Coffee"] },
  { role: "Shot with", names: ["@anmolhandaatelier", "@vadzmedia"] },
];

export const ABOUT = {
  title: "Not a club night. A scene you step into.",
  body: [
    "VYRA Socials builds Toronto experiences around a single idea per night: a haunted movie set, a yacht with coffee on deck, a sunflower field at golden hour.",
    "Sold out rooms, aftermovies people replay, and a crowd that shows up in costume.",
  ],
  // PLACEHOLDER: founder story, team and mission are not public yet.
  placeholder: "Founder story and team to be confirmed by VYRA Socials before launch.",
};
