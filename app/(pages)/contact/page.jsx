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
              <h3 className="text-2xl font-heading font-bold text-white">Corporate Headquarters</h3>
              <p className="text-slate-400">
                Reach out to us for enquiries regarding mineral supply, export partnerships, or investor relations. Our support team is available 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-6 rounded border border-slate-800 flex flex-col gap-4">
                <div className="h-10 w-10 rounded bg-slate-950 flex items-center justify-center text-[#E0860A]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm">Phone</h4>
                  <p className="text-slate-400">+61 (0) 2 9999 8888</p>
                  <p className="text-slate-400">+61 (0) 2 9999 7777</p>
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded border border-slate-800 flex flex-col gap-4">
                <div className="h-10 w-10 rounded bg-slate-950 flex items-center justify-center text-[#E0860A]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm">Email</h4>
                  <p className="text-slate-400">info@geocoreminerals.com</p>
                  <p className="text-slate-400">export@geocoreminerals.com</p>
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded border border-slate-800 flex flex-col gap-4 md:col-span-2">
                <div className="h-10 w-10 rounded bg-slate-950 flex items-center justify-center text-[#E0860A]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm">Address</h4>
                  <p className="text-slate-400">123 Industrial Ave, Mining District, Perth, WA 6000, Australia</p>
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
          <div>
            <div className="bg-slate-900 p-1 rounded-lg border border-slate-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
