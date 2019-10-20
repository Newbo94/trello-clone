const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require("glob");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const dev_Path = '../wwwroot/dev'; // Dist folder for files - Change to relevant path

module.exports = {
  entry: {
    main: glob.sync('./wwwroot/Scripts/Custom/**/*.ts', { "ignore": ["./wwwwroot/Scripts/Custom/**/*.d.ts"] }), // JS scripts
    vendor: glob.sync('./wwwroot/Scripts//Vendor/**/*.js'), // Vendor scripts
    style: './wwwroot/Content/Styles/main.scss' // Styles
  },
  resolve: {
    extensions: [".js", ".css", ".ts", ".scss", ".vue"],
    alias: {
      vue: "vue/dist/vue.esm.js"
    }
  },
  output: {
    path: path.resolve(__dirname, dev_Path),
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        
      }
    },{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
      }
    }, {
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader',
        options: {
          onlyCompileBundledFiles: true,

          appendTsSuffixTo: [/\.vue$/]
        }
      }]
  
 
    }, {
      test: /\.(sass|scss|css)$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        options: {
          modules: false,
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: () => [require('autoprefixer')({
            'browsers': ['> 1%', 'last 2 versions']
          })],
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      },
      ]

    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};