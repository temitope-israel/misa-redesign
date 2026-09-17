"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiLocationMarker } from "react-icons/hi";

const FEATURED = {
  name: "Ulesh",
  status: "Now Selling",
  tagline: "Our AAA Rated Mixed Development Is On The Way",
  location: "Ikoyi, Lagos",
  description:
    "With each design, each concept and building, we tell a story. Whether it's a new home, an apartment building, or a unique office space, Ulesh reflects the client, and more essentially, the community vibe — a landmark mixed-use development built for modern Lagos living.",
  features: [
    "Premium Apartments",
    "Retail & Office Space",
    "24/7 Facility Management",
    "Smart Home Ready",
  ],
  image: "/images/featured-ulesh.jpg",
};

export default function FeaturedDevelopment() {
  return (
    <section className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${FEATURED.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
            </div>

            {/* Status badge, floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-4 -left-4 sm:top-6 sm:left-6 rounded-full bg-brand-600 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-lg"
            >
              {FEATURED.status}
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-600 uppercase">
              <span className="h-px w-8 bg-brand-500" />
              Featured Development
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              {FEATURED.name}
            </h2>

            <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
              <HiLocationMarker className="text-brand-600" size={16} />
              {FEATURED.location}
            </div>

            <p className="mt-3 text-lg md:text-xl font-medium text-slate-800">
              {FEATURED.tagline}
            </p>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              {FEATURED.description}
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-3">
              {FEATURED.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors group"
            >
              Explore {FEATURED.name}
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
