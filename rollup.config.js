// @ts-check

import { terser } from 'rollup-plugin-terser';

/**
 * Creates an object with Rollup.js output options.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
function createOutputOption(options) {
  return {
    exports: 'named',
    sourcemap: true,
    ...options,
  };
}

/**
 * An object with Rollup.js options.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/brazilian-values.js',
  output: [
    createOutputOption({
      file: './dist/brazilian-values.js',
      format: 'commonjs',
    }),
    createOutputOption({
      file: './dist/brazilian-values.cjs',
      format: 'commonjs',
    }),
    createOutputOption({
      file: './dist/brazilian-values.esm.js',
      format: 'esm',
    }),
    createOutputOption({
      file: './dist/brazilian-values.mjs',
      format: 'esm',
    }),
    createOutputOption({
      file: './dist/brazilian-values.umd.js',
      name: 'BrazilianValues',
      format: 'umd',
    }),
    createOutputOption({
      file: './dist/brazilian-values.umd.min.js',
      name: 'BrazilianValues',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
