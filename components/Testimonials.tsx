"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Diane Hedges",
    text: "Texas Custom Outdoors did an outstanding job at installing a pool and outdoor kitchen in our backyard. Pricing for installation was competitive. The PM, Tracy Glenn followed us through the process from the beginning, and is still available if we have questions. Tracy was attentive to our needs, ensuring our satisfaction. He is highly knowledgeable and very professional. We would definitely use Texas Custom Outdoors again.",
    rating: 5,
  },
  {
    id: 2,
    name: "Manny Corona",
    text: "Texas Custom Outdoors just completed my pool/patio. I wanted a modern sleek look and they delivered. Obviously they are in tune with recent trends. Everyone says I hit home-run but actually I trusted their recommendations. Everything worked great in spite of a hurricane and a lot of rain. BTW, their graphics software helped me visualize the finished product before we started. This was a big plus.",
    rating: 5,
  },
  {
    id: 3,
    name: "Clifton Marble",
    text: "Thank you, to Texas Custom Outdoors. Absolutely love Tracy. Very responsive, respectful, and patient with all of our questions. Tracy was easy to work with, he was very professional, and he has years of experience and knowledge. I highly recommend this company for any backyard project!",
    rating: 5,
  },
  {
    id: 4,
    name: "Cam James",
    text: "Fantastic company to work with. The design process was so smooth \u2013 they incorporated everything we wanted and made great suggestions. Highly recommend Texas Custom Outdoors to anyone looking for a luxury backyard transformation.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrentIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-medium text-[#111] mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our <span className="text-[#4AB3F4]">Happy Customers</span> Say
          </h2>
          <p className="text-gray-500 text-sm">
            Hear from our satisfied clients who turned their backyard dreams into reality.
          </p>
        </div>

        {/* Google logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>

        {/* Testimonial content with arrows */}
        <div className="relative flex items-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 text-gray-400 hover:text-gray-700 transition-colors p-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Review text */}
          <div className="flex-1 text-center px-4">
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {t.text}
            </p>
            <p
              className="font-semibold text-[#111] text-base mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t.name}
            </p>
            <div className="flex justify-center gap-0.5">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 text-gray-400 hover:text-gray-700 transition-colors p-2"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
