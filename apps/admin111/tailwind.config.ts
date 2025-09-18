import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,ts}',
    '../../pages/base/src/**/*.{vue,ts}',
  ],
} satisfies Config;
