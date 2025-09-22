import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: {
    commons: '_javascript/commons.js',
    home: '_javascript/home.js',
    categories: '_javascript/categories.js',
    page: '_javascript/page.js',
    post: '_javascript/post.js',
    misc: '_javascript/misc.js',
    theme: '_javascript/theme.js',
    app: '_javascript/pwa/app.js',
    sw: '_javascript/pwa/sw.js'
  },
  output: {
    dir: 'assets/js/dist',
    format: 'es',
    sourcemap: true,
    entryFileNames: '[name].min.js'
  },
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env']
    }),
    terser()
  ],
  external: [
    'bootstrap/js/src/tooltip',
    'bootstrap/js/src/toast',
    'bootstrap/js/src/collapse.js'
  ]
};