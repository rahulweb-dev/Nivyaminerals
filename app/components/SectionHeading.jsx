"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}) {
  const alignClass =
    align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

  const lineAlignClass =
    align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "mr-auto";

  const headingColorClass = light ? "text-black" : "text-slate-900 dark:text-white";

  return (
    <div className={`space-y-3 mb-12 ${alignClass} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#E0860A] font-bold uppercase tracking-widest text-xs md:text-sm block"
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-heading  font-bold uppercase tracking-tight ${headingColorClass}`}
      >
        {title}
      </motion.h2>

      <div className={`h-1 w-20 bg-[#E0860A] mt-4 ${lineAlignClass}`} />
    </div>
  );
}
