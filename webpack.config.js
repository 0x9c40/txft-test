const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = (env, { mode }) => {
  return {
    mode,
    output: {
      publicPath: "/txft-test/",
    },
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                additionalData: `@import "@/styles/_variables.scss";`,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./src/index.html" }),
      new VueLoaderPlugin(),
      new webpack.ProgressPlugin(),
    ],
  };
};
