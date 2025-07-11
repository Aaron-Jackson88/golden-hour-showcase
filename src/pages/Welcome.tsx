import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient">
      <motion.div 
        className="text-center space-y-8 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-light text-primary mb-4 tracking-wide">
            Sarah Chen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Capturing life's most precious moments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="px-8 py-6 text-lg font-light smooth-transition hover-shadow"
          >
            <Link to="/home">View Portfolio</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;