import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://walterjoelcode.github.io',
  // El sitio se publica en la raíz del dominio de GitHub Pages.
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
