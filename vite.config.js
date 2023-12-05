import viteStylelint from '@amatlash/vite-plugin-stylelint';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon';

export default ({ command }) => ({
  base: command === 'serve' ? '/' : '/build/',
  publicDir: 'resources/static',
  build: {
    manifest: false,
    outDir: `public/assets`,
    assetsDir: '',
    minify: (command === 'serve' || command === '') ? false : 'terser',
    rollupOptions: {
      input: [
        'resources/scripts/app.js',
        'resources/styles/app.scss',
      ],
      output: {
        entryFileNames: `[name]_0.2.js`,
        chunkFileNames: `[name]_0.2.js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'app.css') {
            return 'app_0.2.css';
          }
          return assetInfo.name;
        },
        manualChunks: null,
      },
    },
  },
  plugins: [
    viteStylelint(),
    ViteFaviconsPlugin({
      logo: 'resources/static/images/favicons/favicon.png',
      favicons: {
        appName: 'Birkan',
        background: '#f60',
        theme_color: '#1d1d1d',
        path: `/assets/`,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: true,
          favicons: true,
          firefox: false,
          windows: true,
          yandex: true,
        },
      },
    }),
  ],
});
