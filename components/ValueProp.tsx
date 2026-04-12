import { Check } from "lucide-react";
import Image from "next/image";

interface ValuePropProps {
  onEstimateClick: () => void;
}

export default function ValueProp({ onEstimateClick }: ValuePropProps) {
  return (
    <section className="py-20" style={{ backgroundColor: "rgba(0, 10, 99, 0.08)" }}>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-stretch">
        {/* Left — image */}
        <div className="relative min-h-[350px] md:min-h-0 md:h-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_2.jpg"
            alt="Luxury Custom Pool - Texas Custom Outdoors"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right — text */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-medium text-[#111] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A Backyard Built For{" "}
            <span className="text-[#4AB3F4]">Effortless Luxury</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Step into a custom resort-style backyard with a pool, water
            features, and premium outdoor spaces—your personal oasis for
            relaxation and entertainment. Texas Custom Outdoors (TCO) delivers
            sophisticated, durable backyard transformations with expert
            craftsmanship.
          </p>

          <ul className="space-y-4 mb-6">
            {[
              "Custom-designed for your lifestyle & space",
              "Engineered for beauty, longevity, and effortless maintenance",
              "Built with precision by a veteran-owned team that values integrity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  size={20}
                  className="text-[#253551] mt-0.5 flex-shrink-0"
                  strokeWidth={3}
                />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 text-base mb-8">
            Your dream outdoor retreat starts here.
          </p>

          <button
            onClick={onEstimateClick}
            className="bg-[#253551] text-white font-medium px-10 py-4 rounded-lg hover:bg-[#000A63] transition-all"
          >
            Get Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
