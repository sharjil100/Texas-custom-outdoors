"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", zip: "", project: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) { setForm({ name: "", email: "", phone: "", zip: "", project: "" }); setSubmitted(false); }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal card */}
      <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="px-8 py-14 text-center">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-[#253551] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Thank You!
            </h3>
            <p className="text-gray-500 text-sm">We&apos;ll be in touch within 24 hours.</p>
          </div>
        ) : (
          <div className="px-8 py-8">
            {/* Title */}
            <h2
              className="text-center text-xl font-semibold text-[#111] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get Your Free Estimate Now!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Full Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#1e3a8a] transition-colors"
              />
              <input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#1e3a8a] transition-colors"
              />
              <input
                type="tel"
                placeholder="Your Phone No."
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#1e3a8a] transition-colors"
              />
              <input
                type="text"
                placeholder="Zip Code"
                value={form.zip}
                onChange={(e) => setForm({ ...form, zip: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#1e3a8a] transition-colors"
              />
              <textarea
                placeholder="Tell Us About Your Project"
                value={form.project}
                onChange={(e) => setForm({ ...form, project: e.target.value })}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#1e3a8a] transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1e3a8a] text-white font-semibold text-base py-4 rounded-lg hover:bg-[#1e40af] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : "Free Estimate"}
              </button>
              <p className="text-center text-xs text-gray-400">🔒 Safe and Secure</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
