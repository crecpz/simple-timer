const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },

  // @ loader
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
      {
        test: /\.wav$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "audio",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
    open: {
      app: { name: "firefox" },
    },
    compress: true,
    hot: true,
  },

  // @ 插件
  plugins: [
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public/index.html")
  }
  )],

  // @ 模式
  mode: "development",
};
