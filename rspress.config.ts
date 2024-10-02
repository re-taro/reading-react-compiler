import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'src',
  lang: "en",
  locales: [
    {
      lang: "en",
      label: "English",
    },
    {
      lang: "ja",
      label: "Japanese",
    }
  ]
});
