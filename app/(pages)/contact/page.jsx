import { SectionHeading } from "../../components/SectionHeading";
import { ContactForm } from "../../components/ContactForm";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Amigos Minerals",
  description:
    "Get in touch with Amigos Minerals for mineral supply, export partnerships, and business enquiries. Contact our India and US offices or send a message through our contact form.",
  keywords: [
    "Contact Amigos Minerals",
    "mineral supply enquiry",
    "mineral export contact",
    "mining company contact",
    "Amigos Minerals India office",
    "Amigos Minerals US office",
  ],
  alternates: {
    canonical: "https://nivyaminerals.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Us | Amigos Minerals",
    description:
      "Contact Amigos Minerals for mineral supply and export partnerships. Offices in India and the United States.",
    url: "https://nivyaminerals.vercel.app/contact",
    siteName: "Amigos Minerals",
    images: [
      {
        url: "/assests/about-us-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Amigos Minerals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Amigos Minerals",
    description:
      "Reach Amigos Minerals for enquiries about mineral supply, export partnerships, and support.",
    images: ["/assests/about-us-2.jpeg"],
  },
};



export default function Contact() {
  return (
    <div className="pt-24 ">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading title="Contact Us" subtitle="Get In Touch" light />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left Side (Info) */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-black">
                Corporate Headquarters
              </h3>
              <p className="text-slate-400">
                Reach out to us for enquiries regarding mineral supply, export
                partnerships, or investor relations. Our support team is
                available 24/7.
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
          </div>

          {/* Right Side (Form + Maps) */}
          <div className="space-y-6">
            {/* Form Top */}
            <div className="bg-slate-700 p-1 rounded-lg border border-slate-800">
              <ContactForm />
            </div>


          </div>
          {/* India Map */}
          <div className="bg-[#1D283D] rounded-xl border border-slate-800 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800">
              <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center text-[#E0860A]">
                <MapPin className="h-5 w-5" />
              </div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                India Location
              </h4>
            </div>

            <div className="h-[260px]  transition-all">
              <iframe
                src="https://www.google.com/maps?q=G3%20Ajit%20Palace%20Anantapur%20515001&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* US Map */}
          <div className="bg-[#1D283D] rounded-xl border border-slate-800 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800">
              <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center text-[#E0860A]">
                <MapPin className="h-5 w-5" />
              </div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                US Location
              </h4>
            </div>

            <div className="h-[260px]  transition-all">
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
