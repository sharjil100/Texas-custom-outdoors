import { CheckCircle, Gift } from "lucide-react";
import Image from "next/image";

interface PricingProps {
  onEstimateClick: () => void;
}

export default function Pricing({ onEstimateClick }: PricingProps) {
  return (
    <section className="py-20 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — image */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <Image
                src="https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_2.jpg"
                alt="Transparent Pricing - Texas Custom Outdoors"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right — content */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-3">
              Exclusive Price
            </p>
            <h2
              className="text-3xl md:text-4xl font-medium text-[#32373c] mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              No Hidden Fees. Just Honest, Custom Pricing.
            </h2>
            <div className="w-14 h-1 bg-[#32373c] mb-6" />

            <p className="text-gray-600 mb-8">
              At Texas Custom Outdoors, every project is custom-priced based on
              your specific design. Here&apos;s what sets our pricing apart:
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  title: "No Pre-Set Packages",
                  subtitle: "100% Custom",
                  description:
                    "Every project is priced from scratch based on your unique design, property, and preferences.",
                },
                {
                  title: "No Hidden Fees",
                  subtitle: "Transparent Pricing",
                  description:
                    "What you approve is what you pay. Full cost breakdown before any work begins.",
                },
                {
                  title: "Long-Term Value",
                  subtitle: "Built to Last",
                  description:
                    "Premium materials and expert craftsmanship mean your investment stands the test of time.",
                },
              ].map((vp) => (
                <div key={vp.title} className="flex items-start gap-4">
                  <CheckCircle size={22} className="text-[#32373c] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#32373c]">
                      {vp.title}{" "}
                      <span className="text-[#1e3a5f] text-sm font-semibold">— {vp.subtitle}</span>
                    </p>
                    <p className="text-gray-600 text-sm">{vp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special offer */}
            <div className="bg-[#253551] text-white rounded-xl p-5 flex items-start gap-4 mb-8">
              <Gift size={24} className="flex-shrink-0 text-blue-300 mt-0.5" />
              <div>
                <p className="font-bold">Early-Signup Bonus:</p>
                <p className="text-gray-300 text-sm">
                  3 Free Months of Pool Maintenance — Sign up today and lock in
                  this exclusive offer.
                </p>
              </div>
            </div>

            <button
              onClick={onEstimateClick}
              className="bg-[#253551] text-white font-medium px-8 py-4 rounded hover:bg-[#000A63] transition-all"
            >
              Get Your Free Estimate Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
