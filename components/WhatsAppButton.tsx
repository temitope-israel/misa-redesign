"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "2349163000888"; // international format, no +, no spaces
const DEFAULT_MESSAGE =
  "Hi MISA Limited, I'd like to know more about your developments.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE,
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60] flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30"
    >
      {/* pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />

      <FaWhatsapp size={28} className="relative text-white md:size-8" />

      {/* tooltip, desktop only */}
      <span className="pointer-events-none absolute right-full mr-3 hidden md:block whitespace-nowrap rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-medium text-white opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
        Chat with us
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 h-2 w-2 rotate-45 bg-slate-900" />
      </span>
    </motion.a>
  );
}
