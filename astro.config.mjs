import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://hardcoverfoundation.org",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
