const webpack = require("webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./js/index.js",
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Budget-tracker",
      short_name: "moneybag",
      description: "An app that allows you to track budget.",
      start_url: "../index.html",
      background_color: "#01579b",
      theme_color: "#ffffff",
      fingerprints: false,
      inject: false,
      icons: [
        {
          src: path.resolve("/icons/icon-512x512.png"),
          sizes: [96, 128, 144, 152, 192, 256, 384, 512],
        },
      ],
    }),
  ],
  mode: "development",
};

module.exports = config;
