module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  tabWidth: 2,
  endOfLine: 'lf',

  // import rule
  importOrder: ['^@/(.*)$', '^[./]'],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
