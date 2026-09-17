"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { HiOutlineSparkles, HiArrowUpRight, HiXMark } from "react-icons/hi2";

// Navigation items definition
interface NavItem {
  href: string;
  label: string;
}

const LINKS: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#developments", label: "Developments" },
  { href: "#blog", label: "News" },
];

/* -------------------------------------------------------------------------- */
/*                               LOGICAL SUB-COMPONENTS                       */
/* -------------------------------------------------------------------------- */

// 1. Geometric Luxury Architectural Logo
function Logo() {
  return (

      <a href="#home"
      className="group relative flex items-center gap-3 focus:outline-none"
    >
      {/* Geometric Icon Emblem */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/20 transition-all duration-300 group-hover:bg-brand-700 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-brand-600/30">
        <svg
          className="h-5 w-5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="text-xl font-extrabold tracking-[0.45em] text-brand-600 transition-colors group-hover:text-brand-600">
          MISA
        </span>
        <span className="text-[8px] font-bold tracking-[1.05em] text-slate-900 uppercase">
          LIMITED
        </span>
      </div>
    </a>
  );
}

// 2. Upgraded Interactive NavLink Component
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  hoveredNav: string | null;
  setHoveredNav: (href: string | null) => void;
}

function NavLink({
  href,
  label,
  isActive,
  hoveredNav,
  setHoveredNav,
}: NavLinkProps) {
  const isHovered = hoveredNav === href;

  return (

     <a href={href}
      onMouseEnter={() => setHoveredNav(href)}
      className="relative px-4 py-2 text-sm font-medium transition-colors focus:outline-none"
    >
      {isHovered && (
        <motion.span
          layoutId="hoverCapsule"
          className="absolute inset-0 rounded-xl bg-slate-100/80 border border-slate-200/60"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      )}

      <motion.span
        animate={{ y: isHovered ? -1 : 0 }}
        transition={{ duration: 0.15 }}
        className={`relative z-10 block transition-colors duration-200 ${
          isActive
            ? "text-brand-600 font-bold"
            : isHovered
              ? "text-brand-600 font-semibold"
              : "text-slate-600"
        }`}
      >
        {label}
      </motion.span>

      {isActive && (
        <motion.span
          layoutId="activeDot"
          className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-brand-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        />
      )}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*                               MAIN NAVBAR COMPONENT                        */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 },
    );

    LINKS.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuSheetVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const navItemVariants: Variants = {
    closed: { opacity: 0, y: 15 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 pointer-events-none">
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 md:px-8 transition-all duration-500 pointer-events-auto ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        {/* Floating Glass Shell */}
        <div
          className={`relative z-50 flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-slate-900/5"
              : "bg-white/50 backdrop-blur-md border border-white/60 shadow-sm"
          }`}
        >
          <Logo />

          {/* Desktop Navigation */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-1"
          >
            {LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeSection === link.href}
                hoveredNav={hoveredNav}
                setHoveredNav={setHoveredNav}
              />
            ))}
          </nav>

          {/* Call To Action Button (Brand Colored) */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-brand-600/20 transition-all hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30"
            >
              <HiOutlineSparkles className="h-4 w-4 text-white/90" />
              <span>Get in Touch</span>
              <HiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle — stays on top of the drawer at all times */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] md:hidden flex flex-col items-center justify-center gap-1.5 h-10 w-10 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 focus:outline-none transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="h-[2px] w-5 bg-slate-900 rounded-full origin-center transition-transform"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-[2px] w-5 bg-slate-900 rounded-full transition-opacity"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="h-[2px] w-5 bg-slate-900 rounded-full origin-center transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuSheetVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl md:hidden px-8 pt-32 pb-12 flex flex-col justify-between pointer-events-auto"
          >
            {/* Explicit close button, top-right, always visible regardless of scroll state */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 z-[60] flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <HiXMark className="h-5 w-5" />
            </button>

            <nav className="flex flex-col gap-4">
              {/* <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                // Navigation Index
              </span> */}
              {LINKS.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    key={link.href}
                    custom={i}
                    variants={navItemVariants}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between border-b border-slate-800/80 pb-4"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-mono transition-colors ${
                          isActive
                            ? "text-brand-400"
                            : "text-slate-500 group-hover:text-brand-400"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`text-2xl font-semibold tracking-tight transition-colors ${
                          isActive
                            ? "text-brand-400"
                            : "text-white group-hover:text-brand-300"
                        }`}
                      >
                        {link.label}
                      </span>
                    </div>
                    <HiArrowUpRight
                      className={`h-5 w-5 transition-transform ${
                        isActive
                          ? "text-brand-400 translate-x-0 translate-y-0"
                          : "text-slate-600 opacity-0 group-hover:opacity-100 group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                    />
                  </motion.a>
                );
              })}
            </nav>

            <motion.div
              custom={LINKS.length}
              variants={navItemVariants}
              className="flex flex-col gap-4"
            >

               <a href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700 active:scale-[0.98] transition-all"
              >
                <span>Inquire Now</span>
                <HiArrowUpRight className="h-4 w-4" />
              </a>
              <p className="text-center text-[11px] text-slate-500 tracking-wide">
                © {new Date().getFullYear()} MISA Limited
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}