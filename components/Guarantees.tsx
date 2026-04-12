
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
              <svg viewBox="0 0 120 120" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="g-top-arc" d="M 12,60 A 48,48 0 0,1 108,60" />
                  <path id="g-bot-arc" d="M 20,73 A 43,43 0 0,0 100,73" />
                </defs>
                <circle cx="60" cy="60" r="57" fill="none" stroke="#1a3260" strokeWidth="2" strokeDasharray="4,2.5" />
                <circle cx="60" cy="60" r="55" fill="white" />
                <circle cx="60" cy="60" r="49" fill="none" stroke="#1a3260" strokeWidth="2" />
                <text x="38" y="25" fontSize="10" fill="#1a3260" textAnchor="middle">★</text>
                <text x="60" y="18" fontSize="10" fill="#1a3260" textAnchor="middle">★</text>
                <text x="82" y="25" fontSize="10" fill="#1a3260" textAnchor="middle">★</text>
                <text fontSize="8" fill="#1a3260" fontWeight="700" letterSpacing="2.5">
                  <textPath href="#g-top-arc" startOffset="13%">BEST QUALITY</textPath>
                </text>
                <line x1="14" y1="65" x2="42" y2="65" stroke="#1a3260" strokeWidth="1.5" />
                <line x1="78" y1="65" x2="106" y2="65" stroke="#1a3260" strokeWidth="1.5" />
                <text x="60" y="71" fontSize="13.5" fill="#1a3260" fontWeight="800" textAnchor="middle" letterSpacing="0.5">GUARANTEE</text>
                <text fontSize="8" fill="#1a3260" fontWeight="700" letterSpacing="2.5">
                  <textPath href="#g-bot-arc" startOffset="13%">BEST QUALITY</textPath>
                </text>
              </svg>
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
              <svg viewBox="0 0 110 125" width="96" height="108" xmlns="http://www.w3.org/2000/svg">
                <path d="M55,5 L105,32 L105,86 L55,118 L5,86 L5,32 Z" fill="#c8cfd8" stroke="#a8b0bc" strokeWidth="1.5"/>
                <path d="M55,11 L99,36 L99,84 L55,112 L11,84 L11,36 Z" fill="#dde1e8" stroke="#c0c8d4" strokeWidth="1"/>
                <polygon points="28,38 33,25 42,33 55,20 68,33 77,25 82,38" fill="#FFD700" stroke="#B8860B" strokeWidth="0.8"/>
                <rect x="28" y="37" width="54" height="7" rx="1" fill="#FFD700" stroke="#B8860B" strokeWidth="0.8"/>
                <text x="55" y="78" fontSize="26" fill="#1a3260" fontWeight="900" textAnchor="middle">100%</text>
                <path d="M8,87 L102,87 L97,97 L102,108 L8,108 L13,97 Z" fill="#1a3260"/>
                <text x="55" y="101" fontSize="9.5" fill="white" fontWeight="700" textAnchor="middle" letterSpacing="2">SATISFACTION</text>
              </svg>
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
