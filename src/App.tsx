import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import SiteLayout from './components/SiteLayout';
import SiteFooter from './components/SiteFooter';

// Main Pages
import Index from './pages/Index';
import About from './pages/About';
import Resources from './pages/Resources';
import BecomeOne from './pages/BecomeOne';
import Donate from './pages/Donate';
import Mission from './pages/Mission';
import MemberLogin from './pages/MemberLogin';
import MemberDashboard from './pages/MemberDashboard';

// Podcast Pages
import MyPodcasts from './pages/my-podcasts';
import MyEpisodes from './pages/my-episodes';
import BeginnerSetup from './pages/podcast-setup/beginner';
import ExperiencedSetup from './pages/podcast-setup/experienced';
import PodcastSetupHub from './pages/podcast-setup';
import RecordNewEpisode from './pages/record-new';
import LiveRecording from './pages/live-recording';
import PhoneRecording from './pages/phone-recording';
import EpisodeEditor from './pages/episode-editor';
import VideoStudio from './pages/video-studio';
import TextToVideo from './pages/text-to-video';
import FacelessOptions from './pages/faceless-options';
import FacelessGenerate from './pages/faceless-generate';
import ShortsGenerator from './pages/shorts-generator';
import MemberPodcasts from './pages/resources/member-podcasts';
import PodcastPage from './pages/resources/podcasts/[slug]';
import EpisodeCalendar from './pages/episode-calendar';
import PublicEpisodePage from './pages/episode/[id]';

// Admin Pages
import VerificationDashboard from './pages/admin/verification';
import FreeMembership from './pages/free-membership';

// Short Link Handler
import ShortLinkHandler from './pages/ShortLinkHandler';

// Member Pages
import MemberRequestNew from './pages/member/request-new';
import MemberHelp from './pages/member/help';

// Other pages
import Tavern from './pages/tavern';
import Committees from './pages/committees';
import TakeAction from './pages/take-action';
import ConstitutionAcademy from './pages/ConstitutionAcademy';
import LearningSources from './pages/learning-sources';
import TavernLocations from './pages/tavern/locations';
import CommitteesLocal from './pages/committees/local';
import TavernChatRoom from './pages/tavern/chat/[slug]';
import CommitteesChatRoom from './pages/committees/chat/[slug]';

// NEW IMPORTS FOR COMMUNISM PAGES
import CommunismInAmerica from './pages/resources/CommunismInAmerica';
import TakeDownOfMcCarthy from './pages/resources/TakeDownOfMcCarthy';

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
          <Route path="/resources/member-podcasts" element={<MemberPodcasts />} />
          <Route path="/resources/podcasts/:slug" element={<PodcastPage />} />
          <Route path="/episode/:id" element={<PublicEpisodePage />} />

          <Route path="/become-one" element={<BecomeOne />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/member-login" element={<MemberLogin />} />
          <Route path="/member-dashboard" element={<MemberDashboard />} />
          <Route path="/admin/verification" element={<VerificationDashboard />} />
          <Route path="/free-membership" element={<FreeMembership />} />

          {/* Podcast Routes */}
          <Route path="/my-podcasts" element={<MyPodcasts />} />
          <Route path="/my-episodes" element={<MyEpisodes />} />
          <Route path="/episode-calendar" element={<EpisodeCalendar />} />
          <Route path="/podcast-setup" element={<PodcastSetupHub />} />
          <Route path="/podcast-setup/beginner" element={<BeginnerSetup />} />
          <Route path="/podcast-setup/experienced" element={<ExperiencedSetup />} />
          <Route path="/record-new" element={<RecordNewEpisode />} />
          <Route path="/live-recording" element={<LiveRecording />} />
          <Route path="/phone-recording" element={<PhoneRecording />} />
          <Route path="/episode-editor" element={<EpisodeEditor />} />
          <Route path="/episode-editor/:id" element={<EpisodeEditor />} />
          <Route path="/video-studio" element={<VideoStudio />} />
          <Route path="/text-to-video" element={<TextToVideo />} />
          <Route path="/faceless-options" element={<FacelessOptions />} />
          <Route path="/faceless-generate" element={<FacelessGenerate />} />
          <Route path="/shorts-generator" element={<ShortsGenerator />} />

          {/* Member Pages */}
          <Route path="/member/request-new" element={<MemberRequestNew />} />
          <Route path="/member/help" element={<MemberHelp />} />

          {/* Other routes */}
          <Route path="/tavern" element={<Tavern />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/take-action" element={<TakeAction />} />
          <Route path="/resources/constitution-academy" element={<ConstitutionAcademy />} />
          <Route path="/resources/learning-sources" element={<LearningSources />} />

          {/* COMMUNISM PAGES */}
          <Route path="/resources/communism-in-america" element={<CommunismInAmerica />} />
          <Route path="/resources/take-down-of-mccarthy" element={<TakeDownOfMcCarthy />} />

          <Route path="/tavern/locations" element={<TavernLocations />} />
          <Route path="/committees/local" element={<CommitteesLocal />} />
          <Route path="/tavern/chat/:slug" element={<TavernChatRoom />} />
          <Route path="/committees/chat/:slug" element={<CommitteesChatRoom />} />

          {/* Short Links */}
          <Route path="/:shortLink" element={<ShortLinkHandler />} />

          <Route path="*" element={<div className="text-center py-20 text-xl">Page Not Found</div>} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;
