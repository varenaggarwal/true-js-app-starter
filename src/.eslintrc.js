esLintConfig = {
  env: {
    browser: true,
  },
  rules: {
    // Override our default settings just for this directory
    eqeqeq: "warn",
    strict: "on",
  },
};

module.exports = esLintConfig;
