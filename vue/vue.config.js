module.exports = {
  devServer: {
    port: 3000,
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
    performance: {
      hints: "warning",
      maxAssetSize: 2048576,
      maxEntrypointSize: 2048576,
    },
  },
};
