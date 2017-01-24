const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  entry: path.resolve(SRC_DIR, 'index.js'),

  output: {
    path: DIST_DIR,
    filename: 'js/index.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        loader: 'babel',
      },
    ],
  },
};

module.exports = config;
