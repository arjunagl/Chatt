module.exports = function configureBabel(api) {
  api.cache(true);

  const presets = [['@babel/env', { debug: true, useBuiltIns: 'usage' }], '@babel/preset-react'];
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-async-generator-functions'
  ];

  return {
    presets,
    plugins
  };
};
