import localFont from "next/font/local";

/** Nourd — body 400, headings 600. Only these two weights ship. */
export const nourd = localFont({
  src: [
    { path: "../../fonts/nourd_regular.woff", weight: "400", style: "normal" },
    { path: "../../fonts/nourd_semi_bold.woff", weight: "600", style: "normal" },
  ],
  variable: "--font-nourd",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
