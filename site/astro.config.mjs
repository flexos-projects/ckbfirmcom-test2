import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output mode for the build. 'static' for SSG, 'server' for SSR.
  // Jamstack architecture implies static generation.
  output: 'static',

  // Directory where Astro looks for project files.
  srcDir: './src',

  // Directory for static assets that will be copied directly to the build folder.
  publicDir: './public',

  // Control trailing slashes in generated URLs. 'never' for cleaner URLs.
  trailingSlash: 'never',

  // Enable HTML compression for smaller file sizes and faster load times.
  compressHTML: true,

  // Integrations will be added in subsequent tasks (e.g., Tailwind CSS).
  integrations: []
});