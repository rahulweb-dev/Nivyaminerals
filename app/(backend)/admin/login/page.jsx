"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function AmigosAdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "/api/admin/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success("Login successful!");
        router.push("/admin/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#B05337] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white rounded-[38px] shadow-[0_30px_90px_rgba(0,0,0,0.25)] overflow-hidden border border-white/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT FORM */}
          <div className="p-10 sm:p-12 flex flex-col justify-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-xl">
               <FaLock />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A] text-center">
              Welcome back
            </h1>
            <p className="text-sm text-slate-500 text-center mt-2">
              Please enter your details.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {/* Email */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-slate-200 bg-white px-11 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#1E40D6]/30 focus:border-[#1E40D6]"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <FaLock />
                </span>

                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-full border border-slate-200 bg-white px-11 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#1E40D6]/30 focus:border-[#1E40D6]"
                />

                <button
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPass ? <IoEyeSharp size={20} /> : <IoEyeOffSharp size={20} />}
                </button>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-xs text-slate-500 px-2">
            
             
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className={`w-full rounded-full py-3 text-sm font-semibold transition
                  ${
                    loading
                      ? "bg-[#1E40D6]/50 text-white cursor-not-allowed"
                      : "bg-[#1E40D6] text-white hover:bg-[#1837B8]"
                  }`}
              >
                {loading ? "Logging in..." : "Login"}
              </motion.button>

              {/* Divider */}
              <div className="flex items-center gap-3 py-2">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-xs text-slate-400">or</span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

          
              {/* Footer */}
              <p className="text-center text-xs text-slate-400 mt-6">
                © {new Date().getFullYear()} Amigos Minerals •{" "}
                <Link
                  href="https://www.broaddcast.com"
                  target="_blank"
                  className="text-[#1E40D6] hover:underline"
                >
                  Broaddcast Digital
                </Link>
              </p>
            </form>
          </div>

          {/* RIGHT IMAGE PANEL */}
          <div className="relative hidden md:block p-8 bg-[#F16A24]">
            <div className="relative h-full min-h-[520px] rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
              <Image
                src="/login.jpeg"
                alt="Amigos Minerals Admin"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1E40D6]/25 via-transparent to-[#0B1B66]/35" />

              {/* Optional overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <p className="text-white text-sm font-semibold">
                    Amigos Minerals Admin
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    Secure access • Dashboard • Lead Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
