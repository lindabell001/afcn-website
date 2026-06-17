import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from '@/components/SiteLayout';

// Page Imports
import Index from './pages/Index';
import About from './pages/About';
import Resources from './pages/Resources';
import BecomeOne from './pages/BecomeOne';
import Donate from './pages/Donate';
import Mission from './pages/Mission';
import Tavern from './pages/tavern';
import Locations from './pages/tavern/locations';
import Issues from './pages/tavern/issues';
import ChatRoomPage from './pages/tavern/chat/[slug]';
import CommitteesOfObservation from './pages/CommitteesOfObservation';

const App = () => {
  return (
    <Router>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/become-one" element={<BecomeOne />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/mission" element={<Mission />} />

          {/* Tavern System */}
          <Route path="/tavern" element={<Tavern />} />
          <Route path="/tavern/locations" element={<Locations />} />
          <Route path="/tavern/issues" element={<Issues />} />
          <Route path="/tavern/chat/:slug" element={<ChatRoomPage />} />

          {/* Committees of Observation */}
          <Route path="/committees-of-observation" element={<CommitteesOfObservation />} />

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;
