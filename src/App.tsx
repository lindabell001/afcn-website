import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';

// Page Imports
import Index from './pages/Index';
import About from './pages/About';
import Resources from './pages/Resources';
import BecomeOne from './pages/BecomeOne';
import Donate from './pages/Donate';
import Mission from './pages/Mission';

// Tavern & Committees
import Tavern from './pages/tavern';
import Locations from './pages/tavern/locations';
import Issues from './pages/tavern/issues';
import ChatRoomPage from './pages/tavern/chat/[slug]';
import CommitteesOfObservation from './pages/CommitteesOfObservation';
import LocalCommittees from './pages/committees/local';
import CommitteesIssues from './pages/committees/issues';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
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

          {/* Tavern Routes */}
          <Route path="/tavern" element={<Tavern />} />
          <Route path="/tavern/locations" element={<Locations />} />
          <Route path="/tavern/issues" element={<Issues />} />
          <Route path="/tavern/chat/:slug" element={<ChatRoomPage />} />

          {/* Committees Routes */}
          <Route path="/committees-of-observation" element={<CommitteesOfObservation />} />
          <Route path="/committees/local" element={<LocalCommittees />} />
          <Route path="/committees/issues" element={<CommitteesIssues />} />

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;
