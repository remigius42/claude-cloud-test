module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Disable footer line length to allow long URLs
    "footer-max-line-length": [0, "always"],
    // Explicit list instead of spreading @commitlint/config-conventional —
    // require() fails when the package isn't installed locally (only available
    // inside the pre-commit virtualenv), which silently breaks validation.
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "routine",
        "style",
        "test",
      ],
    ],
  },
}
