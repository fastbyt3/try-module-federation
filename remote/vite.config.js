import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    origin: "http://localhost:9000",
    port: 9000,
  },
  preview: {
    origin: "http://localhost:9000",
    port: 9000,
  },
  base: "http://localhost:9000",
  plugins: [
    federation({
      name: "remote",
      manifest: true,
      exposes: {
        "./button": "./src/components/button",
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
