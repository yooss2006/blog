/** @type {import("prettier").Config} */

const config = {
  singleQuote: true,
  trailingComma: "es5",
  printWidth: 100,
  quoteProps: "consistent",
  plugins: [require("prettier-plugin-tailwindcss")],
};

export default config;
