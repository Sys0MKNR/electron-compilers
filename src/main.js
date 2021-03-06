const filenames = [
  'css/less',
  'css/sass',
  'css/stylus',
  'js/babel',
  'js/coffeescript',
  'js/typescript',
  'json/cson',
  'html/inline-html',
  'html/jade',
  'html/pug',
  'html/vue',
  'passthrough'
];

module.exports = filenames.map((x) => require('./' + x).default);
