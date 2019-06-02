import path from 'path';
import webpack from 'webpack';
import baseConfig from './base.config';

const port = 3000;
const entry = [
  `webpack-dev-server/client?http://localhost:${port}`,
  'webpack/hot/only-dev-server',
];

const config = baseConfig({
  resolve: { modules: [path.resolve(__dirname, 'node_modules')] },
  input: {
    app: [path.join(__dirname, '../src/web/index'), ...entry],
  },
  output: {
    path: path.join(__dirname, '../dev/js'),
    publicPath: `http://localhost:${port}/js/`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: [
          require.resolve('babel-preset-es2015'),
          require.resolve('babel-preset-stage-0'),
          require.resolve('babel-preset-react'),
        ],
        plugins: [
          require.resolve('babel-plugin-add-module-exports'),
          require.resolve('babel-plugin-transform-decorators-legacy'),
          [
            require.resolve('babel-plugin-react-transform'),
            {
              transforms: [
                {
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module'],
                },
                {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react'],
                },
              ],
            },
          ],
        ],
      },
    },
  ],
  entry,
});

config.devtool = 'eval';

export default config;
