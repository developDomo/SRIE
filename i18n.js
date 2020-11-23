const NextI18Next = require('next-i18next').default;
const path = require('path');

const { localeSubpaths } = process.env;

module.exports = new NextI18Next({
  otherLanguages: ['en'],
  defaultLanguage: 'es',
  strictMode: false, // supress serverside warnings for now
  localePath: path.resolve('./public/static/locales'),
});
