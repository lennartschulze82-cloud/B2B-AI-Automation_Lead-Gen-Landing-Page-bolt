import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIsItFor from './components/WhoIsItFor';
import HowWeWork from './components/HowWeWork';
import SystemSchematic from './components/SystemSchematic';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import AutomationCalculator from './components/AutomationCalculator';
import Credibility from './components/Credibility';
import AuditOffer from './components/AuditOffer';
import WhatHappensNext from './components/WhatHappensNext';
import InsightsPreview from './components/InsightsPreview';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import StickyNavbar from './components/StickyNavbar';
import ExitIntentModal from './components/ExitIntentModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() { setModalOpen(true); }
  function closeModal() { setModalOpen(false); }

  return (
    <div className="bg-radial-0a min-h-screen">
      {/* Primary nav */}
      <Navbar onOpenModal={openModal} />

      {/* Secondary sticky scroll-tracker nav */}
      <StickyNavbar onOpenModal={openModal} />

      {/* Page sections */}
      <Hero onOpenModal={openModal} />
      <WhoIsItFor />

      {/* Interactive storytelling */}
      <BeforeAfterSlider />
      <HowWeWork />
      <SystemSchematic />
      <AutomationCalculator />

      {/* Authority & trust */}
      <Credibility />

      {/* Conversion */}
      <AuditOffer />
      <WhatHappensNext />

      {/* Thought leadership */}
      <InsightsPreview />

      <FinalCTA onOpenModal={openModal} />
      <Footer />

      {/* Modals */}
      <AuditModal isOpen={modalOpen} onClose={closeModal} />
      <ExitIntentModal />
    </div>
  );
}
