import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL for deployment.
  // If your GitHub Pages URL is like https://<username>.github.io/<repository-name>/
  // then base should be '/<repository-name>/'
  // If it's a custom domain or user/org page (https://<username>.github.io/), then base can be '/'
  base: mode === 'production' ? '/golden-hour-showcase/' : '/', // <--- Adjust 'your-repository-name'
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
