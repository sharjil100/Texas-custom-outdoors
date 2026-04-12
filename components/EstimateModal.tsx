"use client";

import { useState, useEffect } from "react";
import { X, Phone, CheckCircle, Loader2 } from "lucide-react";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  projectType: string;
  timeline: string;
  message: string;
  consent: boolean;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  projectType: "",
  timeline: "",
  message: "",
  consent: false,
};

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setForm(initialForm);
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-().]{7,}$/.test(form.phone))
      newErrors.phone = "Please enter a valid phone number";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address";
    if (!form.projectType) newErrors.projectType = "Please select a project type";
    if (!form.consent) newErrors.consent = "Please accept to continue";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate form submission delay
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
    if (errors[target.name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [target.name]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get Free Estimate"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#32373c] text-white px-7 py-5 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h2
              className="font-medium text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get Your Free Estimate Now!
            </h2>
            <p className="text-gray-400 text-sm">
              No obligations · 100% free · We respond within 24 hours
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          /* Success state */
          <div className="px-7 py-16 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h3
              className="font-medium text-2xl text-[#32373c] mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Thank You, {form.firstName}!
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We&apos;ve received your request and will be in touch within 24 hours to
              schedule your free consultation.
            </p>
            <div className="bg-[#f5f7fa] rounded-xl p-5 mb-6 text-left max-w-sm mx-auto">
              <p className="font-semibold text-sm text-[#32373c] mb-2">What happens next?</p>
              <ol className="space-y-1 text-sm text-gray-600 list-decimal list-inside">
                <li>We&apos;ll call you to confirm your details</li>
                <li>Schedule your on-site consultation</li>
                <li>Receive your stunning 3D design</li>
                <li>Get your transparent price quote</li>
              </ol>
            </div>
            <a
              href="tel:8323153255"
              className="flex items-center justify-center gap-2 bg-[#32373c] text-white font-medium px-7 py-3.5 rounded hover:bg-gray-800 transition-all mx-auto w-fit"
            >
              <Phone size={16} />
              Call (832) 315-3255 Now
            </a>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="px-7 py-6 space-y-5">
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#32373c] mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors ${
                    errors.firstName
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300 focus:border-[#32373c]"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#32373c] mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors ${
                    errors.lastName
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300 focus:border-[#32373c]"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Contact row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#32373c] mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(832) 000-0000"
                  className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors ${
                    errors.phone
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300 focus:border-[#32373c]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#32373c] mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors ${
                    errors.email
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300 focus:border-[#32373c]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Project type */}
            <div>
              <label className="block text-sm font-semibold text-[#32373c] mb-1.5">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors bg-white ${
                  errors.projectType
                    ? "border-red-400 bg-red-50"
                    : "border-gray-300 focus:border-[#32373c]"
                }`}
              >
                <option value="">Select a project type…</option>
                <option value="custom-pool">Custom In-Ground Pool</option>
                <option value="pool-outdoor-kitchen">Pool + Outdoor Kitchen</option>
                <option value="pool-patio">Pool + Patio</option>
                <option value="outdoor-kitchen">Outdoor Kitchen Only</option>
                <option value="fire-pit">Custom Fire Pit / Fireplace</option>
                <option value="pergola">Pergola / Cabana</option>
                <option value="full-backyard">Complete Backyard Transformation</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && (
                <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
              )}
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-semibold text-[#32373c] mb-1.5">
                Desired Timeline
              </label>
              <select
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-[#32373c] rounded-lg px-4 py-3 text-sm outline-none transition-colors bg-white"
              >
                <option value="">Select a timeline…</option>
                <option value="asap">As soon as possible</option>
                <option value="1-3mo">1–3 months</option>
                <option value="3-6mo">3–6 months</option>
                <option value="6-12mo">6–12 months</option>
                <option value="just-looking">Just exploring options</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-[#32373c] mb-1.5">
                Tell Us About Your Project
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your vision, backyard size, specific features you want, etc."
                className="w-full border border-gray-300 focus:border-[#32373c] rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
              />
            </div>

            {/* Consent */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-0.5 flex-shrink-0 w-4 h-4 accent-[#32373c]"
                />
                <span className="text-xs text-gray-600 leading-relaxed">
                  By submitting this form, I agree to be contacted by Texas
                  Custom Outdoors via phone, text, or email regarding my
                  project inquiry. I understand this is not a commitment to
                  purchase.
                </span>
              </label>
              {errors.consent && (
                <p className="text-red-500 text-xs mt-1">{errors.consent}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#32373c] text-white font-medium text-base py-4 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending Your Request…
                </>
              ) : (
                "Get My Free Estimate →"
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              🔒 Your information is secure and will never be shared.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
