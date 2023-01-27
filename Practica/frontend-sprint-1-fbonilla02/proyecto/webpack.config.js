const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'none',
    entry:
    {
        app: ["@babel/polyfill", './src/js/index.js'],
        
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle_[chunkhash].js',
        sourceMapFilename: '[file].map'
    },
    devServer: {
      port: 5050,
      historyApiFallback: true
  },
  module: {
    rules: [
       {
      test: /\.js$/i,
      exclude: /node_modules/,
      loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        //uso del loader que previamente instalamos
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
        collapseWhitespace:
            true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
    }

    }),
    new HtmlWebpackPlugin({
      filename: 'user.html',
      template: 'src/pages/user.html',
      chunks: ['page']
    })
  ],
  
  
// target:"web",
//   devServer: {
//     port: 8080,
    
//   },
}