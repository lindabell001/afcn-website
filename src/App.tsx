import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from '@/components/SiteLayout';   // or wherever SiteLayout is

// Page Imports
import Index from './pages/Index';
import About from './pages/About';
import Resources from './pages/Resources';
import BecomeOne from './pages/BecomeOne';
import Donate from './pages/Donate';
import Mission from './pages/Mission';     // ← NEW MISSION IMPORT

// Add other pages you already have here if needed
// import ConstitutionAcademy from './pages/ConstitutionAcademy';
// etc.

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
          
          {/* NEW MISSION ROUTE */}
          <Route path="/mission" element={<Mission />} />

          {/* Add any other existing routes here */}
          {/* Example: <Route path="/resources/constitution-academy" element={<ConstitutionAcademy />} /> */}

          {/* 404 Catch-all */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;
