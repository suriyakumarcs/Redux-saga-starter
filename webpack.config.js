var config = {
   entry: ['babel-polyfill', './main.js', './scss/main.scss'],
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
      ]
   },
   devServer: {
    historyApiFallback: true,
  },
}
module.exports = config;