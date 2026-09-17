import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="#home"
      className="group inline-flex items-center gap-2.5 focus:outline-none"
    >
      {/* Brand Icon SVG */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-brand-700">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-tight tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
          <span className="text-brand-600 tracking-[0.55em]">MISA</span>
        </span>
        <span className="text-[10px] font-medium tracking-[0.65em] uppercase text-slate-400">
          LIMITED
        </span>
      </div>
    </Link>
  );
}
