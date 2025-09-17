// @ts-check

/** @type {import("prettier").Config} */
export default {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  bracketSpacing: true,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  importOrder: ['<THIRD_PARTY_MODULES>', '^(@api|@assets|@ui)(/.*)$', '^[.]'],
  importOrderSeparation: true,
};
