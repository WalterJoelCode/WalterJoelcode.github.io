import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://walterjoelcode.github.io",
  trailingSlash: "always",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: "terser",
      sourcemap: false,
    },
  },
  build: {
    assets: "assets",
  },
});
