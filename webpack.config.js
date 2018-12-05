const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
    ]
  }
}