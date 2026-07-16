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
import MemberLogin from './pages/MemberLogin';
import MemberDashboard from './pages/MemberDashboard';

// Core Secondary Pages
import Tavern from './pages/tavern';
import Committees from './pages/committees';
import TakeAction from './pages/take-action';

// Resources Sub-pages
import ConstitutionAcademy from './pages/ConstitutionAcademy';
import LearningSources from './pages/learning-sources';

// Podcast Pages
import MyPodcasts from './pages/my-podcasts';
import BeginnerSetup from './pages/podcast-setup/beginner';
import ExperiencedSetup from './pages/podcast-setup/experienced';

// Sub-pages (keep your existing ones)
import TavernLocations from './pages/tavern/locations';
import CommitteesLocal from './pages/committees/local';
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
          <Route path="/member-login" element={<MemberLogin />} />
          <Route path="/member-dashboard" element={<MemberDashboard />} />

          {/* Main Sections */}
          <Route path="/tavern" element={<Tavern />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/take-action" element={<TakeAction />} />

          {/* Resources */}
          <Route path="/resources/constitution-academy" element={<ConstitutionAcademy />} />
          <Route path="/resources/learning-sources" element={<LearningSources />} />

          {/* Podcast Routes */}
          <Route path="/my-podcasts" element={<MyPodcasts />} />
          <Route path="/podcast-setup/beginner" element={<BeginnerSetup />} />
          <Route path="/podcast-setup/experienced" element={<ExperiencedSetup />} />

          {/* Your existing sub-pages */}
          <Route path="/tavern/locations" element={<TavernLocations />} />
          <Route path="/committees/local" element={<CommitteesLocal />} />
          <Route path="/tavern/chat/:slug" element={<TavernChatRoom />} />
          <Route path="/committees/chat/:slug" element={<CommitteesChatRoom />} />

          <Route path="*" element={<div className="text-center py-20 text-xl">Page Not Found</div>} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;
