const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3005,
    historyApiFallback: true
  },
  module: {

    rules: [{
      test: /\.js|\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.(css|sass|scss)$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: /node_modules/,
      use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
    }
    ]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "MfgPro",
      filename: "remoteEntry.js",
      remotes: {
        remote: "remote@http://localhost:3006/remoteEntry.js",
        remoteJobIndicator: "remoteJobIndicator@http://localhost:3007/remoteJobIndicatorEntry.js"
      },
      shared: {
        react: {
            requiredVersion: '18.3.1',
            singleton: true,
            eager: true
        },
        'react-dom': {
            requiredVersion: '18.3.1',
            singleton: true,
            eager: true
        },
        'react/jsx-runtime': {
            requiredVersion: '18.3.1',
            singleton: true,
            eager: true
        },
        'react/jsx-dev-runtime': {
            requiredVersion: '18.3.1',
            singleton: true,
            eager: true
        },
        '@mui/material': {
            requiredVersion: '5.14.14',
            singleton: true,
            eager: true
        }
      }
    })
  ]
};