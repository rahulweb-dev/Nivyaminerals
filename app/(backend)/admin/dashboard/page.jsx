"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiClock, FiArrowLeft } from "react-icons/fi";

const page = () => {
  return (
    <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4 py-12 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-orange-500/15 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[620px] h-[620px] bg-yellow-400/10 blur-[190px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-blue-500/10 blur-[200px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_25px_90px_rgba(0,0,0,0.45)] p-8 sm:p-10 text-center">
          {/* Icon */}
          <div className="mx-auto h-14 w-14 rounded-2xl bg-orange-500/15 border border-orange-400/20 flex items-center justify-center">
            <FiClock className="text-2xl text-orange-300" />
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
            Coming Soon 🚀
          </h1>

          <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
            This page is under development. We’re working hard to launch it
            soon. Please check back later.
          </p>

          {/* Status */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            Building in progress...
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-orange-500 text-black font-semibold hover:opacity-90 transition"
            >
              <FiArrowLeft />
              Back to Dashboard
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-white/15 text-white/80 hover:bg-white/5 transition"
            >
              Go to Website
            </Link>
          </div>

          {/* Footer */}
          <p className="mt-8 text-xs text-white/40">
            © {new Date().getFullYear()} Amigos Minerals
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
