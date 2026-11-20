export type IconName =
  | "sparkles"
  | "hardHat"
  | "truck"
  | "building"
  | "sofa"
  | "window"
  | "gem"
  | "sun";

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  icon: IconName;
  image: string;
  tags: readonly string[];
  includes: readonly string[];
  faqs: readonly { q: string; a: string }[];
};

export const services: readonly Service[] = [
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    short: "Top-to-bottom reset for every room.",
    intro:
      "A full reset for homes that need more than a weekly tidy — kitchens degreased, bathrooms descaled, and every corner reached.",
    icon: "sparkles",
    image: "/images/deep-cleaning.webp",
    tags: ["Homes", "Apartments", "Seasonal"],
    includes: [
      "Kitchen degreasing, cabinets inside and out",
      "Bathroom descaling and grout scrub",
      "Dusting of fans, lights and high shelves",
      "Skirting, doors, switches and handles",
      "Floors vacuumed and mopped edge to edge",
    ],
    faqs: [
      { q: "How long does a deep clean take?", a: "Most homes take one working day. We confirm the time after seeing photos on WhatsApp." },
      { q: "Do I need to be home?", a: "Only at the start and for the final walk-through." },
    ],
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction & Renovation",
    short: "Dust, paint and debris gone after the build.",
    intro:
      "Builders leave fine dust in places you cannot see. We remove it, along with paint splashes, cement marks and stickers, so you can move in.",
    icon: "hardHat",
    image: "/images/post-construction.webp",
    tags: ["New builds", "Renovations", "Fit-outs"],
    includes: [
      "Fine dust removal from walls, ducts and fixtures",
      "Paint, cement and adhesive mark removal",
      "Window frames, tracks and glass detailing",
      "Sticker and protective film removal",
      "Final floor wash and polish",
    ],
    faqs: [
      { q: "Can you start before the builders finish?", a: "We usually come after the last trade leaves, so the space stays clean." },
      { q: "Do you take away debris?", a: "Light debris yes. Heavy rubble removal can be arranged on request." },
    ],
  },
  {
    slug: "move-in-out-cleaning",
    title: "Move-In / Move-Out",
    short: "Hand over or move in to a spotless space.",
    intro:
      "Empty homes are the easiest to clean properly. We make the place ready for new owners, tenants, or for you on day one.",
    icon: "truck",
    image: "/images/move-in-out.webp",
    tags: ["Tenants", "Landlords", "New owners"],
    includes: [
      "Inside wardrobes, drawers and cabinets",
      "Kitchen appliances wiped inside and out",
      "Bathrooms sanitised top to bottom",
      "Wall spot-cleaning and switchboards",
      "Balconies and entrance areas",
    ],
    faqs: [
      { q: "Should the home be empty?", a: "Yes, empty rooms let us reach every surface." },
      { q: "Can you work on the same day as the move?", a: "Yes, if the timing allows. Message us your moving date." },
    ],
  },
  {
    slug: "janitorial-services",
    title: "Janitorial Services",
    short: "Scheduled cleaning for offices and shops.",
    intro:
      "A regular crew that keeps your workplace clean on a schedule that suits you — daily, weekly or after hours.",
    icon: "building",
    image: "/images/janitorial.webp",
    tags: ["Offices", "Retail", "Clinics"],
    includes: [
      "Desks, meeting rooms and common areas",
      "Washroom cleaning and restocking",
      "Pantry and kitchen upkeep",
      "Trash collection and floor care",
      "After-hours or weekend schedules",
    ],
    faqs: [
      { q: "Do you supply the cleaning products?", a: "Yes. We bring our own equipment and products." },
      { q: "Is the same crew assigned each time?", a: "We keep the same team wherever possible, so they know your space." },
    ],
  },
  {
    slug: "carpet-sofa-mattress-cleaning",
    title: "Carpet, Sofa & Mattress",
    short: "Fabric shampoo and extraction on-site.",
    intro:
      "Machine shampoo and hot-water extraction that lifts stains, dust mites and odours from fabric — done at your place.",
    icon: "sofa",
    image: "/images/carpet-sofa.webp",
    tags: ["Sofas", "Rugs", "Mattresses"],
    includes: [
      "Fabric check before any product is used",
      "Pre-treatment of visible stains",
      "Shampoo and hot-water extraction",
      "Mattress vacuum and sanitising",
      "Quick-dry finish for same-day use",
    ],
    faqs: [
      { q: "How long until I can use the sofa?", a: "Usually a few hours, depending on fabric and weather." },
      { q: "Will every stain come out?", a: "Most do. Some old stains fade rather than vanish — we tell you upfront." },
    ],
  },
  {
    slug: "window-glass-cleaning",
    title: "Window & Glass",
    short: "Streak-free glass, inside and out.",
    intro:
      "Clear windows, glass partitions and facades without streaks — frames and tracks included.",
    icon: "window",
    image: "/images/window-glass.webp",
    tags: ["Homes", "Facades", "Shopfronts"],
    includes: [
      "Glass washed and squeegeed streak-free",
      "Frames, sills and sliding tracks",
      "Mirrors and glass partitions",
      "Hard-water spot treatment",
      "Safe access for upper floors",
    ],
    faqs: [
      { q: "Do you clean high-rise exteriors?", a: "Low and mid-rise yes. For tall facades, message us so we can assess access." },
      { q: "How often should glass be cleaned?", a: "Every one to three months, depending on dust in your area." },
    ],
  },
  {
    slug: "marble-tile-floor-care",
    title: "Marble, Tile & Floor Care",
    short: "Polish, grout and shine restored.",
    intro:
      "Marble that looks dull again, tiles with dark grout lines, floors that lost their shine — we bring them back.",
    icon: "gem",
    image: "/images/marble-floor.webp",
    tags: ["Marble", "Tiles", "Grout"],
    includes: [
      "Marble scrubbing and polishing",
      "Grout deep-clean and whitening",
      "Tile stain and scale removal",
      "Protective sealing on request",
      "Machine buffing for a lasting shine",
    ],
    faqs: [
      { q: "Can scratches be removed from marble?", a: "Light scratches polish out. Deep chips need a stone specialist." },
      { q: "How long does the shine last?", a: "Months, with gentle daily mopping and no harsh acids." },
    ],
  },
  {
    slug: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    short: "Dust-free panels that work at their best.",
    intro:
      "Dust and bird droppings block sunlight. We wash panels with soft brushes and pure water, without harming the surface.",
    icon: "sun",
    image: "/images/solar-panel.webp",
    tags: ["Homes", "Rooftops", "Commercial"],
    includes: [
      "Soft-brush wash with pure water",
      "Bird dropping and stain removal",
      "Frame and mounting wipe-down",
      "Visual check for cracks or loose wiring",
      "Photos before and after",
    ],
    faqs: [
      { q: "How often should panels be cleaned?", a: "In dusty cities, every four to eight weeks keeps them performing." },
      { q: "Do you use chemicals?", a: "No harsh chemicals — soft brushes and pure water only." },
    ],
  },
];

export function findService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
