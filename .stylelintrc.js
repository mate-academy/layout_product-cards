module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "rule-empty-line-before": [
      "always",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment"]
      }
    ]
  }
};
