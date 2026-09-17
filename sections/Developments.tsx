"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiArrowRight,
  HiOutlineMapPin,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

type Status = "Sold Out" | "Now Selling" | "Coming Soon";

interface Development {
  id: string;
  name: string;
  status: Status;
  location: string;
  type: string;
  description: string;
  image: string;
  href: string;
}

const DEVELOPMENTS: Development[] = [
  {
    id: "ikona",
    name: "Ikona Residences",
    status: "Now Selling",
    location: "Ikoyi, Lagos",
    type: "Luxury Apartments",
    description:
      "Elegant, thoughtfully designed apartments built for a new standard of comfort, privacy, and community.",
    image: "/images/dev-ikona.jpg",
    href: "#contact",
  },
  {
    id: "ulesh",
    name: "Ulesh Tower",
    status: "Now Selling",
    location: "Ikoyi, Lagos",
    type: "Mixed-Use Landmark",
    description:
      "Our AAA-rated mixed-use development — combining luxury apartments, retail spaces, and corporate offices.",
    image: "/images/dev-ulesh.jpg",
    href: "#contact",
  },
  {
    id: "missi",
    name: "Missi Court",
    status: "Sold Out",
    location: "Lekki Phase 1, Lagos",
    type: "Residential Community",
    description:
      "A fully subscribed residential development delivering premium family housing and modern amenities.",
    image: "/images/dev-missi.jpg",
    href: "#contact",
  },
];

const FILTER_TABS = ["All", "Now Selling", "Sold Out"] as const;

export default function Developments() {
  const [activeTab, setActiveTab] =
    useState<(typeof FILTER_TABS)[number]>("All");

  const filteredDevelopments = DEVELOPMENTS.filter((dev) => {
    if (activeTab === "All") return true;
    return dev.status === activeTab;
  });

  return (
    <section
      id="developments"
      className="relative py-24 md:py-32 bg-slate-50/50 overflow-hidden"
    >
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-slate-200/80">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-700 uppercase mb-4 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600 animate-pulse" />
              <span>Architectural Portfolio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Flagship Developments
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Explore our portfolio of ongoing landmark projects and fully
              subscribed residential developments across prime Lagos corridors.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex items-center gap-2 p-1.5 rounded-full bg-white border border-slate-200 shadow-sm self-start md:self-auto"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200 focus:outline-none ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeDevTab"
                      className="absolute inset-0 rounded-full bg-slate-900 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Developments Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDevelopments.map((dev, i) => (
              <motion.a
                key={dev.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                href={dev.href}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-brand-300/60 transition-all duration-500"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                    style={{ backgroundImage: `url(${dev.image})` }}
                  />

                  {/* Subtle Shading Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    {dev.status === "Now Selling" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white shadow-lg shadow-brand-600/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                        Now Selling
                      </span>
                    )}

                    {dev.status === "Sold Out" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-slate-300 shadow-md">
                        Sold Out
                      </span>
                    )}

                    {dev.status === "Coming Soon" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white shadow-md">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Location Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/60 backdrop-blur-md px-3 py-1.5 border border-white/20">
                      <HiOutlineMapPin className="h-3.5 w-3.5 text-brand-400" />
                      <span>{dev.location}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/60 backdrop-blur-md px-3 py-1.5 border border-white/20 text-slate-300">
                      <HiOutlineBuildingOffice2 className="h-3.5 w-3.5 text-slate-300" />
                      <span>{dev.type}</span>
                    </div>
                  </div>
                </div>

                {/* Content Details Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors duration-200">
                      {dev.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {dev.description}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-600 transition-colors">
                      {dev.status === "Sold Out"
                        ? "View Archive"
                        : "Inquire Now"}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Partnership Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-16 rounded-3xl bg-brand-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Have Land or Joint Venture Opportunities?
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              We collaborate with private landowners, institutions, and
              corporate entities for high-yield property developments across
              prime Lagos corridors.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/30 hover:bg-brand-500 transition-all shrink-0"
          >
            <span>Partner With Us</span>
            <HiArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
