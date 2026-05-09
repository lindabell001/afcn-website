import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Resources from "./pages/Resources.tsx";
import BecomeOne from "./pages/BecomeOne.tsx";
import PlayDarts from "./pages/PlayDarts.tsx";
import Donate from "./pages/Donate.tsx";
import MemberLogin from "./pages/MemberLogin.tsx";
import Declaration from "./pages/Declaration.tsx";
import TakeBackAmerica from "./pages/TakeBackAmerica.tsx";
import BurchettBlueprint from "./pages/BurchettBlueprint.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/become-one" element={<BecomeOne />} />
          <Route path="/play-darts" element={<PlayDarts />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/member-login" element={<MemberLogin />} />
          <Route path="/declaration" element={<Declaration />} />
          <Route path="/take-back-america" element={<TakeBackAmerica />} />
          <Route path="/burchett-blueprint" element={<BurchettBlueprint />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
