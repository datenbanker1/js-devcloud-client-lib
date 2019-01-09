// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  mode: "production",
  output: {
    filename: "[name].js",
    chunkFilename: "modules/[name]-chunk.js",
    path: path.resolve(__dirname, "../build"),
    library: "LIB",
    libraryTarget: "var"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve("babel-loader"),
        options: {
          // @remove-on-eject-begin
          babelrc: false,
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import"
          ],
          // @remove-on-eject-end
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static"
    // }),

    new EsmWebpackPlugin()
  ],
  devServer: {
    contentBase: "build",
    compress: true,
    historyApiFallback: true,
    overlay: true,
    open: true,
    port: 3000
  }
};
