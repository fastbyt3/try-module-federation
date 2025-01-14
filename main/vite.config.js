import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    origin: "http://localhost:8000",
    port: 8000,
  },
  base: "http://localhost:8000",
  plugins: [
    federation({
      name: "vite_provider",
      manifest: true,
      remotes: {
        remote: "remote@http://localhost:9000/mf-manifest.json",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
      },
    }),
    react(),
  ],
  // Do you need to support build targets lower than chrome89?
  // You can use 'vite-plugin-top-level-await' plugin for that.
  build: {
    target: "chrome89",
  },
});
