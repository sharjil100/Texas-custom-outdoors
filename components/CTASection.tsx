import { Phone } from "lucide-react";

interface CTASectionProps {
  onEstimateClick: () => void;
}

export default function CTASection({ onEstimateClick }: CTASectionProps) {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(180deg, rgba(0, 10, 99, 0.06) 0%, rgba(24, 119, 242, 0.12) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-medium text-[#111] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Don&apos;t Wait – <span className="text-[#4AB3F4]">Act Now!</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Ready To Bring Your Dream Pool To Life? Our Expert Team Will Work With
          You To Design A Custom Pool That Perfectly Fits Your Style, Space, And Budget.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onEstimateClick}
            className="bg-[#253551] text-white font-medium text-base px-10 py-4 rounded-lg hover:bg-[#000A63] transition-all"
          >
            Get Free Estimate
          </button>
          <a
            href="tel:8323153255"
            className="flex items-center justify-center gap-2 bg-white text-[#253551] font-medium text-base px-10 py-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
