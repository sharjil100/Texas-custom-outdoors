"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onEstimateClick: () => void;
}

export default function Header({ onEstimateClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo only — no company name text */}
        <a href="#hero" className="flex items-center">
          <div className="w-24 h-24 relative">
            <Image
              src="https://thetexascustomoutdoors.com/wp-content/uploads/2025/03/Column-e1742869290561.png"
              alt="Texas Custom Outdoors Logo"
              fill
              className="object-contain"
            />
          </div>
        </a>

        {/* Desktop CTA — always visible: label → navy phone button → hours */}
        <div className="hidden md:flex flex-col items-end gap-1">
          <span className="text-white text-sm font-medium tracking-wide">
            Call For A Free Quote
          </span>
          <a
            href="tel:8323153255"
            className="flex items-center gap-2 bg-[#1e3a8a] text-white font-medium text-base px-6 py-3 rounded hover:bg-[#1e40af] transition-all"
          >
            <Phone size={16} />
            (832) 315-3255
          </a>
          <span className="text-white text-sm opacity-75">
            Available 9AM - 6PM&nbsp;|&nbsp;Mon - Sun
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          <a
            href="tel:8323153255"
            className="flex items-center justify-center gap-2 bg-[#1e3a8a] text-white font-medium text-sm px-4 py-3 rounded"
          >
            <Phone size={14} />
            (832) 315-3255
          </a>
          <p className="text-white/70 text-xs text-center">Available 9AM - 6PM | Mon - Sun</p>
          <button
            onClick={() => { setMobileOpen(false); onEstimateClick(); }}
            className="bg-white text-[#1e3a8a] font-medium text-sm px-5 py-3 rounded"
          >
            Get Free Estimate
          </button>
        </div>
      )}
    </header>
  );
}
