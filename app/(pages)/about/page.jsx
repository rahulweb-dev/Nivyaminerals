"use client";
import Image from "next/image";
import { SectionHeading } from "../../components/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-slate-450">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading title="About Amigos Minerals" subtitle="About Us" light />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-12">
          {/* Left Content */}
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <h3 className="text-2xl font-heading font-bold text-white">
              Company Overview
            </h3>

            <p className="text-gray-700">
              With a rich legacy of over <span className="text-black font-semibold">25 years</span> in
              the metals, mining, and mineral processing industry, Amigos Minerals
              has been at the forefront of industrial, economic, and community
              development.
            </p>

            <p className="text-gray-700">
              With operations strategically located in{" "}
              <span className="text-black font-semibold">
                India (Andhra Pradesh), Zambia (Serenje), and Tanzania (Dar Es Salam)
              </span>
              , the company is advancing towards sustainable mining, mineral
              processing, and logistics.
            </p>

            <p className="text-gray-700">
              Amigos Minerals currently operates one of the largest road metal
              mines in Andhra Pradesh, India, with a production capacity of{" "}
              <span className="text-black font-semibold">12 MTPA</span>. The company
              is also in the process of establishing a{" "}
              <span className="text-black font-semibold">
                1.2 MTPA DRI sponge iron production plant
              </span>{" "}
              in Maharashtra, India.
            </p>

            <p className="text-gray-700">
              Further strengthening its portfolio, Amigos Metals has entered into
              an agreement with <span className="text-black font-semibold">Steelfort Liberia</span>{" "}
              to establish a <span className="text-black font-semibold">1 MTPA beneficiation plant</span>{" "}
              in Liberia.
            </p>

            <p className="text-gray-700">
              Sustainability is deeply embedded in Amigos Minerals’ growth
              strategy. The company is pioneering initiatives such as{" "}
              <span className="text-black font-semibold">
                battery-operated vehicles and EV fleets
              </span>{" "}
              for mining operations to reduce carbon emissions, while prioritising{" "}
              <span className="text-black font-semibold">renewable energy solutions</span>.
            </p>

            <p className="text-gray-700">
              With unparalleled expertise, innovative practices, and a strong
              focus on uplifting communities across operating regions, Amigos
              Minerals is poised to redefine the future of mining and mineral
              processing in India and worldwide.
            </p>

            {/* Vision */}
            <div className="bg-slate-900 p-6 rounded border border-slate-800 mt-8">
              <h4 className="text-[#E0860A] font-heading font-bold text-xl mb-4">
                Vision
              </h4>

              <p className="text-sm text-slate-300">
                To be the leader in sustainable mineral processing by becoming the
                world’s most trusted partner by ensuring safety, security and
                value for essential industries.
              </p>
            </div>

            {/* Leadership */}
            <div className="bg-slate-900 p-6 rounded border border-slate-800">
              <h4 className="text-[#E0860A] font-heading font-bold text-xl mb-4">
                Leadership
              </h4>

              <p className="text-sm text-slate-300">
                Our leadership team brings decades of experience in mining,
                metals, mineral processing, and logistics—driving growth through
                innovation, safety, and sustainability.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="relative w-full h-[320px] md:h-[360px] rounded-lg overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80"
                alt="Amigos Minerals"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded text-center border border-slate-800">
                <span className="text-3xl font-heading font-bold text-[#E0860A] block">
                  25+
                </span>
                <span className="text-xs text-slate-400 uppercase">
                  Years Legacy
                </span>
              </div>

              <div className="bg-slate-900 p-4 rounded text-center border border-slate-800">
                <span className="text-3xl font-heading font-bold text-[#E0860A] block">
                  3+
                </span>
                <span className="text-xs text-slate-400 uppercase">
                  Countries of Operations
                </span>
              </div>
            </div>

            {/* Group of Companies */}
            <div className="bg-slate-900 p-6 rounded border border-slate-800">
              <h4 className="text-[#E0860A] font-heading font-bold text-xl mb-4">
                Group of Companies
              </h4>

              <ul className="space-y-3 text-slate-200 text-sm">
                {[
                  "Amigos Automobiles",
                  "Amigos Mobility",
                  "Amigos Automotive",
                  "Amigos Molecular Solutions",
                  "PM Cars Pvt Ltd",
                  "Nivya Automobiles",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#E0860A] h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Safety & Sustainability */}
        <div className="mt-24 bg-slate-600 py-16 -mx-4 md:-mx-6 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <SectionHeading
                  title="Safety & Sustainability"
                  subtitle="Core Values"
                  align="left"
                  light
                />

                <p className="text-slate-300 mb-6">
                  We believe sustainability is the future of mining. Amigos
                  Minerals prioritises safe operations, low-carbon mobility,
                  renewable energy solutions, and long-term community upliftment
                  in all operating regions.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="text-[#E0860A] h-5 w-5" />
                    EV & battery-operated mining fleets to reduce emissions
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="text-[#E0860A] h-5 w-5" />
                    Renewable energy focus across operations
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="text-[#E0860A] h-5 w-5" />
                    Community development in operating locations
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <div className="relative w-full h-[280px] md:h-[360px] rounded-lg overflow-hidden shadow-xl border border-slate-700">
                  <Image
                    src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&q=80"
                    alt="Sustainability"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
