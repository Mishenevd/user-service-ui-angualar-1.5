const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';
const processCss = isProduction ? '?minimize!postcss-loader' : '';

module.exports = {
  devtool: 'inline-cheap-module-source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    app: './Application.ts',
    styles: './styles/global.less',
    vendor: [
      'angular',
      'angular-morph',
      'angular-ui-validate',
      'angular-ui-bootstrap',
      '@uirouter/angularjs',
      'lodash',
      'restangular',
      'moment',
      'moment-timezone',
      'xregexp'
    ]
  },
  output: {
    path: path.join(__dirname, 'output'),
    filename: '[name]-'+process.env.BUILD_VERSION+'.js',
    publicPath: "/"
  },
  resolve: {
    extensions: ['.ts', '.webpack.js', '.less', '.js', '.html', '.css', '.svg', '.woff', '.png', '.ttf', '.eot', '.json', '.jpg', '.docx'],
    alias: {
      'styles': path.resolve(__dirname, 'src/styles'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'node_modules': path.join(__dirname, 'node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.[tj]s$/,
        loaders: ['ng-annotate-loader?ngAnnotate=ng-annotate-patched', 'awesome-typescript-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: `css-loader${processCss}!less-loader`
        }),
        include: path.join(__dirname, 'src')
      },
      {
        test:/\.(png|jpg)$/,
        loader: 'file-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.tpl\.html$/,
        loader: 'ng-cache-loader?-url&module=routee-templates&prefix=src:./**/'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    inline: true,
    hot: true,
    port: 9000,
    stats: "minimal"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      chunks: ['libs', 'app', 'vendor'],
      inject: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    }),
    new webpack.HotModuleReplacementPlugin({
      disable: isProduction
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
      disable: false
    })
  ]
};
