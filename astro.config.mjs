
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://waltercode.github.io',
  base: '/NOMBRE_DE_TU_REPOSITORIO', // ⚠️ CAMBIA ESTO por el nombre de tu repo
  outDir: './dist',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      sourcemap: false,
    },
  },
  // ❌ ELIMINA esta sección, no es necesaria y puede causar problemas
  // build: {
  //   assets: 'assets',
  // },
});
