"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineSparkles,
  HiOutlineArrowUpRight,
  HiOutlineBuildingOffice2,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const INTEREST_OPTIONS = [
  "Acquiring / Buying a Property",
  "Schedule Inspection (Ikona / Ulesh)",
  "Facility & Asset Management",
  "Joint Venture / Land Partnership",
  "General Real Estate Advisory",
];

const TARGET_WHATSAPP_NUMBER = "2349163000888"; // +234 916 300 0888
const TARGET_EMAIL = "info@misaltd.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: INTEREST_OPTIONS[0],
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // Validate form fields prior to triggering external clients
  const validateForm = (): boolean => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Dispatch to WhatsApp (+2349163000888)
  const executeWhatsApp = () => {
    const text = `*New Real Estate Inquiry - MISA Limited*
*Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Email:* ${formData.email.trim()}
*Interest:* ${formData.interest}
*Message:* ${formData.message.trim() || "No additional message provided."}`;

    window.open(`https://wa.me/${TARGET_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Dispatch to Native Email Client (info@misaltd.com)
  const executeEmailClient = () => {
    const subject = `Inquiry: ${formData.interest} - ${formData.name.trim()}`;
    const body = `Full Name: ${formData.name.trim()}
Phone Number: ${formData.phone.trim()}
Email Address: ${formData.email.trim()}
Area of Interest: ${formData.interest}

Message / Special Request:
${formData.message.trim() || "N/A"}`;

    window.location.href = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // WhatsApp Button Handler (Primary: WhatsApp -> Secondary: Email Client)
  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    executeWhatsApp();
    setTimeout(() => {
      executeEmailClient();
    }, 600);

    setSubmitted(true);
  };

  // Email Client Button Handler (Primary: Email Client -> Secondary: WhatsApp)
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    executeEmailClient();
    setTimeout(() => {
      executeWhatsApp();
    }, 600);

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-stone-100/80 text-slate-900 overflow-hidden select-none">
      {/* Architectural Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Warm Ambient Radial Accents */}
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-amber-200/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-stone-300/50 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-200 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-700 uppercase mb-4 shadow-xs">
            <HiOutlineSparkles className="h-4 w-4 text-brand-600" />
            <span>Direct Advisory Channel</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Let&apos;s Build Your Next Address
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Fill in your details below. Once validated, both buttons will initiate direct transmission via WhatsApp (+234 916 300 0888) and your native email client.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Headquarters Details (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-stone-200/80 bg-white p-8 sm:p-10 shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-700 uppercase mb-2">
                <HiOutlineBuildingOffice2 className="h-4 w-4 text-brand-600" />
                <span>Corporate Headquarters</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                MISA Limited
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Client consultations, property viewings, and conveyancing meetings are hosted at our corporate offices in Ikoyi.
              </p>

              {/* Channel Info Cards */}
              <div className="mt-8 space-y-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6+Olawale+Dawodu+Rd+Ikoyi+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80 hover:border-brand-300 hover:bg-white transition-all shadow-xs"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shrink-0 mt-0.5">
                    <HiOutlineMapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                      Ikoyi Address
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 group-hover:text-brand-600 transition-colors">
                      6 Olawale Dawodu Rd, Ikoyi, Lagos
                    </p>
                  </div>
                  <HiOutlineArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-brand-600 transition-colors shrink-0" />
                </a>

                <a
                  href={`mailto:${TARGET_EMAIL}`}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80 hover:border-brand-300 hover:bg-white transition-all shadow-xs"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shrink-0">
                    <HiOutlineEnvelope className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                      Official Email
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 group-hover:text-brand-600 transition-colors">
                      {TARGET_EMAIL}
                    </p>
                  </div>
                  <HiOutlineArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-brand-600 transition-colors shrink-0" />
                </a>

                <a
                  href={`https://wa.me/${TARGET_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80 hover:border-brand-300 hover:bg-white transition-all shadow-xs"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shrink-0">
                    <FaWhatsapp className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                      WhatsApp Line
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 group-hover:text-brand-600 transition-colors">
                      +234 916 300 0888
                    </p>
                  </div>
                  <HiOutlineArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-brand-600 transition-colors shrink-0" />
                </a>
              </div>
            </div>

            {/* Social Network Bar */}
            <div className="mt-10 pt-6 border-t border-stone-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Social Channels</span>
              <div className="flex items-center gap-2">
                {[
                  { Icon: FaInstagram, href: "#", label: "Instagram" },
                  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                  { Icon: FaTwitter, href: "#", label: "Twitter" },
                  { Icon: FaFacebookF, href: "#", label: "Facebook" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 border border-stone-200 text-slate-600 hover:text-white hover:bg-brand-600 transition-all"
                  >
                    <item.Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Dual-Action Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl border border-stone-200/80 bg-white p-8 sm:p-10 shadow-xl flex flex-col justify-center"
          >
            <form ref={formRef} onSubmit={handleWhatsAppClick} className="space-y-5" noValidate>

              {/* Full Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Full Name <span className="text-brand-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full rounded-2xl bg-stone-50/80 border px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-stone-200 focus:border-brand-600 focus:ring-brand-500/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium">
                      <HiOutlineExclamationCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Phone Number <span className="text-brand-600">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full rounded-2xl bg-stone-50/80 border px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-stone-200 focus:border-brand-600 focus:ring-brand-500/20"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium">
                      <HiOutlineExclamationCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Area of Interest */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Email Address <span className="text-brand-600">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full rounded-2xl bg-stone-50/80 border px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-stone-200 focus:border-brand-600 focus:ring-brand-500/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium">
                      <HiOutlineExclamationCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full rounded-2xl bg-stone-50/80 border border-stone-200 px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all appearance-none cursor-pointer"
                  >
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Area */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Message / Special Request
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your property requirement, timeline, or investment goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-2xl bg-stone-50/80 border border-stone-200 p-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all resize-none"
                />
              </div>

              {/* DUAL VALIDATED CONVERSION BUTTONS */}
              <div className="pt-2 grid sm:grid-cols-2 gap-4">
                {/* Button 1: Validates Form & Dispatches to WhatsApp (+2349163000888) */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all cursor-pointer"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  <span>Send via WhatsApp</span>
                </motion.button>

                {/* Button 2: Validates Form & Dispatches to Email Client (info@misaltd.com) */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleEmailClick}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-300 bg-stone-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-stone-100 transition-all shadow-xs cursor-pointer"
                >
                  <FaEnvelope className="h-3.5 w-3.5 text-brand-600" />
                  <span>Send via Email Client</span>
                </motion.button>
              </div>

              {/* Success Notification */}
              {submitted && (
                <p className="text-center text-xs text-emerald-600 font-semibold mt-2 animate-fade-in">
                  ✓ Form validated! Inquiry launched to WhatsApp (+234 916 300 0888) and Email Client.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}