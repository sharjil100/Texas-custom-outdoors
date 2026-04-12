import Image from "next/image";

interface DifferentiatorsProps {
  onEstimateClick: () => void;
}

const points = [
  {
    number: "1",
    title: "High-Definition 3D Renderings",
    description: "See your backyard before we build it.See your backyard before we build it.",
  },
  {
    number: "2",
    title: "Transparent, Custom Pricing",
    description: "No pre-set packages or hidden fees.",
  },
  {
    number: "3",
    title: "6-Point Quality Control Process",
    description: "Precision-built, no shortcuts.",
  },
  {
    number: "4",
    title: "Dedicated Project Manager",
    description: "Seamless communication, zero stress.",
  },
  {
    number: "5",
    title: "Veteran-Owned & Integrity-Driven",
    description: "We stand behind every project.",
  },
];

export default function Differentiators({ onEstimateClick }: DifferentiatorsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-stretch">
        {/* Left — text */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-medium text-[#111] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Makes{" "}
            <span className="text-[#4AB3F4]">Texas Custom Outdoors</span>{" "}
            Different?
          </h2>
          <p className="text-gray-500 mb-8">
            Unlike other builders, we custom-craft every project from the ground
            up, ensuring unmatched quality, stunning designs, and total
            transparency.
          </p>

          {/* Numbered list */}
          <div className="space-y-5 mb-10">
            {points.map((point) => (
              <div key={point.number} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#000A63] text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium text-sm">
                  {point.number}
                </div>
                <div className="pt-1">
                  <span className="font-semibold text-[#111]">
                    {point.title}
                  </span>
                  <span className="text-gray-500">
                    {" "}- {point.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onEstimateClick}
            className="bg-[#253551] text-white font-medium px-10 py-4 rounded-lg hover:bg-[#000A63] transition-all"
          >
            Get Free Estimate
          </button>
        </div>

        {/* Right — image */}
        <div className="relative min-h-[350px] md:min-h-0 md:h-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_9.jpg"
            alt="Custom Pool - What Makes TCO Different"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
