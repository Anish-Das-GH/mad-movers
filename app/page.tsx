'use client';

import React, { useState } from 'react';
import { BRANCHES, Workshop, DanceStyle } from '@/data/danceData';
import { KineticBackground } from '@/components/ui/KineticBackground';
import { Navbar } from '@/components/layout/Navbar';
import { RevampedHero } from '@/components/sections/RevampedHero';
import { HeroVideoReelCarousel } from '@/components/sections/HeroVideoReelCarousel';
import { PressAndTrustBar } from '@/components/sections/PressAndTrustBar';
import { FourPathwaysSection } from '@/components/sections/FourPathwaysSection';
import { DanceVideoShowcase } from '@/components/sections/DanceVideoShowcase';
import { FacultyTeamSection } from '@/components/sections/FacultyTeamSection';
import { OurSignaturesSection } from '@/components/sections/OurSignaturesSection';
import { MovementLabSection } from '@/components/sections/MovementLabSection';
import { TimeScrubberSchedule } from '@/components/sections/TimeScrubberSchedule';
import { PassCalculatorSection } from '@/components/sections/PassCalculatorSection';
import { WorkshopsDropSection } from '@/components/sections/WorkshopsDropSection';
import { StudiosExplorerSection } from '@/components/sections/StudiosExplorerSection';
import { SpecialtiesSection } from '@/components/sections/SpecialtiesSection';
import { UpcomingGalaSection } from '@/components/sections/UpcomingGalaSection';
import { StageArchivesAndBlogSection } from '@/components/sections/StageArchivesAndBlogSection';
import { CypherWallSection } from '@/components/sections/CypherWallSection';
import { AboutStorySection } from '@/components/sections/AboutStorySection';
import { PreFooterCallout } from '@/components/sections/PreFooterCallout';
import { Footer } from '@/components/layout/Footer';
import { BookTrialModal } from '@/components/modals/BookTrialModal';
import { WorkshopBookingModal } from '@/components/modals/WorkshopBookingModal';
import { StyleDetailModal } from '@/components/modals/StyleDetailModal';
import { StudioBeatDock } from '@/components/audio/StudioBeatDock';
import { MessageCircle } from 'lucide-react';

export default function HomePage() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('salt-lake');

  // Modals state
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [trialDefaultBranchId, setTrialDefaultBranchId] = useState('salt-lake');
  const [trialDefaultStyleId, setTrialDefaultStyleId] = useState('hip-hop');

  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);

  const [selectedStyleDetail, setSelectedStyleDetail] = useState<DanceStyle | null>(null);
  const [isStyleModalOpen, setIsStyleModalOpen] = useState(false);

  // Handlers
  const handleOpenTrialModal = (branchId?: string, styleId?: string) => {
    setTrialDefaultBranchId(branchId || selectedBranchId);
    setTrialDefaultStyleId(styleId || 'hip-hop');
    setIsTrialModalOpen(true);
  };

  const handleBookWorkshop = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setIsWorkshopModalOpen(true);
  };

  const handleSelectStyle = (style: DanceStyle) => {
    setSelectedStyleDetail(style);
    setIsStyleModalOpen(true);
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSpecialtyInquiry = (topic: string) => {
    const message = encodeURIComponent(
      `Hi Mad Movers! I am interested in exploring ${topic}. Can someone from your creative team assist me?`
    );
    window.open(`https://wa.me/919831044521?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#09020d] text-[#f3f0f7] selection:bg-amber-400 selection:text-purple-950 font-sans relative overflow-x-hidden">
      {/* Kinetic Particle & Spotlight Canvas */}
      <KineticBackground />

      {/* Top Bar Header */}
      <Navbar
        selectedBranchId={selectedBranchId}
        onSelectBranch={(id) => setSelectedBranchId(id)}
        onOpenTrialModal={() => handleOpenTrialModal()}
      />

      <main className="relative z-10">
        {/* Dynamic Revamped Hero */}
        <RevampedHero
          selectedBranchId={selectedBranchId}
          onSelectBranch={(id) => setSelectedBranchId(id)}
          onOpenTrialModal={handleOpenTrialModal}
          onScrollTo={handleScrollTo}
        />

        {/* Live Studio Video Cards Moving Right-to-Left */}
        <HeroVideoReelCarousel onOpenTrialModal={handleOpenTrialModal} />

        {/* Media Recognition Ribbon & Google Rating Trust Bar */}
        <PressAndTrustBar />

        {/* Cinematic Continuous Loop Dance Video Box */}
        <DanceVideoShowcase onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* One Brand. Four Ways to Move. */}
        <FourPathwaysSection
          onOpenTrialModal={() => handleOpenTrialModal()}
          onExploreStyles={() => handleScrollTo('movement-lab')}
        />

        {/* Meet our Choreographers & Faculty Team */}
        <FacultyTeamSection onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Four Ways to Take the Floor (Signatures) */}
        <OurSignaturesSection
          onOpenTrialModal={() => handleOpenTrialModal()}
          onExploreEvents={() => handleScrollTo('workshops-drop')}
        />

        {/* The Movement Laboratory (Interactive Skill & BPM Matrix) */}
        <div id="movement-lab">
          <MovementLabSection onBookTrial={(styleId) => handleOpenTrialModal(selectedBranchId, styleId)} />
        </div>

        {/* Live Weekly Class Grid (Time-Scrubber Timeline) */}
        <TimeScrubberSchedule
          selectedBranchId={selectedBranchId}
          onSelectBranch={(id) => setSelectedBranchId(id)}
          onBookClass={(styleId, branchId) => handleOpenTrialModal(branchId, styleId)}
        />

        {/* Interactive "Build Your Movement Pass" Smart Calculator */}
        <PassCalculatorSection onOpenTrialModal={() => handleOpenTrialModal(selectedBranchId)} />

        {/* Guest Choreographer Masterclass Drops */}
        <div id="workshops-drop">
          <WorkshopsDropSection onBookWorkshop={handleBookWorkshop} />
        </div>

        {/* The 4 Studio Sanctums (Architectural Blueprint Explorer & Neighborhood Picker) */}
        <StudiosExplorerSection
          selectedBranchId={selectedBranchId}
          onSelectBranch={(id) => setSelectedBranchId(id)}
          onOpenTrialModal={(bId) => handleOpenTrialModal(bId)}
        />

        {/* Sangeet Production Planner, Corporate & Space Rentals */}
        <SpecialtiesSection onOpenInquiry={handleSpecialtyInquiry} />

        {/* Don't Miss What's Next · Annual Stage Gala at EZCC Kolkata */}
        <UpcomingGalaSection onOpenInquiry={handleSpecialtyInquiry} />

        {/* Stage Moments: From Our Archives & Movement Blog Guides */}
        <StageArchivesAndBlogSection onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* The Cypher Wall of Fame (Real Verified Stories & Reactions) */}
        <CypherWallSection />

        {/* Studio Philosophy, Pillars & Direct Helpdesk */}
        <AboutStorySection />

        {/* Pre-Footer Callout (Ready to move? Let's Dance, Kolkata) */}
        <PreFooterCallout
          onOpenTrialModal={(bId) => handleOpenTrialModal(bId)}
          onSelectBranch={(id) => setSelectedBranchId(id)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectBranch={(id) => setSelectedBranchId(id)}
        onOpenTrialModal={() => handleOpenTrialModal()}
      />

      {/* Modals */}
      <BookTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        defaultBranchId={trialDefaultBranchId}
        defaultStyleId={trialDefaultStyleId}
      />

      <WorkshopBookingModal
        workshop={selectedWorkshop}
        isOpen={isWorkshopModalOpen}
        onClose={() => setIsWorkshopModalOpen(false)}
      />

      <StyleDetailModal
        style={selectedStyleDetail}
        isOpen={isStyleModalOpen}
        onClose={() => setIsStyleModalOpen(false)}
        onBookTrial={(styleId) => handleOpenTrialModal(selectedBranchId, styleId)}
      />

      {/* Studio Rhythm Dock with Stop/Feel the Beat Toggle */}
      <StudioBeatDock />

      {/* Floating Direct WhatsApp Button */}
      <a
        href="https://wa.me/919831044521?text=Hi%20Mad%20Movers!%20I%20would%20like%20to%20learn%20more%20about%20your%20dance%20and%20activity%20batches."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-2xl transition-all duration-300 group hover:scale-105"
        aria-label="Chat on WhatsApp with Mad Movers"
      >
        <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
        <span className="inline font-bold">WhatsApp</span>
      </a>
    </div>
  );
}
