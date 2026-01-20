import Image from "next/image";
import Link from "next/link";

export function MineralCard({ mineral }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden hover:border-primary/40 transition-all">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={mineral.image}
          alt={mineral.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white uppercase">
          {mineral.name}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {mineral.description}
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="text-[#E0860A] font-bold text-sm">
            Purity: {mineral.purity}
          </span>

          <Link
            href={`/minerals/${mineral.slug}`}
            className="text-white text-sm font-semibold hover:text-[#E0860A] transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
