// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://firelink-library.github.io',
  base: '/ia',
  outDir: 'dist',
  publicDir: 'static',
  integrations: [
    starlight({
      title: 'Inteligência Artificial',
      logo: {
        src: './src/assets/logos/logo.png'
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2
      },
      social: [{
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/firelink-library/ia'
      }],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" }
        })
      ],
      sidebar: [
        {
          label: 'Ciência de dados',
          autogenerate: { directory: 'cdados' }, collapsed: true
        },
        {
          label: 'Machine learning',
          autogenerate: { directory: 'mlearning' }, collapsed: true
        },
        {
          label: 'Deep learning',
          autogenerate: { directory: 'dl' }, collapsed: true
        },
        {
          label: 'Processamento de linguagem',
          autogenerate: { directory: 'nlp' }, collapsed: true
        },
        {
          label: 'Reinforcement learning',
          autogenerate: { directory: 'rl' }, collapsed: true
        },
      ],
    }),
  ],
});
