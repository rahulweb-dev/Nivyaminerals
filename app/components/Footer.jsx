import { Globe, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className={`relative h-[80px]  transition-all duration-300 `}>
                <Image
                  src="/amigo-orange-removebg-preview.png"
                  alt="AMIGO Logo"
                  height={140}
                  width={100}
                  className="object-contain transition-transform duration-300 group-hover:scale-105 -mt-6"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Global leader in sustainable mineral extraction and export. Delivering high-grade raw materials to industries worldwide since 1998.
            </p>
            {/* <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-[#E0860A] transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div> */}
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
              <li><Link href="/minerals/dolomite" className="hover:text-[#E0860A] transition-colors cursor-pointer">Dolomite</Link></li>
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
                <MapPin className="h-5 w-5 text-[#E0860A] shrink-0 mt-1" />
                <div className="text-slate-300">
                  <p className="font-semibold text-white">India Office</p>
                  <p>G3, Ajit Palace,</p>
                  <p>Anantapur, A.P - 515001</p>
                  <a
                    href="tel:+919908147999"
                    className="text-sm text-slate-400 mt-1 inline-block hover:text-[#E0860A]"
                  >
                    Ph: +91 9908147999
                  </a>

                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#E0860A] shrink-0 mt-1" />
                <div className="text-slate-300">
                  <p className="font-semibold text-white">US Office</p>
                  <p>1106 Backbay Dr Irving,</p>
                  <p>TX - 75063</p>
                  <a
                    href="tel:+19729484440"
                    className="text-sm text-slate-400 mt-1 inline-block hover:text-[#E0860A]"
                  >
                    Ph: +1 972 948 4440
                  </a>

                </div>
              </li>

              {/* <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#E0860A] shrink-0" />
                <span>+61 (0) 2 9999 8888</span>
              </li> */}
              <Link href="mailto:info@amigominerals.com"> <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#E0860A] shrink-0" />
                <span>info@amigominerals.com</span>
              </li></Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 bg-black/20 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Amigos Minerals. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-[#E0860A]">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-[#E0860A]">
                Terms & Conditions
              </Link>
            </div>

            <Link
              href="https://broaddcast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#E0860A] transition"
            >
              <span>Powered by</span>
              <Image
                src="/logo-white.svg"
                alt="Broaddcast"
                width={90}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
