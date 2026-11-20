export type IconName =
  | "sparkles"
  | "home"
  | "sofa"
  | "utensils"
  | "bath"
  | "droplet"
  | "building"
  | "shield"
  | "carpet"
  | "steam"
  | "buildingTall"
  | "window"
  | "spray"
  | "bug"
  | "fog"
  | "layers"
  | "grid";

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  icon: IconName;
  /** After / clean photo — card, detail banner, compare after-side. See public/images/ASSET-LIST.md */
  image: string;
  /** Optional real before photo for the compare slider. */
  beforeImage?: string;
  tags: readonly string[];
  includes: readonly string[];
  faqs: readonly { q: string; a: string }[];
};

export const services: readonly Service[] = [
  {
    slug: "5-marla-house-deep-cleaning",
    title: "5 Marla House Deep Cleaning",
    short: "Full deep clean sized for a 5 marla home.",
    intro:
      "A top-to-bottom reset tailored to a typical 5 marla house — kitchens, washrooms, living areas and floors handled in one visit.",
    icon: "home",
    image: "/images/service-5-marla-house-deep-cleaning-after.webp",
    beforeImage: "/images/service-5-marla-house-deep-cleaning-before.webp",
    tags: ["Homes", "5 Marla", "Deep clean"],
    includes: [
      "Kitchen degreasing and cabinet wipe-down",
      "Washroom descaling and sanitising",
      "Living areas dusted, vacuumed and mopped",
      "Fans, lights, skirting and switches",
      "Balcony and entrance tidy-up",
    ],
    faqs: [
      { q: "How long does a 5 marla deep clean take?", a: "Usually half to one full day, depending on condition. We confirm after seeing photos on WhatsApp." },
      { q: "Do I need to empty the rooms?", a: "No — clear floors and counters help, but furniture can stay in place." },
    ],
  },
  {
    slug: "10-marla-house-deep-cleaning",
    title: "10 Marla House Deep Cleaning",
    short: "Thorough deep clean for a 10 marla house.",
    intro:
      "More rooms, more surfaces — a crew sized for a 10 marla home so every floor, kitchen and washroom gets a proper deep clean.",
    icon: "home",
    image: "/images/service-10-marla-house-deep-cleaning-after.webp",
    beforeImage: "/images/service-10-marla-house-deep-cleaning-before.webp",
    tags: ["Homes", "10 Marla", "Deep clean"],
    includes: [
      "All bedrooms, lounges and passages",
      "Kitchen deep degrease and appliance exteriors",
      "Every washroom descaled and sanitised",
      "High dusting of fans, cornices and shelves",
      "Floors vacuumed and mopped edge to edge",
    ],
    faqs: [
      { q: "How many cleaners will you send?", a: "Usually a larger crew than a 5 marla job so the day stays efficient. We confirm the team size when you book." },
      { q: "Can you split the job over two days?", a: "Yes, if the home needs it. Message us and we will plan the schedule." },
    ],
  },
  {
    slug: "1-kanal-house-deep-cleaning",
    title: "1 Kanal House Deep Cleaning",
    short: "Large-home deep clean for 1 kanal properties.",
    intro:
      "A full-property deep clean for 1 kanal houses — multiple floors, large kitchens and outdoor-facing areas included in a planned crew day.",
    icon: "sparkles",
    image: "/images/service-1-kanal-house-deep-cleaning-after.webp",
    beforeImage: "/images/service-1-kanal-house-deep-cleaning-before.webp",
    tags: ["Homes", "1 Kanal", "Deep clean"],
    includes: [
      "Multi-floor dusting, vacuuming and mopping",
      "Main and servant kitchens degreased",
      "All washrooms and powder rooms sanitised",
      "Staircases, railings and large glass areas",
      "Entrance, porch and selected outdoor spots",
    ],
    faqs: [
      { q: "Is one day enough for a 1 kanal house?", a: "Often yes with a full crew. Heavily neglected homes may need a second visit — we say so upfront." },
      { q: "Do you clean servant quarters too?", a: "Yes, if you want them included. Tell us when you message." },
    ],
  },
  {
    slug: "5-seater-sofa-cleaning",
    title: "5-Seater Sofa Cleaning",
    short: "On-site shampoo for a full 5-seater sofa.",
    intro:
      "Fabric check, stain pre-treat and hot-water extraction for a 5-seater sofa — cleaned at your home so you do not haul furniture out.",
    icon: "sofa",
    image: "/images/service-5-seater-sofa-cleaning-after.webp",
    beforeImage: "/images/service-5-seater-sofa-cleaning-before.webp",
    tags: ["Sofas", "Fabric", "On-site"],
    includes: [
      "Fabric type check before any product is used",
      "Pre-treatment of visible stains and edges",
      "Shampoo and hot-water extraction",
      "Cushion and under-seat vacuum",
      "Quick-dry finish for same-day use",
    ],
    faqs: [
      { q: "How long until we can sit on it?", a: "Usually a few hours, depending on fabric and weather." },
      { q: "Will every stain come out?", a: "Most do. Some old or dye-set stains fade rather than vanish — we tell you before we start." },
    ],
  },
  {
    slug: "kitchen-deep-cleaning",
    title: "Kitchen Deep Cleaning",
    short: "Grease, grime and cabinets reset.",
    intro:
      "A focused kitchen deep clean — hob, hood, counters, cabinets and floors — so the heart of the home feels fresh again.",
    icon: "utensils",
    image: "/images/service-kitchen-deep-cleaning-after.webp",
    beforeImage: "/images/service-kitchen-deep-cleaning-before.webp",
    tags: ["Kitchen", "Grease", "Homes"],
    includes: [
      "Hob, hood and splashback degreasing",
      "Countertops and sink detailing",
      "Cabinet fronts and selected interiors",
      "Appliance exteriors wiped clean",
      "Floor scrub and edge mopping",
    ],
    faqs: [
      { q: "Do you clean inside the fridge or oven?", a: "Appliance interiors can be added on request — mention it when you book." },
      { q: "How long does a kitchen deep clean take?", a: "Typically a few hours for a standard kitchen. Large open kitchens may take longer." },
    ],
  },
  {
    slug: "washroom-deep-cleaning",
    title: "Washroom Deep Cleaning",
    short: "Descaled, sanitised and fresh.",
    intro:
      "Hard water scale, soap scum and germs cleared from tiles, fixtures and floors — a proper washroom deep clean, not a quick wipe.",
    icon: "bath",
    image: "/images/service-washroom-deep-cleaning-after.webp",
    beforeImage: "/images/service-washroom-deep-cleaning-before.webp",
    tags: ["Washroom", "Sanitise", "Scale"],
    includes: [
      "Toilet, basin and shower descaling",
      "Tile and grout scrub",
      "Mirror and fixture polish",
      "Floor scrub and disinfect",
      "Exhaust and high ledges dusted",
    ],
    faqs: [
      { q: "Can you do multiple washrooms in one visit?", a: "Yes. Tell us how many and we size the crew and time." },
      { q: "Do you remove hard-water stains completely?", a: "Most light and medium scale comes off. Deep etched marks may only lighten." },
    ],
  },
  {
    slug: "water-tank-cleaning",
    title: "Water Tank Cleaning",
    short: "Empty, scrub and rinse for cleaner water.",
    intro:
      "Overhead and underground tanks cleaned safely — sludge removed, walls scrubbed and rinsed so your household water stays fresher.",
    icon: "droplet",
    image: "/images/service-water-tank-cleaning-after.webp",
    beforeImage: "/images/service-water-tank-cleaning-before.webp",
    tags: ["Tanks", "Water", "Homes"],
    includes: [
      "Safe drain-down and sludge removal",
      "Interior wall and floor scrub",
      "Fresh-water rinse and flush",
      "Lid and outlet wipe-down",
      "Before and after condition notes",
    ],
    faqs: [
      { q: "How often should tanks be cleaned?", a: "Every three to six months is common in dusty cities. We can remind you after the first clean." },
      { q: "Will the water supply be off for long?", a: "Usually a few hours while we empty, clean and refill. We plan around your routine." },
    ],
  },
  {
    slug: "standard-commercial-cleaning",
    title: "Standard Commercial Cleaning",
    short: "Offices, shops and workspaces kept tidy.",
    intro:
      "Scheduled or one-off commercial cleaning for offices, retail and clinics — desks, floors, washrooms and common areas done to a clear checklist.",
    icon: "building",
    image: "/images/service-standard-commercial-cleaning-after.webp",
    beforeImage: "/images/service-standard-commercial-cleaning-before.webp",
    tags: ["Offices", "Retail", "Clinics"],
    includes: [
      "Desks, meeting rooms and reception",
      "Washroom cleaning and restocking",
      "Pantry and kitchenette upkeep",
      "Trash collection and floor care",
      "After-hours or weekend slots",
    ],
    faqs: [
      { q: "Do you supply products and equipment?", a: "Yes. We bring our own cleaning products and machines." },
      { q: "Can you work after closing time?", a: "Yes — evenings and weekends are common for commercial sites." },
    ],
  },
  {
    slug: "hygiene-solutions",
    title: "Hygiene Solutions",
    short: "Sanitising plans for healthier spaces.",
    intro:
      "Targeted hygiene programmes for homes and workplaces — high-touch surfaces, washrooms and shared areas sanitised to reduce germs day to day.",
    icon: "shield",
    image: "/images/service-hygiene-solutions-after.webp",
    beforeImage: "/images/service-hygiene-solutions-before.webp",
    tags: ["Hygiene", "Sanitise", "Workplaces"],
    includes: [
      "High-touch surface disinfection",
      "Washroom hygiene protocol",
      "Shared kitchen and pantry wipe-down",
      "Floor and entrance sanitising",
      "Optional recurring schedule",
    ],
    faqs: [
      { q: "Is this the same as a deep clean?", a: "No — hygiene solutions focus on sanitising and high-touch areas. Deep cleans cover heavier soil and detail work." },
      { q: "Are your products safe around kids and pets?", a: "We use care-labelled products and can switch to milder options on request." },
    ],
  },
  {
    slug: "deep-carpet-upholstery-cleaning",
    title: "Deep Carpet & Upholstery Cleaning",
    short: "Carpets, rugs and fabric refreshed on-site.",
    intro:
      "Machine shampoo and extraction for carpets, rugs and upholstered pieces — dust, odours and everyday stains lifted without removing furniture from your home.",
    icon: "carpet",
    image: "/images/service-deep-carpet-upholstery-cleaning-after.webp",
    beforeImage: "/images/service-deep-carpet-upholstery-cleaning-before.webp",
    tags: ["Carpets", "Rugs", "Upholstery"],
    includes: [
      "Fibre check and vacuum prep",
      "Stain pre-treatment",
      "Hot-water extraction shampoo",
      "Edge and under-furniture detailing where reachable",
      "Controlled dry-down guidance",
    ],
    faqs: [
      { q: "How long until carpets are dry?", a: "Often the same day with good airflow. Thick piles may need overnight." },
      { q: "Do you clean Persian or delicate rugs?", a: "Yes, with a gentler method. Send photos so we choose the right approach." },
    ],
  },
  {
    slug: "deep-steam-cleaning",
    title: "Deep Steam Cleaning",
    short: "Hot steam for fabric, floors and detail.",
    intro:
      "High-temperature steam cleaning that loosens deep dirt and refreshes fabrics and hard surfaces — ideal when you want a deeper reset without harsh soaking.",
    icon: "steam",
    image: "/images/service-deep-steam-cleaning-after.webp",
    beforeImage: "/images/service-deep-steam-cleaning-before.webp",
    tags: ["Steam", "Fabric", "Floors"],
    includes: [
      "Steam pass on agreed surfaces",
      "Fabric and upholstery steam refresh",
      "Hard-floor steam mopping where suitable",
      "Detail work on edges and corners",
      "Quick dry-down tips after the visit",
    ],
    faqs: [
      { q: "Is steam safe for all floors?", a: "Most hard floors yes. Some sealed woods and delicate finishes need a milder method — we check first." },
      { q: "Does steam replace a full deep clean?", a: "It is excellent for sanitising and lifting soil. Heavily greasy kitchens still need a dedicated deep clean." },
    ],
  },
  {
    slug: "high-rise-window-cleaning",
    title: "High-Rise Window Cleaning",
    short: "Safe access for upper-floor glass.",
    intro:
      "Streak-free glass for apartments and mid-rise buildings — planned access, frames and tracks included, with safety as the first step.",
    icon: "buildingTall",
    image: "/images/service-high-rise-window-cleaning-after.webp",
    beforeImage: "/images/service-high-rise-window-cleaning-before.webp",
    tags: ["High-rise", "Glass", "Facades"],
    includes: [
      "Access and safety assessment",
      "Exterior and interior glass where reachable",
      "Frames, sills and tracks",
      "Hard-water spot treatment",
      "Streak-free squeegee finish",
    ],
    faqs: [
      { q: "How tall can you work?", a: "Low and mid-rise yes. For very tall facades, send photos and floor height so we can assess access." },
      { q: "Do you need building permission?", a: "Often yes for exterior work. We can advise what your society or building usually asks for." },
    ],
  },
  {
    slug: "window-glass-cleaning",
    title: "Window & Glass Cleaning",
    short: "Streak-free glass, inside and out.",
    intro:
      "Clear windows, mirrors and glass partitions without streaks — frames and tracks included for homes and shopfronts.",
    icon: "window",
    image: "/images/service-window-glass-cleaning-after.webp",
    beforeImage: "/images/service-window-glass-cleaning-before.webp",
    tags: ["Homes", "Shopfronts", "Glass"],
    includes: [
      "Glass washed and squeegeed streak-free",
      "Frames, sills and sliding tracks",
      "Mirrors and glass partitions",
      "Hard-water spot treatment",
      "Safe access for upper floors where feasible",
    ],
    faqs: [
      { q: "How often should glass be cleaned?", a: "Every one to three months, depending on dust and traffic in your area." },
      { q: "Do you clean shower glass too?", a: "Yes — scale and soap film on shower screens can be included." },
    ],
  },
  {
    slug: "exterior-pressure-washing",
    title: "Exterior & Pressure Washing",
    short: "Driveways, walls and outdoor surfaces reset.",
    intro:
      "Pressure washing for driveways, courtyards, outer walls and hard outdoor surfaces — dust, algae and tyre marks lifted so the outside matches the inside.",
    icon: "spray",
    image: "/images/service-exterior-pressure-washing-after.webp",
    beforeImage: "/images/service-exterior-pressure-washing-before.webp",
    tags: ["Exterior", "Driveway", "Pressure wash"],
    includes: [
      "Driveway and courtyard pressure wash",
      "Outer wall and skirting rinse",
      "Steps, ramps and entrance areas",
      "Algae and mould spot treatment",
      "Controlled runoff and tidy finish",
    ],
    faqs: [
      { q: "Will pressure washing damage paint?", a: "We adjust pressure for each surface. Fresh paint and soft renders get a gentler rinse." },
      { q: "Do you need a water supply on site?", a: "Yes — a tap connection is required. Tell us if water pressure is low." },
    ],
  },
  {
    slug: "pest-control-services",
    title: "Pest Control Services",
    short: "Targeted treatment for common household pests.",
    intro:
      "Inspection-led pest control for homes and workplaces — cockroaches, ants and other common pests treated with care around family spaces.",
    icon: "bug",
    image: "/images/service-pest-control-services-after.webp",
    beforeImage: "/images/service-pest-control-services-before.webp",
    tags: ["Pests", "Homes", "Offices"],
    includes: [
      "Site inspection and problem mapping",
      "Targeted treatment for reported pests",
      "Kitchen and washroom focus areas",
      "Safety guidance for people and pets",
      "Follow-up advice after treatment",
    ],
    faqs: [
      { q: "Is it safe for kids and pets?", a: "We use labelled products and give clear re-entry timing. Mention pets when you book." },
      { q: "How soon will we see results?", a: "Activity often drops within days. Heavy infestations may need a follow-up visit." },
    ],
  },
  {
    slug: "disinfecting-fogging",
    title: "Disinfecting Fogging",
    short: "Fine mist disinfection for whole rooms.",
    intro:
      "ULV fogging that reaches corners, soft furnishings and hard-to-wipe surfaces — useful after illness, before move-in, or for shared spaces.",
    icon: "fog",
    image: "/images/service-disinfecting-fogging-after.webp",
    beforeImage: "/images/service-disinfecting-fogging-before.webp",
    tags: ["Fogging", "Disinfect", "Spaces"],
    includes: [
      "Room prep and coverage plan",
      "ULV disinfectant fogging",
      "High-touch wipe-down where needed",
      "Ventilation and re-entry guidance",
      "Optional follow-up session",
    ],
    faqs: [
      { q: "How long until we can enter the room?", a: "Typically after the mist settles and the space is aired — we give exact timing on the day." },
      { q: "Does fogging replace regular cleaning?", a: "No. Fogging disinfects; dirt and grease still need a proper clean first or alongside." },
    ],
  },
  {
    slug: "floor-cleaning",
    title: "Floor Cleaning",
    short: "Hard floors scrubbed, rinsed and finished.",
    intro:
      "Dedicated floor cleaning for marble, tiles, vinyl and other hard surfaces — machine scrub where needed, edges detailed, finish restored.",
    icon: "layers",
    image: "/images/service-floor-cleaning-after.webp",
    beforeImage: "/images/service-floor-cleaning-before.webp",
    tags: ["Floors", "Marble", "Hard floors"],
    includes: [
      "Debris vacuum and dry prep",
      "Machine or hand scrub by floor type",
      "Edge and corner detailing",
      "Rinse and controlled dry-down",
      "Optional polish or seal on request",
    ],
    faqs: [
      { q: "Which floor types do you clean?", a: "Marble, porcelain, ceramic, vinyl and most sealed hard floors. Soft wood needs a gentler method — send photos." },
      { q: "Can you restore dull marble shine?", a: "Yes, polishing can be added. Light dullness often responds well; deep etch needs stone care." },
    ],
  },
  {
    slug: "tiles-cleaning",
    title: "Tiles Cleaning",
    short: "Tiles and grout lines brought back.",
    intro:
      "Focused tile and grout cleaning for kitchens, washrooms and floors — stains, soap film and dark grout lines scrubbed clean so surfaces look bright again.",
    icon: "grid",
    image: "/images/service-tiles-cleaning-after.webp",
    beforeImage: "/images/service-tiles-cleaning-before.webp",
    tags: ["Tiles", "Grout", "Washrooms"],
    includes: [
      "Tile face cleaning and rinse",
      "Grout deep-clean and whitening",
      "Soap scum and scale removal",
      "Corner and edge scrub",
      "Optional grout sealing on request",
    ],
    faqs: [
      { q: "Will dark grout turn white again?", a: "Most staining lifts. Old dyed or damaged grout may only lighten — we show you what to expect." },
      { q: "Do you clean wall tiles as well as floors?", a: "Yes — shower walls, kitchen splashbacks and floor tiles can all be included." },
    ],
  },
];

export function findService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
