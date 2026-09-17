"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineHomeModern,
  HiOutlineClipboardDocumentCheck,
  HiOutlineBuildingOffice2,
  HiOutlineScale,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi2";

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "sales-lettings",
    icon: HiOutlineHomeModern,
    title: "Sales & Lettings",
    subtitle: "Agency & Property Representation",
    description:
      "End-to-end support in buying, selling, and letting premium residential and commercial properties across prime Lagos corridors.",
    badge: "Agency",
    deliverables: [
      "Property valuation & market analysis",
      "Vetted buyer & tenant placement",
      "Seamless transaction conveyancing",
    ],
  },
  {
    id: "facility-management",
    icon: HiOutlineBuildingOffice2,
    title: "Facility Management",
    subtitle: "Long-term Asset Preservation",
    description:
      "Ongoing, professional management of residential and commercial developments — keeping every asset secure, maintained, and operational.",
    badge: "Asset Care",
    deliverables: [
      "24/7 onsite security & utility management",
      "Preventative structural maintenance",
      "Occupant relations & service charge care",
    ],
  },
  {
    id: "planning-approvals",
    icon: HiOutlineClipboardDocumentCheck,
    title: "Planning & Regulatory Approvals",
    subtitle: "Government & Statutory Sign-off",
    description:
      "Navigating complex Lagos state regulatory and planning approval processes on your behalf, from architectural filing to final sign-off.",
    badge: "Regulatory",
    deliverables: [
      "Lagos State Physical Planning compliance",
      "Building permit processing & documentation",
      "Environmental & structural certifications",
    ],
  },
  {
    id: "real-estate-advisory",
    icon: HiOutlineScale,
    title: "Real Estate & Conveyancing Advisory",
    subtitle: "Strategic Investment Consulting",
    description:
      "Expert guidance on title perfection, joint ventures, and high-yield property acquisitions backed by deep Lagos market intelligence.",
    badge: "Consulting",
    deliverables: [
      "Title perfection & Governor's Consent",
      "Joint-venture structure advisory",
      "Portfolio optimization strategies",
    ],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-brand-950 text-white overflow-hidden select-none"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-brand-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 h-96 w-96 rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-4 shadow-md">
            <HiOutlineSparkles className="h-4 w-4 text-brand-400" />
            <span>Integrated Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            More Than Development.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-300">
              Full-Lifecycle Care.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            From regulatory approvals to long-term asset management, we offer a
            total property care ecosystem under one trusted roof.
          </p>
        </motion.div>

        {/* Accordion + Showcase Split Layout */}
        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Accordion List (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const isActive = service.id === activeId;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`group relative rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-slate-900/90 border-brand-500/60 shadow-2xl shadow-brand-600/10"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                  }`}
                >
                  <div className="p-6 sm:p-7 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Service Icon Badge */}
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 shrink-0 ${
                          isActive
                            ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                            : "bg-slate-800 text-slate-400 group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono tracking-widest text-brand-400 uppercase">
                            0{i + 1} // {service.badge}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Expand Indicator Dot */}
                    <div
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-brand-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                          : "bg-slate-700 group-hover:bg-slate-500"
                      }`}
                    />
                  </div>

                  {/* Expandable Accordion Body (Mobile / Contextual View) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-slate-800/60 lg:hidden"
                      >
                        <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mt-4 space-y-2">
                          {service.deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 text-xs text-slate-300 font-medium"
                            >
                              <HiOutlineCheckCircle className="h-4 w-4 text-brand-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Operational Spotlight Card (5 Cols, Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-2xl p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Subtle Brand Ambient Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-600/10 rounded-full blur-2xl pointer-events-none" />

                {/* Capability Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400 border border-brand-500/30">
                      <activeService.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                        Spotlight Capability
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {activeService.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-brand-400 px-3 py-1 rounded-full bg-slate-800">
                    {activeService.badge}
                  </span>
                </div>

                {/* Description Body */}
                <p className="mt-6 text-sm text-slate-300 leading-relaxed font-normal">
                  {activeService.description}
                </p>

                {/* Key Deliverables Matrix */}
                <div className="mt-6 pt-6 border-t border-slate-800/80">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Deliverables & Scope
                  </h5>
                  <div className="space-y-3">
                    {activeService.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-slate-200 font-medium"
                      >
                        <HiOutlineCheckCircle className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Ready to inquire?
                  </span>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/30 hover:bg-brand-500 transition-all"
                  >
                    <span>Request Consultation</span>
                    <HiArrowRight className="h-3.5 w-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { motion, Variants } from "framer-motion";
// import {
//   HiOutlineHomeModern,
//   HiOutlineClipboardDocumentCheck,
//   HiOutlineBuildingOffice2,
//   HiOutlineScale,
//   HiArrowRight,
//   HiOutlineSparkles,
// } from "react-icons/hi2";

// interface ServiceItem {
//   id: string;
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   badge: string;
// }

// const SERVICES: ServiceItem[] = [
//   {
//     id: "sales-lettings",
//     icon: HiOutlineHomeModern,
//     title: "Sales & Lettings",
//     description:
//       "End-to-end representation in buying, selling, and letting luxury residential and commercial properties across Lagos.",
//     badge: "Agency & Brokerage",
//   },
//   {
//     id: "facility-management",
//     icon: HiOutlineBuildingOffice2,
//     title: "Facility Management",
//     description:
//       "Ongoing, professional asset care keeping every development secure, meticulously maintained, and operating seamlessly.",
//     badge: "Asset Care",
//   },
//   {
//     id: "planning-approvals",
//     icon: HiOutlineClipboardDocumentCheck,
//     title: "Planning Approvals",
//     description:
//       "Navigating complex regulatory procedures and planning documentation on your behalf, from filing to final sign-off.",
//     badge: "Regulatory",
//   },
//   {
//     id: "real-estate-advisory",
//     icon: HiOutlineScale,
//     title: "Real Estate Advisory",
//     description:
//       "Strategic guidance on conveyancing, land joint ventures, and capital investments backed by deep Lagos market intelligence.",
//     badge: "Consulting",
//   },
// ];

// // Motion Variants for Orchestrated Entrance Animation
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.1,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 28 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden select-none"
//     >
//       {/* Background Architectural Mesh Lines */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

//       {/* Subtle Glowing Accent Orbs */}
//       <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-brand-600/20 blur-[130px] pointer-events-none" />
//       <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-indigo-600/15 blur-[130px] pointer-events-none" />

//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//           {/* Left Column: Editorial Brand Statement (5 Cols) */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-5 lg:sticky lg:top-32"
//           >
//             {/* Eyebrow Pill */}
//             <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700/80 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-6 shadow-md">
//               <HiOutlineSparkles className="h-4 w-4 text-brand-400" />
//               <span>Full-Lifecycle Capabilities</span>
//             </div>

//             {/* Headline */}
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
//               More Than Development.{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-300">
//                 End-to-End Excellence.
//               </span>
//             </h2>

//             {/* Subtitle */}
//             <p className="mt-6 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
//               We manage every stage of the property ecosystem under one trusted
//               roof — ensuring long-term asset value, regulatory compliance, and
//               seamless client experiences.
//             </p>

//             {/* Direct Consultation Link */}
//             <div className="mt-8 pt-8 border-t border-slate-800/80">
//               <motion.a
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 href="#contact"
//                 className="inline-flex items-center gap-3 rounded-full bg-brand-600 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/30 hover:bg-brand-500 transition-all"
//               >
//                 <span>Book Advisory Session</span>
//                 <HiArrowRight className="h-4 w-4" />
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* Right Column: 2x2 Feature Matrix Grid (7 Cols) */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-60px" }}
//             className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
//           >
//             {SERVICES.map((service, i) => {
//               const Icon = service.icon;
//               return (
//                 <motion.div
//                   key={service.id}
//                   variants={cardVariants}
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.3, ease: "easeOut" }}
//                   className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/60 backdrop-blur-xl p-7 hover:border-brand-500/50 hover:bg-slate-950/90 transition-all duration-300 shadow-xl"
//                 >
//                   {/* Top Header: Badge & Icon */}
//                   <div>
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/20 border border-brand-500/30 text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
//                         <Icon className="h-6 w-6" />
//                       </div>

//                       <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
//                         [0{i + 1}]
//                       </span>
//                     </div>

//                     <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400 block mb-1">
//                       {service.badge}
//                     </span>

//                     <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors duration-200">
//                       {service.title}
//                     </h3>

//                     <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
//                       {service.description}
//                     </p>
//                   </div>

//                   {/* Card Footer Link */}
//                   <a
//                     href="#contact"
//                     className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-brand-400 transition-colors"
//                   >
//                     <span>Inquire Now</span>
//                     <HiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
//                   </a>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion, Variants } from "framer-motion";
// import {
//   HiOutlineHomeModern,
//   HiOutlineClipboardDocumentCheck,
//   HiOutlineBuildingOffice2,
//   HiOutlineScale,
//   HiArrowRight,
//   HiOutlineChatBubbleLeftRight,
// } from "react-icons/hi2";

// interface ServiceItem {
//   id: string;
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   badge: string;
// }

// const SERVICES: ServiceItem[] = [
//   {
//     id: "sales-lettings",
//     icon: HiOutlineHomeModern,
//     title: "Sales & Lettings",
//     description:
//       "End-to-end representation in buying, selling, and letting luxury residential and commercial properties across Lagos.",
//     badge: "Agency",
//   },
//   {
//     id: "facility-management",
//     icon: HiOutlineBuildingOffice2,
//     title: "Facility Management",
//     description:
//       "Ongoing, professional asset care keeping every development secure, meticulously maintained, and operating seamlessly.",
//     badge: "Asset Care",
//   },
//   {
//     id: "planning-approvals",
//     icon: HiOutlineClipboardDocumentCheck,
//     title: "Planning Approvals",
//     description:
//       "Navigating complex regulatory procedures and planning documentation on your behalf, from filing to final sign-off.",
//     badge: "Regulatory",
//   },
//   {
//     id: "real-estate-advisory",
//     icon: HiOutlineScale,
//     title: "Real Estate Advisory",
//     description:
//       "Strategic guidance on conveyancing, land joint ventures, and capital investments backed by deep Lagos market intelligence.",
//     badge: "Consulting",
//   },
// ];

// // Motion Variants for Orchestrated Entrance Animation
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.1,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden select-none"
//     >
//       {/* Dynamic Ambient Background Glows */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.15, 0.25, 0.15],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-600/30 blur-[130px] pointer-events-none"
//       />
//       <motion.div
//         animate={{
//           scale: [1, 1.15, 1],
//           opacity: [0.1, 0.2, 0.1],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2,
//         }}
//         className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[140px] pointer-events-none"
//       />

//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//           className="max-w-3xl mx-auto text-center"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-4 shadow-md">
//             <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
//             <span>Integrated Capabilities</span>
//           </div>

//           <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
//             More Than Development
//           </h2>

//           <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mx-auto">
//             A full-lifecycle suite of real estate services delivered under one
//             trusted, advisory-driven roof.
//           </p>
//         </motion.div>

//         {/* Services Cards Grid with Staggered Entrance */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-60px" }}
//           className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {SERVICES.map((service, i) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={service.id}
//                 variants={cardVariants}
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="group relative flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl p-7 hover:border-brand-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl"
//               >
//                 {/* Subtle Inner Card Glow on Hover */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-brand-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//                 <div>
//                   {/* Top Header Row: Icon + Badge */}
//                   <div className="flex items-center justify-between">
//                     <motion.div
//                       whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
//                       transition={{ duration: 0.3 }}
//                       className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/90 text-white shadow-lg shadow-brand-600/25 group-hover:bg-brand-500 transition-colors"
//                     >
//                       <Icon className="h-6 w-6" />
//                     </motion.div>

//                     <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60">
//                       0{i + 1} // {service.badge}
//                     </span>
//                   </div>

//                   {/* Title & Body Description */}
//                   <h3 className="mt-6 text-xl font-bold text-white group-hover:text-brand-300 transition-colors duration-200">
//                     {service.title}
//                   </h3>

//                   <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Footer Action Trigger */}
//                 <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-brand-400 transition-colors">
//                   <span>Inquire Service</span>
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
//                     <HiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom Consultation Conversion Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
//           className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
//         >
//           <div className="flex items-center gap-4">
//             <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/20 text-brand-400 border border-brand-500/30 shrink-0">
//               <HiOutlineChatBubbleLeftRight className="h-6 w-6" />
//             </div>
//             <div>
//               <h3 className="text-lg sm:text-xl font-bold text-white">
//                 Need Tailored Real Estate Advisory?
//               </h3>
//               <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
//                 Book a private session with our conveyancing and asset
//                 management specialists.
//               </p>
//             </div>
//           </div>

//           <motion.a
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             href="#contact"
//             className="inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/30 hover:bg-brand-500 transition-all shrink-0"
//           >
//             <span>Request Advisory</span>
//             <HiArrowRight className="h-4 w-4" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
