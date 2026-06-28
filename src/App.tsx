import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';

// Main Stable Pages
import Index from './pages/Index';
import About from './pages/About';
import Resources from './pages/Resources';
import BecomeOne from './pages/BecomeOne';
import Donate from './pages/Donate';
import Mission from './pages/Mission';

// Core Secondary Pages
import Tavern from './pages/tavern';
import CommitteesOfObservation from './pages/CommitteesOfObservation';

// Constitution Academy
import ConstitutionAcademy from './pages/ConstitutionAcademy';

// Footer Pages
import PrivacyAndData from './pages/PrivacyAndData';
import SocialWelfareOrganization from './pages/SocialWelfareOrganization';
import TransparencyAndOperations from './pages/TransparencyAndOperations';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/become-one" element={<BecomeOne />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/mission" element={<Mission />} />

          {/* Constitution Academy */}
          <Route path="/resources/constitution-academy" element={<ConstitutionAcademy />} />

          {/* Footer Pages */}
          <Route path="/privacy-and-data" element={<PrivacyAndData />} />
          <Route path="/social-welfare-organization" element={<SocialWelfareOrganization />} />
          <Route path="/transparency-and-operations" element={<TransparencyAndOperations />} />

          {/* Tavern & Committees */}
          <Route path="/tavern" element={<Tavern />} />
          <Route path="/committees" element={<CommitteesOfObservation />} />
          <Route path="/committees-of-observation" element={<CommitteesOfObservation />} />

          <Route path="*" element={<div className="text-center py-20 text-xl">Page Not Found</div>} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;
