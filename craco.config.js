const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "util": require.resolve("util/"),
          "path": require.resolve("path-browserify")
        }
      }
    }
  }
};
