const cracoAlias = require("craco-alias");

module.exports = {
  eslint: {
    enable: false
  },
  devServer: {
    open: false,
    port: 3000,
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ]
};
