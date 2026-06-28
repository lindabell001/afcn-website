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
import Committees from './pages/committees';

// Constitution Academy
import ConstitutionAcademy from './pages/ConstitutionAcademy';

// Footer Pages
import PrivacyAndData from './pages/PrivacyAndData';
import SocialWelfareOrganization from './pages/SocialWelfareOrganization';
import TransparencyAndOperations from './pages/TransparencyAndOperations';

// Sub-pages
import TavernLocations from './pages/tavern/locations';
import CommitteesLocal from './pages/committees/local';

// Chat Rooms
import TavernChatRoom from './pages/tavern/chat/[slug]';
import CommitteesChatRoom from './pages/committees/chat/[slug]';

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

          {/* Main Sections */}
          <Route path="/tavern" element={<Tavern />} />
          <Route path="/committees" element={<Committees />} />

          {/* Sub-pages */}
          <Route path="/tavern/locations" element={<TavernLocations />} />
          <Route path="/committees/local" element={<CommitteesLocal />} />

          {/* Real Chat Rooms */}
          <Route path="/tavern/chat/:slug" element={<TavernChatRoom />} />
          <Route path="/committees/chat/:slug" element={<CommitteesChatRoom />} />

          <Route path="*" element={<div className="text-center py-20 text-xl">Page Not Found</div>} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;
