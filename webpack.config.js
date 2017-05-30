const path = require('path')

module.exports = {
  entry: "./components/client.jsx",
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: "client_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          'options': {
            presets: ['es2015', 'react']
          }
        }],
        exclude: /node_modules/
      }
    ]

  }
};