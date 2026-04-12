"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    src: "https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_1.jpg",
    alt: "Custom Pool Project 1 – Resort-Style Backyard",
    title: "Resort-Style Pool",
  },
  {
    id: 2,
    src: "https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_2.jpg",
    alt: "Custom Pool Project 2 – Modern Design",
    title: "Modern Pool Design",
  },
  {
    id: 3,
    src: "https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_6.jpg",
    alt: "Custom Pool Project 3 – Outdoor Kitchen",
    title: "Pool & Outdoor Kitchen",
  },
  {
    id: 4,
    src: "https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_9.jpg",
    alt: "Custom Pool Project 4 – Water Features",
    title: "Pool with Water Features",
  },
  {
    id: 5,
    src: "https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_11.jpg",
    alt: "Custom Pool Project 5 – Luxury Patio",
    title: "Luxury Pool & Patio",
  },
  {
    id: 6,
    src: "https://thetexascustomoutdoors.com/wp-content/uploads/2025/07/resized_4-1.jpg",
    alt: "Custom Pool Project 6 – Complete Backyard",
    title: "Complete Backyard Transformation",
  },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + projects.length) % projects.length : 0));
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % projects.length : 0));

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: "rgba(0, 10, 99, 0.08)" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-medium text-[#000A63] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Recent Projects:{" "}
            <span style={{ color: "#4AB3F4" }}>See Our Work In Action!</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our latest projects! Click on a project to
            explore stunning images and get inspired for your backyard project.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(idx)}
              aria-label={`View ${project.title}`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full bg-gradient-to-t from-black/80 p-4">
                  <p className="text-white font-bold text-sm">{project.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[lightbox].src}
              alt={projects[lightbox].alt}
              fill
              className="object-contain rounded-lg"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
          <p className="absolute bottom-4 text-white/70 text-sm">
            {projects[lightbox].title} — {lightbox + 1} / {projects.length}
          </p>
        </div>
      )}
    </section>
  );
}
