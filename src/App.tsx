import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';

// Main Page Imports
import Index from './pages/Index';
import About from './pages/About';
import Resources from './pages/Resources';
import BecomeOne from './pages/BecomeOne';
import Donate from './pages/Donate';
import Mission from './pages/Mission';

// Tavern Routes (keep these - they were working before)
import Tavern from './pages/tavern';
import Locations from './pages/tavern/locations';
import Issues from './pages/tavern/issues';
import ChatRoomPage from './pages/tavern/chat/[slug]';

// Committees
import CommitteesOfObservation from './pages/CommitteesOfObservation';

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

          {/* Committees */}
          <Route path="/committees-of-observation" element={<CommitteesOfObservation />} />

          <Route path="*" element={<div className="text-center py-20">Page Not Found</div>} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;
