var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/models/game.ts'),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /test/]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'war.js',
    library: 'War',
    libraryTarget:'window'
  },
};
