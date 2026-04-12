import { Check } from "lucide-react";
import Image from "next/image";

interface OutdoorFeaturesProps {
  onEstimateClick: () => void;
}

const features = [
  {
    title: "Custom Fire Pits & Fireplaces",
    description:
      "Gather around the warmth for unforgettable nights.",
  },
  {
    title: "Outdoor Kitchens & Bars",
    description:
      "Host effortlessly with a fully equipped outdoor cooking space.",
  },
  {
    title: "Elegant Pergolas & Cabanas",
    description:
      "Enjoy shaded relaxation with a structure designed for both comfort and aesthetics.",
  },
];

export default function OutdoorFeatures({ onEstimateClick }: OutdoorFeaturesProps) {
  return (
    <section id="features" className="py-20" style={{ backgroundColor: "rgba(0, 10, 99, 0.08)" }}>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-stretch">
        {/* Left — image */}
        <div className="relative min-h-[350px] md:min-h-0 md:h-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_11.jpg"
            alt="Outdoor Living Features - Texas Custom Outdoors"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right — text */}
        <div className="text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl font-medium text-[#111] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Elevate Your Outdoor Space{" "}
            <span className="text-[#4AB3F4]">Beyond The Pool</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            A luxury backyard is more than just a pool—it&apos;s a complete
            retreat designed for every season. Our premium outdoor living
            features add beauty, functionality, and comfort to your space:
          </p>

          <ul className="space-y-5 mb-8">
            {features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3 justify-center md:justify-start">
                <Check
                  size={20}
                  className="text-[#253551] mt-0.5 flex-shrink-0"
                  strokeWidth={3}
                />
                <span className="text-gray-700 text-left">
                  <strong className="text-[#111]">{feature.title}</strong>
                  {" "}– {feature.description}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Every feature is custom-crafted to fit your home&apos;s architecture
            and lifestyle, turning your backyard into a true extension of your
            living space.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={onEstimateClick}
              className="bg-[#253551] text-white font-medium px-10 py-4 rounded-lg hover:bg-[#000A63] transition-all"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
