const {
  override,
  addLessLoader,
  addDecoratorsLegacy,
} = require("customize-cra");

/**
 * Override the theme value of the Rsuite library
 */
module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        // change base color to dark blue
      },
    },
  }),
  addDecoratorsLegacy()
);
