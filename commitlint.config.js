module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Disable footer line length to allow long URLs
    "footer-max-line-length": [0, "always"],
  },
}
