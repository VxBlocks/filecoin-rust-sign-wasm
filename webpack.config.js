const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    popup: "./src/popup/popup.js",
    background: "./src/app-init.js",
    content_script: "./src/contentscript.js",
    inpage: "./src/inpage.js"
  },
  experiments: {
    asyncWebAssembly: true,
  },
  output: {
    path: path.resolve(__dirname, "dist/")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }, {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
      {
        test: /\.less$/i,   //使用正则表达式匹配less
        use: [
          "style-loader",
          "css-loader",
          "less-loader"  //这个是导入顺序的第一个
        ]
      },

    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "static", to: "." }
      ]
    })
  ],
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".wasm"]
  },
};
