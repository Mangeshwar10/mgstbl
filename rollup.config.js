// rollup.config.js
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // entry point
  output: {
    file: 'dist/mgstbl.min.js', // output file
    format: 'umd', // or 'iife' if you prefer
    name: 'mgstbl', // global variable name
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser() // minify
  ]
};
