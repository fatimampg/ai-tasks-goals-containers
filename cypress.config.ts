import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.FRONTEND_URL || "http://localhost:3000",
    setupNodeEvents(on, config) {
      const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
      const backendUrl = process.env.BACKEND_URL || "http://localhost:3001";

      config.env.frontendUrl = frontendUrl;
      config.env.backendUrl = backendUrl;
      return config;
    },
  },

});
