import Image from "next/image";
import { notFound } from "next/navigation";
import { minerals } from "../../../../lib/data";
import { ContactForm } from "../../../components/ContactForm";
import { Table, TableBody, TableCell, TableRow } from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { Download, CheckCircle, Globe2 } from "lucide-react";

export default function MineralDetail({ params }) {
  const mineral = minerals.find((m) => m.slug === params.slug);

  if (!mineral) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      {/* Hero Header */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src={mineral.image}
          alt={mineral.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-heading font-bold text-white uppercase tracking-tight">
              {mineral.name}
            </h1>
            <p className="text-[#E0860A] font-medium uppercase tracking-widest mt-2">
              Product Specification
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-900 rounded-lg p-8 border border-slate-800 shadow-xl">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                Description
              </h2>

              <p className="text-slate-300 leading-relaxed text-lg">
                {mineral.description}
              </p>

              {/* Specs */}
              <div className="mt-8">
                <h3 className="text-lg font-heading font-bold text-white mb-4 border-b border-slate-800 pb-2">
                  Technical Specifications
                </h3>

                <Table>
                  <TableBody>
                    {mineral.specs.map((spec, i) => (
                      <TableRow
                        key={i}
                        className="border-slate-800 hover:bg-slate-800/50"
                      >
                        <TableCell className="font-bold text-slate-400">
                          {spec.label}
                        </TableCell>
                        <TableCell className="text-right text-white font-mono">
                          {spec.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Applications + Export */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-4 border-b border-slate-800 pb-2">
                    Applications
                  </h3>
                  <ul className="space-y-2">
                    {mineral.applications.map((app, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-slate-300"
                      >
                        <CheckCircle className="h-4 w-4 text-[#E0860A]" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-4 border-b border-slate-800 pb-2">
                    Export Markets
                  </h3>
                  <ul className="space-y-2">
                    {mineral.exportCountries.map((c, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-slate-300"
                      >
                        <Globe2 className="h-4 w-4 text-[#E0860A]" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Download */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <Button className="w-full md:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Technical Datasheet (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 sticky top-24">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Request Quote
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
