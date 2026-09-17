"use client";

import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineArrowUpRight,
  HiOutlineBuildingOffice2,
  HiArrowRight,
  HiOutlineSparkles,
} from "react-icons/hi2";

export default function OfficeMove() {
  const mapDirectionsUrl =
    "https://www.google.com/maps/search/?api=1&query=6+Olawale+Dawodu+Rd+Ikoyi+Lagos";

  return (
    <section className="relative py-24 md:py-32 bg-stone-50/70 overflow-hidden select-none">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 md:px-12">
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-stone-200/80 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden"
        >
          {/* Top Banner: Dark Editorial Corporate Announcement */}
          <div className="relative bg-brand-950 text-white p-8 sm:p-12 md:p-14 overflow-hidden">
            {/* Ambient Background Gradient Glows */}
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-600/30 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-6 shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>HQ Active • Now Hosting Consultations</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                  We Have Moved to Ikoyi.
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  <strong className="text-white">MISA Limited</strong> has
                  transitioned to a new corporate headquarters. Our move
                  reflects our continued expansion and commitment to serving
                  client interests across prime Lagos corridors.
                </p>
              </div>

              {/* Stamp Badge */}
              <div className="hidden lg:flex items-center gap-3 rounded-2xl bg-slate-900/80 border border-slate-800 p-4 shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <HiOutlineSparkles className="h-5 w-5" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="text-slate-400 font-mono">LAGOS HQ</span>
                  <span className="font-bold text-white tracking-wider">
                    EST. 2012
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Dock: Interactive Address & Contact Cards */}
          <div className="p-8 sm:p-12 md:p-14 bg-white">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Address Highlight Box (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-stone-50/80 border border-stone-200/80 hover:border-brand-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-700 uppercase">
                      <HiOutlineBuildingOffice2 className="h-4 w-4 text-brand-600" />
                      <span>New Headquarters</span>
                    </span>

                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      IKOYI // LAGOS
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mt-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-600/20 shrink-0">
                      <HiOutlineMapPin className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                        6 Olawale Dawodu Rd, Ikoyi, Lagos
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        All client meetings, property viewings, and conveyancing
                        sessions are now hosted at our Ikoyi address.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Directions Footer Link */}
                <div className="mt-6 pt-5 border-t border-stone-200/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    GPS: 6°27'14"N 3°26'08"E
                  </span>

                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-800 transition-colors"
                  >
                    <span>Open Directions</span>
                    <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Actions & Channels (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* Email Card */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:info@misaltd.com"
                  className="flex items-center justify-between p-5 rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:bg-white hover:border-brand-300 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shrink-0">
                      <HiOutlineEnvelope className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        Email Advisory
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        info@misaltd.com
                      </span>
                    </div>
                  </div>
                  <HiOutlineArrowUpRight className="h-4 w-4 text-slate-400" />
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+2349163000888"
                  className="flex items-center justify-between p-5 rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:bg-white hover:border-brand-300 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shrink-0">
                      <HiOutlinePhone className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        Direct Line
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        +234 916 300 0888
                      </span>
                    </div>
                  </div>
                  <HiOutlineArrowUpRight className="h-4 w-4 text-slate-400" />
                </motion.a>

                {/* Schedule Visit Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="group inline-flex items-center justify-between rounded-2xl bg-brand-600 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition-all mt-2"
                >
                  <span>Schedule Private Inspection</span>
                  <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import {
//   HiOutlineMapPin,
//   HiOutlineEnvelope,
//   HiOutlinePhone,
//   HiOutlineArrowUpRight,
//   HiOutlineBuildingOffice2,
//   HiArrowRight,
// } from "react-icons/hi2";

// export default function OfficeMove() {
//   const mapDirectionsUrl =
//     "https://www.google.com/maps/search/?api=1&query=6+Olawale+Dawodu+Rd+Ikoyi+Lagos";

//   return (
//     <section className="relative py-24 md:py-32 bg-slate-50/50 overflow-hidden select-none">
//       {/* Background Architectural Mesh & Gradient Accents */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
//         {/* Main Grid Container */}
//         <div className="grid lg:grid-cols-12 rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/10 bg-white">

//           {/* Left Column: Brand Announcement Frame (5 Cols) */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-5 relative bg-slate-950 text-white p-8 sm:p-12 md:p-14 flex flex-col justify-between overflow-hidden"
//           >
//             {/* Background Radial Light Accent */}
//             <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-600/30 blur-[120px] pointer-events-none" />
//             <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />

//             <div className="relative z-10">
//               {/* Eyebrow Pill */}
//               <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-6 shadow-md">
//                 <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
//                 <span>Corporate Announcement</span>
//               </div>

//               {/* Title Header */}
//               <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
//                 We Have Moved to Ikoyi.
//               </h2>

//               <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
//                 <strong className="text-white font-semibold">MISA Limited</strong> has transitioned to a new corporate headquarters. Our move reflects our continued expansion and commitment to delivering bespoke real estate solutions across prime Lagos corridors.
//               </p>
//             </div>

//             {/* Bottom Footer Note */}
//             <div className="relative z-10 mt-12 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
//               <span>HQ // LAGOS</span>
//               <span>© {new Date().getFullYear()} MISA LIMITED</span>
//             </div>
//           </motion.div>

//           {/* Right Column: Interactive Location & Contact Details (7 Cols) */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
//             className="lg:col-span-7 bg-white p-8 sm:p-12 md:p-14 flex flex-col justify-between"
//           >
//             <div>
//               {/* Section Tag */}
//               <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-600 uppercase mb-4">
//                 <HiOutlineBuildingOffice2 className="h-4 w-4 text-brand-600" />
//                 <span>New Corporate Address</span>
//               </div>

//               {/* Address Highlight Box */}
//               <div className="group relative rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 hover:border-brand-300 transition-colors">
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-600/20 shrink-0">
//                     <HiOutlineMapPin className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <span className="text-[10px] font-mono font-bold tracking-widest text-brand-600 uppercase block mb-1">
//                       Ikoyi Headquarters
//                     </span>
//                     <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
//                       6 Olawale Dawodu Rd, Ikoyi, Lagos
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Get Directions Button */}
//                 <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
//                   <span className="text-xs text-slate-500 font-medium">
//                     Navigating to our office?
//                   </span>
//                   <a
//                     href={mapDirectionsUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 transition-colors"
//                   >
//                     <span>Get Directions</span>
//                     <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
//                   </a>
//                 </div>
//               </div>

//               {/* Note */}
//               <p className="mt-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
//                 All client consultations, property viewings, and administrative engagements are now hosted at our Ikoyi location. We look forward to receiving you.
//               </p>

//               {/* Contact Micro-Cards */}
//               <div className="mt-8 grid sm:grid-cols-2 gap-4">
//                 {/* Email Card */}
//                 <motion.a
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   href="mailto:info@misaltd.com"
//                   className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 hover:border-brand-300 hover:bg-white transition-all shadow-xs"
//                 >
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shrink-0">
//                     <HiOutlineEnvelope className="h-5 w-5" />
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-[10px] font-mono text-slate-400 uppercase">
//                       Email Inquiries
//                     </span>
//                     <span className="text-xs sm:text-sm font-bold text-slate-900">
//                       info@misaltd.com
//                     </span>
//                   </div>
//                 </motion.a>

//                 {/* Phone Card */}
//                 <motion.a
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   href="tel:+2349163000888"
//                   className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 hover:border-brand-300 hover:bg-white transition-all shadow-xs"
//                 >
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shrink-0">
//                     <HiOutlinePhone className="h-5 w-5" />
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-[10px] font-mono text-slate-400 uppercase">
//                       Direct Line
//                     </span>
//                     <span className="text-xs sm:text-sm font-bold text-slate-900">
//                       +234 916 300 0888
//                     </span>
//                   </div>
//                 </motion.a>
//               </div>
//             </div>

//             {/* Bottom Conversion CTA */}
//             <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
//               <motion.a
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 href="#contact"
//                 className="group inline-flex items-center gap-3 rounded-full bg-brand-600 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition-all"
//               >
//                 <span>Schedule a Visit</span>
//                 <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </motion.a>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
