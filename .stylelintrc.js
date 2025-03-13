module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "scss/at-import-partial-extension": "always",
    "scss/at-import-partial-extension-blacklist": [""]
  }
};
