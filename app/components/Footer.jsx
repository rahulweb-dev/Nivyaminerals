import { Globe, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-[#E0860A]" />
              <span className="text-xl font-heading font-bold text-white tracking-tighter">
                AMIGO<span className="text-[#E0860A]">CORE</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Global leader in sustainable mineral extraction and export. Delivering high-grade raw materials to industries worldwide since 1998.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-[#E0860A] transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#E0860A] transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#E0860A] transition-colors cursor-pointer">About Company</Link></li>
              <li><Link href="/minerals" className="hover:text-[#E0860A] transition-colors cursor-pointer">Our Minerals</Link></li>
              <li><Link href="/services" className="hover:text-[#E0860A] transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#E0860A] transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* Minerals */}
          <div>
            <h3 className="text-white font-heading font-semibold uppercase tracking-wider mb-6">Top Minerals</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/minerals/iron-ore" className="hover:text-[#E0860A] transition-colors cursor-pointer">Iron Ore</Link></li>
              <li><Link href="/minerals/bauxite" className="hover:text-[#E0860A] transition-colors cursor-pointer">Bauxite</Link></li>
              <li><Link href="/minerals/limestone" className="hover:text-[#E0860A] transition-colors cursor-pointer">Limestone</Link></li>
              <li><Link href="/minerals/quartz" className="hover:text-[#E0860A] transition-colors cursor-pointer">Quartz</Link></li>
              <li><Link href="/minerals/silica-sand" className="hover:text-[#E0860A] transition-colors cursor-pointer">Silica Sand</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#E0860A] shrink-0" />
                <span>123 Industrial Ave, Mining District,<br />Perth, WA 6000, Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#E0860A] shrink-0" />
                <span>+61 (0) 2 9999 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#E0860A] shrink-0" />
                <span>export@geocoreminerals.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 bg-black/20 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GeoCore Minerals. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E0860A]">Privacy Policy</a>
            <a href="#" className="hover:text-[#E0860A]">Terms & Conditions</a>
            <a href="#" className="hover:text-[#E0860A]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
