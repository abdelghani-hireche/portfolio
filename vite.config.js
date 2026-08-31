import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use an absolute base ('/') during dev so the module graph resolves correctly,
// and a relative base ('./') for the production build so it works on GitHub
// Pages under any repo name. Combined with HashRouter, no server config needed.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "./" : "/",
}));
