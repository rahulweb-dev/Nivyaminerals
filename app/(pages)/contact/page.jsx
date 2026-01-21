import { SectionHeading } from "../../components/SectionHeading";
import { ContactForm } from "../../components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen ">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading title="Contact Us" subtitle="Get In Touch" light />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-black">Corporate Headquarters</h3>
              <p className="text-slate-400">
                Reach out to us for enquiries regarding mineral supply, export partnerships, or investor relations. Our support team is available 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* India Office */}
              <div className="bg-[#1D283D] p-6 rounded-xl border border-slate-800 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center text-[#E0860A]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                    India Office
                  </h4>
                </div>

                <div className="text-slate-300 text-sm leading-relaxed">
                  <p>G3, Ajit Palace,</p>
                  <p>Anantapur, A.P - 515001</p>

                  <a
                    href="tel:+919908147999"
                    className="inline-block mt-3 text-slate-400 hover:text-[#E0860A]"
                  >
                    Ph: +91 9908147999
                  </a>
                </div>
              </div>

              {/* US Office */}
              <div className="bg-[#1D283D] p-6 rounded-xl border border-slate-800 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center text-[#E0860A]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                    US Office
                  </h4>
                </div>

                <div className="text-slate-300 text-sm leading-relaxed">
                  <p>1106 Backbay Dr, Irving,</p>
                  <p>TX - 75063</p>

                  <a
                    href="tel:+19729484440"
                    className="inline-block mt-3 text-slate-400 hover:text-[#E0860A]"
                  >
                    Ph: +1 972 948 4440
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="bg-[#1D283D] p-6 rounded-xl border border-slate-800 flex flex-col gap-4 md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center text-[#E0860A]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                    Email
                  </h4>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-2 text-sm">
                  <a
                    href="mailto:info@amigosminerals.com"
                    className="text-slate-400 hover:text-[#E0860A]"
                  >
                    info@amigosminerals.com
                  </a>

                  <a
                    href="mailto:support@amigosminerals.com"
                    className="text-slate-400 hover:text-[#E0860A]"
                  >
                    support@amigosminerals.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-[300px] bg-slate-800 rounded border border-slate-700 overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108812.5644122421!2d115.78280387532393!3d-31.95465251662998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5293bd573%3A0x504f0b535df4ee0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2sus!4v1645499248557!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>

            </div>
          </div>

          {/* Form Side */}
          <div className="space-y-6.5">
            <div className="bg-slate-700 p-1 rounded-lg border border-slate-800">
              <ContactForm />
            </div>
            <div className="h-[300px] bg-slate-800 rounded border border-slate-700 overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
              <iframe
                src="https://www.google.com/maps?q=1106%20Backbay%20Dr%20Irving%20TX%2075063&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
