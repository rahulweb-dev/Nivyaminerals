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
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Must be a valid 10-digit number starting with 6-9";
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

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    console.log("Submitted:", formData);

    toast.success("Inquiry Sent! We will contact you shortly.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-slate-900 p-8 rounded-lg border border-slate-800"
    >
      {/* Name */}
      <div>
        <label className="text-slate-300 uppercase tracking-wide text-xs">
          Full Name
        </label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="bg-slate-950 border-slate-800 text-white focus:border-primary mt-2"
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-2">{errors.name}</p>
        )}
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-slate-300 uppercase tracking-wide text-xs">
            Email Address
          </label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="bg-slate-950 border-slate-800 text-white focus:border-primary mt-2"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-2">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300 uppercase tracking-wide text-xs">
            Phone Number
          </label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className="bg-slate-950 border-slate-800 text-white focus:border-primary mt-2"
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-2">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-slate-300 uppercase tracking-wide text-xs">
          Requirement Message
        </label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="I am interested in bulk Iron Ore supply..."
          className="min-h-[120px] bg-slate-950 border-slate-800 text-white focus:border-primary mt-2"
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-2">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-[#E0860A] hover:bg-[#E0860A]/90 text-slate-950 font-bold uppercase tracking-wider py-6"
      >
        Send Inquiry
      </Button>
    </form>
  );
}
