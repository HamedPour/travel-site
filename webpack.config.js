const path = require('path')

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.join(__dirname, "/app/build/scripts"),
    filename: "App.js"
  },

  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presents: [require.resolve("babel-preset-es2015")]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
