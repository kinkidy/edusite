import path from 'path';
import webpack from 'webpack'

export default {
  // debug: true,
  devtool: 'none',
  // noInfo: false,
  entry: [
        path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname,'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  // plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders:['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]

  }
}
