import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://walterjoelcode.github.io',
  base: '/',
  trailingSlash: 'always',
  outDir: './dist',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      sourcemap: false,
    },
  },
  build: {
    assets: 'assets',
  },
});
