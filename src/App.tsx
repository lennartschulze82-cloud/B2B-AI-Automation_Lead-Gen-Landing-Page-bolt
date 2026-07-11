import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIsItFor from './components/WhoIsItFor';
import HowWeWork from './components/HowWeWork';
import Credibility from './components/Credibility';
import AuditOffer from './components/AuditOffer';
import WhatHappensNext from './components/WhatHappensNext';
import FinalCTA from './components/FinalCTA';
import AuditModal from './components/AuditModal';
import Footer from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() { setModalOpen(true); }
  function closeModal() { setModalOpen(false); }

  return (
    <div className="bg-radial-0a min-h-screen">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <WhoIsItFor />
      <HowWeWork />
      <Credibility />
      <AuditOffer />
      <WhatHappensNext />
      <FinalCTA onOpenModal={openModal} />
      <Footer />
      <AuditModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}
