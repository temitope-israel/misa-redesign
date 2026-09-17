// import { motion } from "framer-motion";

// export default function NavLink({ href, isActive, children }) {
//   return (
//     <a
//       href={href}
//       className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
//         isActive ? "text-brand-600" : "text-slate-600 hover:text-slate-900"
//       }`}
//     >
//       {isActive && (
//         <motion.span
//           layoutId="activeNavBackground"
//           className="absolute inset-0 bg-white rounded-full shadow-xs"
//           transition={{ type: "spring", stiffness: 380, damping: 30 }}
//         />
//       )}
//       <span className="relative z-10">{children}</span>
//     </a>
//   );
// }
