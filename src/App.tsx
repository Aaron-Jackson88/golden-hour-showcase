import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          {/* Existing route for /gallery/:category */}
          <Route path="/gallery/:category" element={<Gallery />} />
          {/* NEW ROUTE: This allows direct access to categories like /portraits, /events, etc. */}
          {/* IMPORTANT: Place this route BEFORE any specific static routes like /about, /pricing, /contact */}
          {/* If placed after, those static routes would take precedence. */}
          {/* If placed before, this route might "catch" /about, /pricing, etc., treating them as categories. */}
          {/* For this reason, using /gallery/:category is generally safer if you have other top-level static routes. */}
          <Route path="/:category" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
