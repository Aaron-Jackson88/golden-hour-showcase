import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const worksItems = [
    { name: "Portraits", path: "/gallery/portraits" },
    { name: "Events", path: "/gallery/events" },
    { name: "Editorial", path: "/gallery/editorial" },
    { name: "Graduations", path: "/gallery/graduations" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isWorksActive = worksItems.some(item => isActive(item.path));

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="text-2xl font-light text-primary">
            Sarah Chen
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium fast-transition ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Works Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsWorksOpen(!isWorksOpen)}
                className={`flex items-center space-x-1 text-sm font-medium fast-transition ${
                  isWorksActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span>Works</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isWorksOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isWorksOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      {worksItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsWorksOpen(false)}
                          className={`block px-4 py-2 text-sm fast-transition ${
                            isActive(item.path)
                              ? "text-primary bg-accent/50"
                              : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium fast-transition ${
                    isActive(item.path)
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Works Section */}
              <div>
                <button
                  onClick={() => setIsWorksOpen(!isWorksOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/30 fast-transition"
                >
                  <span>Works</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isWorksOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isWorksOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 space-y-1">
                        {worksItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`block px-3 py-2 text-sm font-medium fast-transition ${
                              isActive(item.path)
                                ? "text-primary bg-accent/50"
                                : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                            }`}
                            onClick={() => {
                              setIsOpen(false);
                              setIsWorksOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;