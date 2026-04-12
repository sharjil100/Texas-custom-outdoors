import { ClipboardList, BadgeDollarSign, Target, HeadsetIcon } from "lucide-react";

interface ProcessProps {
  onEstimateClick: () => void;
  id?: string;
}

const steps = [
  {
    icon: <ClipboardList size={48} strokeWidth={1.5} />,
    title: "On-Site Consultation & 3D Design",
    description:
      "We visit your home, discuss your vision, and create a stunning 3D rendering so you can see your project before construction begins.",
  },
  {
    icon: <BadgeDollarSign size={48} strokeWidth={1.5} />,
    title: "Transparent Pricing & Project Approval",
    description:
      "No unnecessary add-ons\u2014just custom, ground-up pricing with full cost transparency.",
  },
  {
    icon: <Target size={48} strokeWidth={1.5} />,
    title: "Precision Construction & Quality Control",
    description:
      "A dedicated Project Manager oversees every detail while our 6-point quality check ensures flawless execution.",
  },
  {
    icon: <HeadsetIcon size={48} strokeWidth={1.5} />,
    title: "Pool Start-Up & Long-Term Support",
    description:
      "We walk you through pool start-up, maintenance, and safety so you can enjoy your new space with confidence.",
  },
];

export default function Process({ onEstimateClick, id = "process" }: ProcessProps) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl lg:text-[42px] font-medium text-[#111] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            At <span className="text-[#4AB3F4]">Texas Custom Outdoors</span>, We Do Things Differently
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            We believe luxury shouldn&apos;t come with headaches. Here&apos;s
            how we make your backyard transformation effortless
          </p>
        </div>

        {/* 4-column steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="relative inline-flex items-center justify-center text-[#253551] mx-auto mb-5">
                {step.icon}
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <h3
                className="font-semibold text-[#111] text-lg mb-3 leading-snug"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
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
