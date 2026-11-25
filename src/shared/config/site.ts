/**
 * Every business detail lives here. Replace the placeholder values before
 * going live — nothing else in the codebase needs to change.
 */
export const site = {
  name: "WizeCleaner",
  legalName: "WizeCleaner Cleaning Services",
  tagline: "Professional cleaning for homes, offices and sites",
  description:
    "House deep cleaning, sofa, kitchen, washroom, floors, tiles, windows, commercial cleaning, pest control and more across Lahore, Islamabad and major Punjab cities. Message us on WhatsApp for a quick quote.",
  url: "https://www.example.com",
  /** Business base / address locality. */
  city: "Lahore",
  /** Short phrase for coverage copy across the site. */
  serviceRegion: "Lahore, Islamabad and major Punjab cities",
  country: "PK",
  /** International format, digits only — used for wa.me links. */
  whatsapp: "923025080203",
  phoneDisplay: "0302 5080203",
  email: "hello@example.com",
  address: "Your street address, Lahore",
  hours: [
    { days: "Monday – Saturday", time: "8:00 am – 8:00 pm" },
    { days: "Sunday", time: "On request" },
  ],
  /** Cities we cover (plus major towns nearby). */
  areas: ["Lahore", "Islamabad", "Sialkot", "Faisalabad", "Gujranwala", "Sheikhupura"],
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
