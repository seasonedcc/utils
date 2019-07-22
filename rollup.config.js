import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

function getConfig(name, dependencies = []) {
  const config = {
    input: `./src/${name}.ts`,
    external: ['lodash', ...dependencies],
    plugins: [
      // Allows node_modules resolution
      resolve({ extensions }),

      // Allow CSS imports
      postcss(),
      // Allow bundling cjs modules. Rollup doesn't understand cjs
      commonjs({
        include: /node_modules/,
      }),
      json(),
      // Compile TypeScript/JavaScript files
      babel({ extensions, include: ['src/**/*'], exclude: 'node_modules/**' }),
      external(),
    ],

    output: [
      {
        file: `./dist/${name}.js`,
        format: 'cjs',
        exports: 'named',
      },
      {
        file: `./dist/${name}.esm.js`,
        format: 'es',
        exports: 'named',
      },
    ],
  }

  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(uglify())
  }

  return config
}

export default [
  getConfig('index', ['react', 'react-dom']),
  getConfig('hooks', ['react', 'react-dom']),
  getConfig('helpers'),
]
