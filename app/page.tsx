"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import ValueProp from "@/components/ValueProp";
import Differentiators from "@/components/Differentiators";
import OutdoorFeatures from "@/components/OutdoorFeatures";
import Testimonials from "@/components/Testimonials";
import Guarantees from "@/components/Guarantees";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onEstimateClick={openModal} />
      <main>
        <Hero onEstimateClick={openModal} />
        <TrustBadges />
        <Projects />
        <Process onEstimateClick={openModal} />
        <ValueProp onEstimateClick={openModal} />
        <Differentiators onEstimateClick={openModal} />
        <OutdoorFeatures onEstimateClick={openModal} />
        <Testimonials />
        <Process onEstimateClick={openModal} id="process-2" />
        <Guarantees onEstimateClick={openModal} />
        <FAQ />
        <CTASection onEstimateClick={openModal} />
      </main>
      <Footer />
      <EstimateModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
