"use client"
import Image from "next/image";
import { SectionHeading } from "../../components/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-slate-450">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="About GeoCore Minerals"
          subtitle="Our Story"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-12">
          {/* Left Content */}
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <h3 className="text-2xl font-heading font-bold text-white">
              Pioneering Excellence in Mining Since 1998
            </h3>

            <p>
              GeoCore Minerals was established with a vision to bridge the gap
              between rich mineral deposits and global industrial demand. What
              started as a small quarry operation has grown into a multinational
              mining and export conglomerate.
            </p>

            <p>
              We adhere to the highest standards of safety, ethics, and
              environmental stewardship. Our team of geologists and mining
              engineers ensures that every metric ton of ore we extract meets
              precise industrial specifications.
            </p>

            <div className="bg-slate-900 p-6 rounded border border-slate-800 mt-8">
              <h4 className="text-[#E0860A] font-heading font-bold text-xl mb-4">
                Our Vision & Mission
              </h4>

              <div className="space-y-4">
                <div>
                  <span className="text-white font-bold uppercase text-xs tracking-wider block mb-1">
                    Vision
                  </span>
                  <p className="text-sm">
                    To be the worlds most trusted partner for sustainable
                    mineral resources.
                  </p>
                </div>

                <div>
                  <span className="text-white font-bold uppercase text-xs tracking-wider block mb-1">
                    Mission
                  </span>
                  <p className="text-sm">
                    Delivering quality raw materials through ethical mining,
                    innovation, and operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="relative w-full h-[320px] md:h-[360px] rounded-lg overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&q=80"
                alt="Mining Team"
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
                  Years Experience
                </span>
              </div>

              <div className="bg-slate-900 p-4 rounded text-center border border-slate-800">
                <span className="text-3xl font-heading font-bold text-[#E0860A] block">
                  30+
                </span>
                <span className="text-xs text-slate-400 uppercase">
                  Countries Served
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <SectionHeading title="Our History" subtitle="Milestones" light />

          <div className="relative border-l border-slate-800 ml-4 md:ml-1/2 space-y-12 mt-12 pl-8 md:pl-0">
            {[
              {
                year: "1998",
                title: "Foundation",
                desc: "Started operations with a single Limestone quarry.",
              },
              {
                year: "2005",
                title: "Expansion",
                desc: "Expanded into Iron Ore and Bauxite mining.",
              },
              {
                year: "2012",
                title: "Global Export",
                desc: "Sent first shipment to China and Southeast Asia.",
              },
              {
                year: "2020",
                title: "Sustainability",
                desc: "Implemented 100% green energy in processing plants.",
              },
              {
                year: "2024",
                title: "Modernization",
                desc: "Integrated AI and IoT for mine safety and efficiency.",
              },
            ].map((item, i) => (
              <div key={i} className="md:flex items-center justify-between w-full">
                <div className="hidden md:block w-[45%] text-right pr-12">
                  <span className="text-[#E0860A] font-bold font-heading text-xl">
                    {item.year}
                  </span>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>

                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] rounded-full bg-[#E0860A] ring-4 ring-slate-950" />

                <div className="md:w-[45%] md:pl-12">
                  <div className="md:hidden mb-2">
                    <span className="text-[#E0860A] font-bold font-heading text-lg mr-2">
                      {item.year}
                    </span>
                    <span className="text-white font-bold">{item.title}</span>
                  </div>

                  <p className="text-slate-400 text-sm md:hidden">{item.desc}</p>

                  <div className="hidden md:block text-transparent select-none">
                    Placeholder
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety */}
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
                  We believe that zero harm is achievable. Our rigorous safety
                  protocols protect our workforce, while our rehabilitation
                  programs ensure the land is restored after extraction.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="text-[#E0860A] h-5 w-5" />
                    OHSAS 18001 Occupational Health & Safety Certified
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="text-[#E0860A] h-5 w-5" />
                    ISO 14001 Environmental Management Systems
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="text-[#E0860A] h-5 w-5" />
                    Community Development Programs
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <div className="relative w-full h-[280px] md:h-[360px] rounded-lg overflow-hidden shadow-xl border border-slate-700">
                  <Image
                    src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80"
                    alt="Safety First"
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
