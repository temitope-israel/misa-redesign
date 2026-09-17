"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineArrowUpRight,
  HiOutlineChevronUp,
} from "react-icons/hi2";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "@/components/Logo";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About MISA" },
  { href: "#services", label: "Capabilities" },
  { href: "#developments", label: "Portfolio" },
  { href: "#contact", label: "Contact Us" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-950 text-brand-50 overflow-hidden select-none border-t border-brand-800/60">
      {/* Top Subtle Brand Line Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      {/* Architectural Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Ambient Brand Light Accents */}
      <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-brand-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-brand-800/20 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12 pt-20 pb-12">
        {/* Main Footer Content Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Column 1: Brand & Overview (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="[&_span:first-child]:text-white [&_span:last-child]:text-brand-300">
                <Logo />
              </div>

              <p className="mt-5 text-xs sm:text-sm text-brand-100/70 leading-relaxed max-w-md font-normal">
                <strong className="text-white">MISA Limited</strong> is an integrated property development and real estate advisory firm delivering bespoke residential landmarks, sales, lettings, and asset care across prime Lagos corridors.
              </p>
            </div>

            {/* Social Network Channels */}
            <div className="mt-8 flex items-center gap-2.5">
              {[
                { Icon: FaInstagram, href: "#", label: "Instagram" },
                { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { Icon: FaTwitter, href: "#", label: "Twitter" },
                { Icon: FaFacebookF, href: "#", label: "Facebook" },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-brand-100/80 hover:text-white hover:bg-brand-600 hover:border-brand-500 transition-all"
                >
                  <item.Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-6">
              Navigation
            </h4>

            <ul className="space-y-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-brand-100/70 hover:text-white transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-600 group-hover:bg-brand-300 transition-colors" />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ikoyi Headquarters Info (4 Cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-6">
              Ikoyi Headquarters
            </h4>

            <div className="space-y-3.5">
              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=6+Olawale+Dawodu+Rd+Ikoyi+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600/30 text-brand-300 border border-brand-500/30 shrink-0 mt-0.5">
                  <HiOutlineMapPin className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-brand-100/50 uppercase block">
                    Corporate Address
                  </span>
                  <span className="text-xs font-semibold text-brand-50 group-hover:text-brand-300 transition-colors">
                    6 Olawale Dawodu Rd, Ikoyi, Lagos
                  </span>
                </div>
                <HiOutlineArrowUpRight className="h-3.5 w-3.5 text-brand-100/50 group-hover:text-brand-300 transition-colors shrink-0" />
              </a>

              {/* Email */}
              <a
                href="mailto:info@misaltd.com"
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-brand-300 shrink-0">
                  <HiOutlineEnvelope className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-brand-100/50 uppercase block">
                    Direct Email
                  </span>
                  <span className="text-xs font-semibold text-brand-50 group-hover:text-brand-300 transition-colors">
                    info@misaltd.com
                  </span>
                </div>
                <HiOutlineArrowUpRight className="h-3.5 w-3.5 text-brand-100/50 group-hover:text-brand-300 transition-colors shrink-0" />
              </a>

              {/* Phone */}
              <a
                href="tel:+2349163000888"
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-brand-300 shrink-0">
                  <HiOutlinePhone className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-brand-100/50 uppercase block">
                    Direct Line
                  </span>
                  <span className="text-xs font-semibold text-brand-50 group-hover:text-brand-300 transition-colors">
                    +234 916 300 0888
                  </span>
                </div>
                <HiOutlineArrowUpRight className="h-3.5 w-3.5 text-brand-100/50 group-hover:text-brand-300 transition-colors shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-100/50">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} MISA Limited. All rights reserved.</p>
            <span className="hidden sm:inline text-brand-800">•</span>
            <div className="flex items-center gap-3">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll-to-Top Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-mono text-brand-100/70 hover:text-white hover:bg-brand-600 hover:border-brand-500 transition-all shadow-md cursor-pointer"
          >
            <span>TOP</span>
            <HiOutlineChevronUp className="h-3.5 w-3.5 text-brand-300" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}