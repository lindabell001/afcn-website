import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from '@/components/SiteLayout';

import Index from './pages/Index';
import About from './pages/About';
import Resources from './pages/Resources';
import ConstitutionAcademy from './pages/ConstitutionAcademy';   // New
import BecomeOne from './pages/BecomeOne';
import CommitteesOfObservation from './pages/CommitteesOfObservation';
import AmericaFirstTavern from './pages/AmericaFirstTavern';
import PatriotsStories from './pages/PatriotsStories';
import PrivacyAndData from './pages/PrivacyAndData';
import SocialWelfareOrganization from './pages/SocialWelfareOrganization';
import TransparencyAndOperations from './pages/TransparencyAndOperations';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/constitution-academy" element={<ConstitutionAcademy />} />
          
          {/* Core Membership & Action Pages */}
          <Route path="/become-one" element={<BecomeOne />} />
          <Route path="/committees-of-observation" element={<CommitteesOfObservation />} />
          <Route path="/america-first-tavern" element={<AmericaFirstTavern />} />
          <Route path="/patriots-stories" element={<PatriotsStories />} />

          {/* Supporting Pages */}
          <Route path="/privacy-and-data" element={<PrivacyAndData />} />
          <Route path="/social-welfare-organization" element={<SocialWelfareOrganization />} />
          <Route path="/transparency-and-operations" element={<TransparencyAndOperations />} />
          <Route path="/donate" element={<Donate />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;
