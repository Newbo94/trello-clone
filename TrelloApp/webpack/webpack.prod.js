const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require("glob");

const prod_Path = '../wwwroot/dist'; // Dist folder for files - Change to relevant path

module.exports = {
  entry: {
    main: glob.sync('./wwwroot/Scripts/Custom/**/*.ts', { "ignore": ["./wwwwroot/Scripts/Custom/**/*.d.ts"] }), // JS scripts
    vendor: glob.sync('./wwwroot/Scripts//Vendor/**/*.js'), //Vendor scripts
    style: './wwwroot/Content/Styles/main.scss' // Styles
  },
  resolve: {
    extensions: [".js", ".css", ".ts", ".scss"]
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: '[name].min.js'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
      }
    }, {
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.(sass|scss|css)$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        options: {
          modules: false,
          sourceMap: false
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: false,
          plugins: () => [require('autoprefixer')({
            'browsers': ['> 1%', 'last 2 versions']
          })],
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false
        }
      },
      ]

    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    })
  ]
};