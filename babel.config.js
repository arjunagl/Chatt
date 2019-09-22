module.exports = function configureBabel(api) {
  api.cache(true);

  const presets = [
    ['@babel/env', { debug: false, useBuiltIns: 'usage', corejs: '3.0.0' }],
    '@babel/preset-react'
  ];
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
