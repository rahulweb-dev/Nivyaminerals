"use client"
import Link from "next/link";
import { SectionHeading } from "../../components/SectionHeading";
import { services } from "../../../lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";

import {
  Pickaxe,
  Settings,
  Container,
  Ship,
  FlaskConical,
  Package,
} from "lucide-react";

import { buttonVariants } from "../../components/ui/button";

// Map string icon names to Lucide components
const iconMap = {
  Pickaxe: Pickaxe,
  Settings: Settings,
  Container: Container,
  Ship: Ship,
  FlaskConical: FlaskConical,
  Package: Package,
};

export default function Services() {
  return (
    <div className="pt-24 min-h-screen ">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="Our Services"
          subtitle="End-to-End Solutions"
          light
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <Card
                key={service.id}
                className="bg-slate-900 border-slate-800 hover:border-primary/50 transition-all group"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-[#E0860A] mb-4 group-hover:bg-[#E0860A] group-hover:text-slate-950 transition-colors">
                    {Icon ? <Icon className="h-6 w-6" /> : null}
                  </div>

                  <CardTitle className="text-xl font-heading text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-slate-400 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="mt-24">
          <SectionHeading
            title="Our Process"
            subtitle="From Mine to Market"
            light
          />

          <div className="relative mt-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {["Exploration", "Extraction", "Processing", "Export"].map(
                (step, i) => (
                  <div
                    key={i}
                    className="bg-slate-950 p-6 rounded border border-slate-800 text-center flex flex-col items-center gap-4"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#E0860A] text-slate-950 font-bold flex items-center justify-center text-lg">
                      {i + 1}
                    </div>
                    <h4 className="font-heading font-bold text-white text-lg">
                      {step}
                    </h4>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-12 rounded-lg border border-slate-700">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              We offer customized supply solutions tailored to your industrial
              requirements. Contact our team today.
            </p>

            <Link
              href="/contact"
              className={`${buttonVariants({ size: "lg" })} bg-[#E0860A] text-slate-950 font-bold uppercase tracking-wider cursor-pointer`}
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
