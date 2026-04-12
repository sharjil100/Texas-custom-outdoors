"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Handshake, ShieldCheck } from "lucide-react";

interface HeroProps {
  onEstimateClick: () => void;
}

export default function Hero({ onEstimateClick: _onEstimateClick }: HeroProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    project: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Primary background — real pool photo at full opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_1.jpg')`,
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 md:pt-32 pb-28 w-full">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-center mb-16">

          {/* Left — text */}
          <div className="text-white text-center md:text-left">
            <p className="text-sm font-normal tracking-wide text-white/70 mb-4">
              #1 Backyard Investment For Beauty, Relaxation &amp; Value
            </p>
            <h1
              className="text-4xl md:text-5xl font-medium leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Backyard{" "}
              <span style={{ color: "#4AB3F4" }}>Designed</span>
              {" "}For Effortless Luxury
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8">
              Imagine stepping outside into a stunning, resort-style
              backyard—custom-designed just for you. A crystal-clear pool,
              soothing water features, and a seamless outdoor living space built
              with precision, durability, and luxury in mind. At Texas Custom
              Outdoors, we bring your vision to life with:
            </p>

            <ul className="space-y-3">
              {[
                "Crafting custom pools with precision and care.",
                "Innovative swimming pool construction tailored to you.",
                "Quality-driven process for lasting results.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200 text-sm md:text-base justify-center md:justify-start">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-left">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — glassmorphism form card */}
          <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Heading directly on glass */}
            <div className="px-6 pt-6 pb-2 text-center">
              <h2
                className="font-medium text-2xl text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get Your Free Estimate Now!
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-medium text-xl text-white mb-2">Thank You!</h3>
                <p className="text-white/70 text-sm">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-3">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white outline-none focus:border-blue-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white outline-none focus:border-blue-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Your Phone No."
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white outline-none focus:border-blue-400 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white outline-none focus:border-blue-400 transition-colors"
                />
                <textarea
                  placeholder="Tell Us About Your Project"
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white outline-none focus:border-blue-400 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1e3a8a] text-white font-medium text-base py-4 rounded-lg hover:bg-[#1e40af] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Free Estimate"
                  )}
                </button>
                <p className="text-center text-xs text-white/60">
                  🔒 Safe and Secure
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Trust badges strip */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center text-white gap-1">
            <span
              className="font-medium text-3xl leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              100%
            </span>
            <span className="text-xs text-white/70 text-center">Satisfaction</span>
          </div>

          <div className="flex flex-col items-center text-white gap-1">
            <Handshake size={32} className="text-white" />
            <span className="text-xs text-white/70 text-center">Family Owned</span>
          </div>

          <div className="flex flex-col items-center text-white gap-1">
            <ShieldCheck size={32} className="text-white" />
            <span className="text-xs text-white/70 text-center">Lifetime Warranty</span>
          </div>

          <div className="flex flex-col items-center text-white gap-1">
            <span
              className="font-medium text-3xl leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              15 Years
            </span>
            <span className="text-xs text-white/70 text-center">Experience</span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 66.7C120 53 240 27 360 21.3C480 16 600 32 720 42.7C840 53 960 59 1080 53.3C1200 48 1320 32 1380 24L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
