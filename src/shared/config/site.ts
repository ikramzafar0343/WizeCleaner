/**
 * Every business detail lives here. Replace the placeholder values before
 * going live — nothing else in the codebase needs to change.
 */
export const site = {
  name: "WizeCleaner",
  legalName: "WizeCleaner Cleaning Services",
  tagline: "Professional cleaning for homes, offices and sites",
  description:
    "Deep cleaning, post-construction, move-in/out, sofa and carpet, glass, marble and solar panel cleaning. Message us on WhatsApp for a quick quote.",
  url: "https://www.example.com",
  city: "Lahore",
  country: "PK",
  /** International format, digits only — used for wa.me links. */
  whatsapp: "923000000000",
  phoneDisplay: "+92 300 0000000",
  email: "hello@example.com",
  address: "Your street address, Lahore",
  hours: [
    { days: "Monday – Saturday", time: "8:00 am – 8:00 pm" },
    { days: "Sunday", time: "On request" },
  ],
  areas: ["DHA", "Gulberg", "Johar Town", "Bahria Town", "Model Town", "Cantt"],
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
