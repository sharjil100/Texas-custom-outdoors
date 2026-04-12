import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How Much Does A Custom Pool Cost To Build?",
    answer:
      "Pricing Depends On Your Pool Size And Specific Needs. Call Us For A Free Quote!",
  },
  {
    question: "How Do I Know What Design I Want?",
    answer:
      "Our Expert Designers Will Work With You To Ensure That We Find The Perfect Fit For Your Vision. We Are Experienced In Guiding You Through The Planning Process To Ensure You Are Thrilled With The End Result.",
  },
  {
    question: "How Long Does It Take To Build A Custom Pool?",
    answer:
      "It Depends On The Scope Of Work, But We Provide A Clear Timeline Upfront And Clear Expectations.",
  },
  {
    question: "What Areas Do You Serve?",
    answer:
      "We Specialize In Servicing In-Ground, Custom Pools In The Greater Houston Area.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20" style={{ backgroundColor: "rgba(0, 10, 99, 0.08)" }}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-medium text-[#111]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked <span className="text-[#4AB3F4]">Questions</span>
          </h2>
        </div>

        {/* FAQ items — all expanded */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl px-6 py-5 shadow-sm flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#000A63] text-white rounded-full flex items-center justify-center mt-0.5">
                <HelpCircle size={20} />
              </div>
              <div>
                <h3
                  className="font-semibold text-[#111] text-base mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {faq.question}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
