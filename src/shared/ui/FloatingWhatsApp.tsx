"use client";

import { motion } from "motion/react";
import { whatsappLink } from "@/shared/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Always-reachable WhatsApp button in the bottom corner. */
export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.7)] md:bottom-7 md:right-7"
    >
      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40 [animation-duration:2.4s]" />
      <WhatsAppIcon className="relative size-7" />
    </motion.a>
  );
}
