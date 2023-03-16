module.exports = function (api) {
  api.cache.forever();

  const plugins = ['macros'];

  return {
    plugins,
  };
};
