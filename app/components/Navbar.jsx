"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { buttonVariants } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/minerals", label: "Minerals" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-slate-950/95 backdrop-blur-md shadow-md py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Globe className="h-8 w-8 text-[#E0860A] transition-transform group-hover:rotate-12" />
          <div className="flex flex-col">
            <span className="text-2xl font-heading font-bold text-white leading-none tracking-tighter">
              GEO<span className="text-[#E0860A]">CORE</span>
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest leading-none">
              Minerals & Export
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#E0860A] cursor-pointer ${isActive ? "text-[#E0860A]" : "text-slate-300"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`${buttonVariants({ variant: "default" })} bg-[#E0860A] text-slate-950 hover:bg-[#E0860A]/90 font-bold uppercase tracking-wider cursor-pointer`}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-t border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-lg font-heading uppercase tracking-wide cursor-pointer ${isActive ? "text-[#E0860A]" : "text-slate-300"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`${buttonVariants()} w-full bg-[#E0860A] text-slate-950 font-bold uppercase mt-2 cursor-pointer`}
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
