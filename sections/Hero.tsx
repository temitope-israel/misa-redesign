"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiChevronLeft,
  HiChevronRight,
  HiArrowRight,
  HiOutlineDocumentDownload,
  HiOutlineCalendar,
} from "react-icons/hi";
import Typewriter from "@/components/Typewriter";

interface SlideCTA {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryIcon?: "download" | "calendar";
}

interface Slide {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  cta: SlideCTA;
}

const SLIDES: Slide[] = [
  {
    image: "/images/hero-1.jpg",
    tag: "AAA Rated Development",
    title: "Building Lagos's Skyline, One Landmark at a Time",
    subtitle:
      "Bespoke residential and mixed-use developments crafted with uncompromising precision and world-class architecture.",
    cta: {
      primaryLabel: "Explore Developments",
      primaryHref: "#developments",
      secondaryLabel: "Download Brochure",
      secondaryHref: "#contact",
      secondaryIcon: "download",
    },
  },
  {
    image: "/images/hero-2.jpg",
    tag: "Exclusive Residence",
    title: "Ikona — Premium Living, Redefined",
    subtitle:
      "Luxury 2 & 3 bedroom apartments designed for a new standard of modern elegance, privacy, and community.",
    cta: {
      primaryLabel: "View Floorplans",
      primaryHref: "#developments",
      secondaryLabel: "Schedule Inspection",
      secondaryHref: "#contact",
      secondaryIcon: "calendar",
    },
  },
  {
    image: "/images/hero-3.jpg",
    tag: "Corporate Advisory",
    title: "Your Partner in Commercial Property Development",
    subtitle:
      "From concept to keys — sales, lettings, facility management, and strategic advisory under one roof.",
    cta: {
      primaryLabel: "Book Consultation",
      primaryHref: "#contact",
      secondaryLabel: "Our Portfolio",
      secondaryHref: "#about",
    },
  },
];

const AUTOPLAY_MS = 9500;

export default function Hero() {
  const [index, setIndex] = useState<number>(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Continuous Uninterrupted Autoplay
  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, index]);

  const slide = SLIDES[index];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-brand-950 text-white select-none"
    >
      {/* Background Imagery Canvas */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* Ken Burns Zoom Effect */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Cinematic Contrast Masking */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-brand-950/20 to-brand-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Layout Layer */}
      <div className="relative z-10 flex h-full items-end pb-16 sm:pb-20 pt-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col justify-end h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Eyebrow Label */}
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-brand-950/80 backdrop-blur-md border border-white/10 px-4 py-1.5 mb-5 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                    </span>
                    <span className="text-xs font-bold tracking-widest text-brand-300 uppercase">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Fixed-Height Title Area (Prevents Layout Jumps) */}
                  <div className="min-h-[110px] sm:min-h-[130px] md:min-h-[160px] flex items-center">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                      <Typewriter
                        text={slide.title}
                        speed={120}
                        startDelay={500}
                      />
                    </h1>
                  </div>

                  {/* Subtitle */}
                  <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                    {slide.subtitle}
                  </p>

                  {/* Call To Actions */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={slide.cta.primaryHref}
                      className="group inline-flex items-center gap-3 rounded-full bg-brand-600 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-xl shadow-brand-600/30 hover:bg-brand-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      <span>{slide.cta.primaryLabel}</span>
                      <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.a>

                    {slide.cta.secondaryLabel && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={slide.cta.secondaryHref}
                        className="inline-flex items-center gap-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition-all shadow-lg"
                      >
                        {slide.cta.secondaryIcon === "download" && (
                          <HiOutlineDocumentDownload className="h-4 w-4 text-brand-400" />
                        )}
                        {slide.cta.secondaryIcon === "calendar" && (
                          <HiOutlineCalendar className="h-4 w-4 text-brand-400" />
                        )}
                        <span>{slide.cta.secondaryLabel}</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Bottom Navigation Dock (4 cols) */}
            <div className="lg:col-span-4 flex lg:justify-end items-center gap-4">
              <div className="flex items-center gap-3 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 px-5 py-3 shadow-2xl">
                {/* Arrow Controls */}
                <div className="flex items-center gap-1 border-r border-white/15 pr-3">
                  <button
                    onClick={prev}
                    aria-label="Previous slide"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                  >
                    <HiChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next slide"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                  >
                    <HiChevronRight size={20} />
                  </button>
                </div>

                {/* Progress Bar & Counter */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    0{index + 1}
                  </span>

                  <div className="relative h-1 w-20 rounded-full bg-white/20 overflow-hidden">
                    <motion.div
                      key={index}
                      initial={{ x: "-100%" }}
                      animate={{ x: "0%" }}
                      transition={{
                        duration: AUTOPLAY_MS / 1000,
                        ease: "linear",
                      }}
                      className="h-full w-full bg-brand-500 rounded-full"
                    />
                  </div>

                  <span className="text-xs font-mono text-slate-500 tracking-wider">
                    0{SLIDES.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right-Side Vertical Slide Rail (Hidden on small mobile) */}
      <div className="hidden sm:flex fixed right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "h-8 w-2 bg-brand-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                : "h-2 w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useState, useCallback } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   HiChevronLeft,
//   HiChevronRight,
//   HiArrowRight,
//   HiOutlineDocumentDownload,
//   HiOutlineCalendar,
// } from "react-icons/hi";
// import Typewriter from "@/components/Typewriter";

// interface SlideCTA {
//   primaryLabel: string;
//   primaryHref: string;
//   secondaryLabel?: string;
//   secondaryHref?: string;
//   secondaryIcon?: "download" | "calendar";
// }

// interface Slide {
//   image: string;
//   tag: string;
//   title: string;
//   subtitle: string;
//   cta: SlideCTA;
// }

// const SLIDES: Slide[] = [
//   {
//     image: "/images/hero-1.jpg",
//     tag: "AAA Rated Development",
//     title: "Building Lagos's Skyline, One Landmark at a Time",
//     subtitle:
//       "Bespoke residential and mixed-use developments crafted with uncompromising precision and world-class architecture.",
//     cta: {
//       primaryLabel: "Explore Developments",
//       primaryHref: "#developments",
//       secondaryLabel: "Download Brochure",
//       secondaryHref: "#contact",
//       secondaryIcon: "download",
//     },
//   },
//   {
//     image: "/images/hero-2.jpg",
//     tag: "Exclusive Residence",
//     title: "Ikona — Premium Living, Redefined",
//     subtitle:
//       "Luxury 2 & 3 bedroom apartments designed for a new standard of modern elegance, privacy, and community.",
//     cta: {
//       primaryLabel: "View Floorplans",
//       primaryHref: "#developments",
//       secondaryLabel: "Schedule Inspection",
//       secondaryHref: "#contact",
//       secondaryIcon: "calendar",
//     },
//   },
//   {
//     image: "/images/hero-3.jpg",
//     tag: "Corporate Advisory",
//     title: "Your Partner in Commercial Property Development",
//     subtitle:
//       "From concept to keys — sales, lettings, facility management, and strategic advisory under one roof.",
//     cta: {
//       primaryLabel: "Book Consultation",
//       primaryHref: "#contact",
//       secondaryLabel: "Our Portfolio",
//       secondaryHref: "#about",
//     },
//   },
// ];

// const AUTOPLAY_MS = 8500;

// export default function Hero() {
//   const [index, setIndex] = useState<number>(0);

//   const next = useCallback(() => {
//     setIndex((i) => (i + 1) % SLIDES.length);
//   }, []);

//   const prev = useCallback(() => {
//     setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
//   }, []);

//   // Continuous Uninterrupted Autoplay
//   useEffect(() => {
//     const timer = setInterval(next, AUTOPLAY_MS);
//     return () => clearInterval(timer);
//   }, [next, index]);

//   const slide = SLIDES[index];

//   return (
//     <section
//       id="home"
//       className="relative h-screen min-h-[720px] w-full overflow-hidden bg-slate-950 text-white select-none pt-24 pb-8 px-4 sm:px-6 lg:px-8 flex items-center"
//     >
//       {/* Background Subtle Gradient Mesh */}
//       <div className="absolute inset-0 bg-radial from-slate-900/60 via-slate-950 to-slate-950" />

//       {/* Main Split Grid Layout */}
//       <div className="relative z-10 mx-auto w-full max-w-7xl h-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

//         {/* Left Column: Editorial Glass Content Panel (5 cols) */}
//         <div className="lg:col-span-5 flex flex-col justify-between h-full max-h-[600px] z-20">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 10 }}
//               transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//               className="flex flex-col justify-center h-full rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-2xl shadow-slate-950/80"
//             >
//               {/* Eyebrow Tag */}
//               <div className="flex items-center gap-2.5 mb-4">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
//                 </span>
//                 <span className="text-xs font-bold tracking-widest text-brand-400 uppercase">
//                   {slide.tag}
//                 </span>
//               </div>

//               {/* Title Area with Layout Height Containment */}
//               <div className="min-h-[110px] sm:min-h-[130px] md:min-h-[150px] flex items-center">
//                 <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.18] text-white">
//                   <Typewriter text={slide.title} speed={120} startDelay={500} />
//                 </h1>
//               </div>

//               {/* Subtitle */}
//               <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed">
//                 {slide.subtitle}
//               </p>

//               {/* Action CTAs */}
//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 <motion.a
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   href={slide.cta.primaryHref}
//                   className="group inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/30 hover:bg-brand-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
//                 >
//                   <span>{slide.cta.primaryLabel}</span>
//                   <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </motion.a>

//                 {slide.cta.secondaryLabel && (
//                   <motion.a
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     href={slide.cta.secondaryHref}
//                     className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
//                   >
//                     {slide.cta.secondaryIcon === "download" && (
//                       <HiOutlineDocumentDownload className="h-4 w-4 text-brand-400" />
//                     )}
//                     {slide.cta.secondaryIcon === "calendar" && (
//                       <HiOutlineCalendar className="h-4 w-4 text-brand-400" />
//                     )}
//                     <span>{slide.cta.secondaryLabel}</span>
//                   </motion.a>
//                 )}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right Column: Imagery Canvas & Control Bar (7 cols) */}
//         <div className="lg:col-span-7 relative h-full max-h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
//           {/* Background Images */}
//           <AnimatePresence initial={false}>
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//               className="absolute inset-0"
//             >
//               {/* Ken Burns Zoom Effect */}
//               <motion.div
//                 initial={{ scale: 1 }}
//                 animate={{ scale: 1.07 }}
//                 transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               />

//               {/* Image Vignette Shading */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
//             </motion.div>
//           </AnimatePresence>

//           {/* Control Dock (Embedded Bottom Corner of Right Frame) */}
//           <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4 rounded-full bg-slate-950/80 backdrop-blur-xl border border-white/15 px-5 py-2.5 shadow-xl">
//             {/* Slide Index */}
//             <div className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-slate-400">
//               <span className="text-white font-bold">0{index + 1}</span>
//               <span className="text-slate-600">/</span>
//               <span>0{SLIDES.length}</span>
//             </div>

//             {/* Progress Bar */}
//             <div className="relative h-1 w-16 sm:w-20 rounded-full bg-white/15 overflow-hidden">
//               <motion.div
//                 key={index}
//                 initial={{ x: "-100%" }}
//                 animate={{ x: "0%" }}
//                 transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
//                 className="h-full w-full bg-brand-500 rounded-full"
//               />
//             </div>

//             {/* Arrow Navigation */}
//             <div className="flex items-center gap-1 border-l border-white/15 pl-3">
//               <button
//                 onClick={prev}
//                 aria-label="Previous slide"
//                 className="flex h-7 w-7 items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
//               >
//                 <HiChevronLeft size={16} />
//               </button>
//               <button
//                 onClick={next}
//                 aria-label="Next slide"
//                 className="flex h-7 w-7 items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
//               >
//                 <HiChevronRight size={16} />
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
