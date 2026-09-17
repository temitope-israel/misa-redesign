

"use client";

import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiCheckCircle,
  HiOutlineDocumentText,
  HiOutlineSparkles
} from "react-icons/hi2";
import Counter from "@/components/Counter";

const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 130, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Satisfied Clients" },
  { value: 100, suffix: "%", label: "Quality Rating" },
];

const HIGHLIGHTS = [
    
  "End-to-end property development & construction",
  "Full facility management & asset care",
  "Conveyancing, advisory & regulatory approvals",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Visual Media Card & Floating Badge (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Architectural Showcase Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 aspect-[4/5] bg-slate-100">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: "url('/images/hero-1.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <p className="text-xs font-bold tracking-widest text-brand-600 uppercase">
                  Lagos, Nigeria
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Crafting Landmarks Across Prime Corridors
                </h3>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -top-6 -right-6 items-center gap-3 rounded-2xl bg-slate-900 text-white p-4 shadow-xl border border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                <HiOutlineSparkles className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400">Established</span>
                <span className="text-sm font-bold tracking-wider">2012</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Stats Grid (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-600 uppercase mb-4">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              <span>Who We Are</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              An Integrated Real Estate Group Built on Excellence
            </h2>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              MISA Limited specializes in delivering bespoke residential developments and mixed-use landmarks. From architectural concept to key delivery and asset management, we operate under one unified, trusted standard.
            </p>

            {/* Bulleted Highlights */}
            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <HiCheckCircle className="h-5 w-5 text-brand-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Clean Integrated 2x2 Stats Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-1 text-xs font-medium text-slate-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Conversion Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#developments"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-600 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition-all"
              >
                <span>Explore Developments</span>
                <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-800 hover:bg-slate-50 transition-colors shadow-xs"
              >
                <HiOutlineDocumentText className="h-4 w-4 text-brand-600" />
                <span>Download Profile</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import {
//   HiArrowRight,
//   HiOutlineShieldCheck,
//   HiOutlineHomeModern,
//   HiOutlineBuildingOffice2
// } from "react-icons/hi2";
// import Counter from "@/components/Counter";

// interface StatItem {
//   value: number;
//   suffix: string;
//   label: string;
//   description: string;
// }

// const STATS: StatItem[] = [
//   {
//     value: 12,
//     suffix: "+",
//     label: "Years of Excellence",
//     description: "Pioneering luxury developments across prime Lagos locations."
//   },
//   {
//     value: 30,
//     suffix: "+",
//     label: "Projects Delivered",
//     description: "Bespoke residential & commercial landmarks built to last."
//   },
//   {
//     value: 500,
//     suffix: "+",
//     label: "Happy Homeowners",
//     description: "Families & investors trusting our lifecycle management."
//   },
//   {
//     value: 100,
//     suffix: "%",
//     label: "AAA Rated Quality",
//     description: "Uncompromising engineering standards & conveyancing."
//   },
// ];

// const FEATURES = [
//   { icon: HiOutlineBuildingOffice2, label: "Integrated Property Advisory" },
//   { icon: HiOutlineHomeModern, label: "Full-Lifecycle Facility Management" },
//   { icon: HiOutlineShieldCheck, label: "End-to-End Planning & Approval" },
// ];

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative py-24 md:py-32 bg-slate-50/50 overflow-hidden"
//     >
//       {/* Background Decorative Grid Accent */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

//           {/* Left Column: Narrative Content (7 Cols) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-7"
//           >
//             {/* Section Eyebrow Header */}
//             <div className="inline-flex items-center gap-2.5 rounded-full bg-brand-50 border border-brand-200/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-700 uppercase mb-6 shadow-sm">
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-600 animate-pulse" />
//               Who We Are
//             </div>

//             {/* Headline */}
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
//               An Integrated Real Estate Group,{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-indigo-600">
//                 Built on Trust
//               </span>
//             </h2>

//             {/* Body Copy */}
//             <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
//               <strong className="font-semibold text-slate-900">MISA Limited</strong> is a premier property development firm specializing in the design, construction, and delivery of bespoke residential landmarks across Lagos. Beyond building, we manage the complete real estate ecosystem — from planning approvals and conveyancing to sales, lettings, and long-term facility management.
//             </p>

//             {/* Scannable Feature Highlights */}
//             <div className="mt-8 flex flex-wrap gap-3">
//               {FEATURES.map((feat) => {
//                 const Icon = feat.icon;
//                 return (
//                   <div
//                     key={feat.label}
//                     className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-xs"
//                   >
//                     <Icon className="h-4 w-4 text-brand-600" />
//                     <span>{feat.label}</span>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Action Group */}
//             <div className="mt-10 flex flex-wrap items-center gap-4">
//               <motion.a
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 href="#developments"
//                 className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-slate-900/10 hover:bg-brand-600 hover:shadow-brand-600/25 transition-all"
//               >
//                 <span>Explore Developments</span>
//                 <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </motion.a>

//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-brand-600 px-4 py-3 transition-colors"
//               >
//                 <span>Contact Advisory Team</span>
//                 <HiArrowRight className="h-3.5 w-3.5" />
//               </a>
//             </div>
//           </motion.div>

//           {/* Right Column: Bento Stat Grid (5 Cols) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
//             className="lg:col-span-5 grid sm:grid-cols-2 gap-4"
//           >
//             {STATS.map((stat, i) => (
//               <motion.div
//                 key={stat.label}
//                 whileHover={{ y: -4 }}
//                 transition={{ duration: 0.2 }}
//                 className={`group relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 ${
//                   i === 0
//                     ? "bg-slate-900 text-white border-slate-800 shadow-xl shadow-slate-900/10"
//                     : "bg-white text-slate-900 border-slate-200/80 shadow-md shadow-slate-200/50 hover:border-brand-300/60"
//                 }`}
//               >
//                 {/* Counter Value */}
//                 <div
//                   className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
//                     i === 0 ? "text-brand-400" : "text-brand-600"
//                   }`}
//                 >
//                   <Counter value={stat.value} suffix={stat.suffix} />
//                 </div>

//                 {/* Label */}
//                 <h3
//                   className={`mt-2 text-sm sm:text-base font-bold ${
//                     i === 0 ? "text-white" : "text-slate-900"
//                   }`}
//                 >
//                   {stat.label}
//                 </h3>

//                 {/* Micro Description */}
//                 <p
//                   className={`mt-1.5 text-xs leading-relaxed ${
//                     i === 0 ? "text-slate-400" : "text-slate-500"
//                   }`}
//                 >
//                   {stat.description}
//                 </p>

//                 {/* Accent Corner Highlight */}
//                 <div
//                   className={`absolute top-4 right-4 h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-150 ${
//                     i === 0 ? "bg-brand-500" : "bg-slate-300 group-hover:bg-brand-500"
//                   }`}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
