"use client"

import { useState } from "react";
import { minerals } from "../../../lib/data";
import { SectionHeading } from "../../components/SectionHeading";
import { MineralCard } from "../../components/MineralCard";
import { Button } from "../../components/ui/button";

const categories = ["All", "Ferrous", "Non-Ferrous", "Industrial", "Construction"];

export default function Minerals() {
  const [filter, setFilter] = useState("All");

  // Mock category logic since data doesn't have it explicitly
  const filteredMinerals = filter === "All"
    ? minerals
    : minerals.filter(m => {
      if (filter === "Ferrous" && (m.name.includes("Iron") || m.name.includes("Manganese"))) return true;
      if (filter === "Non-Ferrous" && (m.name.includes("Bauxite"))) return true;
      if (filter === "Industrial" && (m.name.includes("Silica") || m.name.includes("Quartz") || m.name.includes("Limestone"))) return true;
      if (filter === "Construction" && (m.name.includes("Granite") || m.name.includes("Sand"))) return true;
      return false;
    });

  return (
    <div className="pt-24 min-h-screen ">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading title="Our Minerals" subtitle="Product Catalogue" light />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={filter === cat
                ? "bg-[#E0860A] text-slate-950 font-bold"
                : "border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMinerals.map((mineral) => (
            <MineralCard key={mineral.id} mineral={mineral} />
          ))}
        </div>
      </div>
    </div>
  );
}
