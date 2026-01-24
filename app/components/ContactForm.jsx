"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "../components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.number)) {
      newErrors.number = "Must be a valid 10-digit number starting with 6-9";
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong!");
      }

      toast.success(data?.message || "Inquiry Sent! We will contact you shortly.");

      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (err) {
      toast.error(err.message || "Failed to send inquiry.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "mt-2 bg-slate-800/40 border border-slate-600/60 text-white placeholder:text-slate-400 " +
    "focus:border-[#E0860A] focus:ring-2 focus:ring-[#E0860A]/30 focus:outline-none " +
    "rounded-md h-12";

  const labelBase =
    "text-slate-200 font-semibold uppercase tracking-wider text-xs";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl"
    >
      {/* Name */}
      <div>
        <label className={labelBase}>Full Name</label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className={inputBase}
          disabled={loading}
        />
        {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
      </div>

      {/* Email + number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelBase}>Email Address</label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={inputBase}
            disabled={loading}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-2">{errors.email}</p>
          )}
        </div>

        <div>
          <label className={labelBase}>Number</label>
          <Input
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your number"
            className={inputBase}
            disabled={loading}
          />
          {errors.number && (
            <p className="text-red-400 text-xs mt-2">{errors.number}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelBase}>Requirement Message</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="I am interested in bulk supply... Please share pricing and delivery timelines."
          className={`${inputBase} min-h-[140px] h-auto py-3`}
          disabled={loading}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-2">{errors.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={loading}
          className={`px-10 rounded-md font-bold uppercase tracking-wider shadow-lg 
            ${loading
              ? "bg-[#E0860A]/60 cursor-not-allowed text-slate-950"
              : "bg-[#E0860A] hover:bg-[#E0860A]/90 text-slate-950 shadow-[#E0860A]/20"
            }`}
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </Button>
      </div>

      <p className="text-xs text-slate-400 text-end">
        We respect your privacy. Your details will not be shared.
      </p>
    </form>
  );
}
