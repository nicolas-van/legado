const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/legado.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'legado.bundle.js',
    library: 'legado',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
};
