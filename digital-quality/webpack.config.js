const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3006,
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
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App"
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