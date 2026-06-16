import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import KnowAboutMeModal from './components/KnowAboutMeModal';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import { LinkedInSection, GitHubSection, EmailSection, ResumeSection } from './components/SocialSections';
import AvatarAssistant from './components/AvatarAssistant';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [avatarMood, setAvatarMood] = useState('idle');

  const handleSelect = (section) => {
    setShowModal(false);
    setActiveSection(section);
    if (section === 'skills') setAvatarMood('thinking');
    else if (section === 'projects') setAvatarMood('happy');
    else setAvatarMood('surprised');
  };

  // Fully close everything (e.g. overlay click on modal)
  const handleClose = () => {
    setActiveSection(null);
    setAvatarMood('idle');
  };

  // X button on a section → go back to the modal grid
  const handleBack = () => {
    setActiveSection(null);
    setShowModal(true);
    setAvatarMood('idle');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <ParticleBackground />

      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-1"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(220,20,60,0.015) 2px, rgba(220,20,60,0.015) 4px)' }} />

      <Header />

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen pt-16">
        <ProfileSection onKnowMore={() => setShowModal(true)} setAvatarMood={setAvatarMood} />
      </main>

      {/* Name & tagline at bottom */}
      <div className="fixed bottom-6 left-8 z-10 hidden md:block">
        <p className="font-mono-tech text-xs text-gray-600 tracking-widest">
          MALLURI BHASKAR HIMESH · EEE · AI RESEARCH INTERN
        </p>
      </div>

      {/* Modal grid — closes on overlay click */}
      <AnimatePresence>
        {showModal && (
          <KnowAboutMeModal
            onClose={() => setShowModal(false)}
            onSelect={handleSelect}
          />
        )}
      </AnimatePresence>

      {/* Sections — X button goes back to modal grid */}
      <AnimatePresence>
        {activeSection === 'projects'       && <ProjectsSection onClose={handleBack} />}
        {activeSection === 'skills'         && <SkillsSection onClose={handleBack} />}
        {activeSection === 'experience'     && <ExperienceSection onClose={handleBack} />}
        {activeSection === 'certifications' && <CertificationsSection onClose={handleBack} />}
        {activeSection === 'education'      && <EducationSection onClose={handleBack} />}
        {activeSection === 'linkedin'       && <LinkedInSection onClose={handleBack} />}
        {activeSection === 'github'         && <GitHubSection onClose={handleBack} />}
        {activeSection === 'email'          && <EmailSection onClose={handleBack} />}
        {activeSection === 'resume'         && <ResumeSection onClose={handleBack} />}
      </AnimatePresence>

      <AvatarAssistant mood={avatarMood} />
    </div>
  );
}