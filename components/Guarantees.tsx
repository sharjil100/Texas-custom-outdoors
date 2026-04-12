import { Shield } from "lucide-react";

interface GuaranteesProps {
  onEstimateClick: () => void;
}

const guarantees = [
  { title: "100% Satisfaction Guarantee", description: "Love it or we\u2019ll make it right." },
  { title: "Lifetime Structural Warranty", description: "Built for longevity." },
  { title: "Transparent Pricing Guarantee", description: "No surprise fees." },
  { title: "Upfront Project Time Estimation", description: "Stay on schedule, avoid delays." },
];

const pricingPoints = [
  { title: "No Pre-Set Packages", description: "100% Custom" },
  { title: "No Hidden Fees", description: "Transparent Pricing" },
  { title: "Long-Term Value", description: "Built to Last" },
  { title: "Early-Signup Bonus", description: "3 Free Months of Pool Maintenance" },
];

export default function Guarantees({ onEstimateClick }: GuaranteesProps) {
  return (
    <section className="py-20 bg-[#FBFBFB]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Left — Guarantee card (white) */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center">
            {/* Badge icon */}
            <div className="mb-5">
              <div className="w-24 h-24 relative flex items-center justify-center">
                <Shield size={64} className="text-[#253551]" strokeWidth={1} />
                <span
                  className="absolute text-[#253551] text-[10px] font-bold uppercase tracking-wider"
                  style={{ top: "38%", fontFamily: "var(--font-heading)" }}
                >
                  Guarantee
                </span>
              </div>
            </div>

            <span className="inline-block bg-[#1877F2] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              Risk-Free Guarantee
            </span>

            <h3
              className="text-xl font-medium text-[#111] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Industry-Leading Guarantees For Total Confidence
            </h3>

            <div className="space-y-4 mb-8 w-full">
              {guarantees.map((g) => (
                <div key={g.title} className="text-center">
                  <p className="font-semibold text-[#000A63] text-sm">{g.title}</p>
                  <p className="text-gray-500 text-sm">{g.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onEstimateClick}
              className="mt-auto bg-[#253551] text-white font-medium px-10 py-4 rounded-lg hover:bg-[#000A63] transition-all w-full max-w-xs"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Right — Pricing card (dark navy) */}
          <div className="bg-[#000A63] rounded-2xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center text-white">
            {/* Badge icon */}
            <div className="mb-5">
              <div className="w-24 h-24 relative flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-yellow-400 rounded-full flex flex-col items-center justify-center">
                  <span className="text-yellow-400 text-xl font-bold leading-none">100%</span>
                  <span className="text-yellow-400 text-[8px] font-semibold uppercase tracking-wider">Satisfaction</span>
                </div>
              </div>
            </div>

            <span className="inline-block bg-[#1877F2] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              Exclusive Price
            </span>

            <h3
              className="text-xl font-medium text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              No Hidden Fees. Just Honest, Custom Pricing
            </h3>

            <p className="text-gray-300 text-sm mb-6">
              At Texas Custom Outdoors, every project is custom-priced based on your specific design
            </p>

            <div className="space-y-4 mb-8 w-full">
              {pricingPoints.map((p) => (
                <div key={p.title} className="text-center">
                  <p className="font-semibold text-white text-sm">{p.title}</p>
                  <p className="text-gray-300 text-sm">{p.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onEstimateClick}
              className="mt-auto bg-white text-[#000A63] font-medium px-10 py-4 rounded-lg hover:bg-gray-100 transition-all w-full max-w-xs border border-white"
            >
              Get Free Estimate
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
