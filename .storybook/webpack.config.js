const webpackBaseConfig = require('../build/webpack.base.conf.js')

// Warning: we're in webpack full control mode here (https://storybook.js.org/configurations/custom-webpack-config/)
// this is actually kind of dangerous, if done wrong, so we do our best to do everything right :)
module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.module.rules = [
    // we need to preserve the first loader in module.loaders (the Babel loader for JS needed by storybook)
    storybookBaseConfig.module.rules[0],

    // now we can apply all of our loaders (e.g. for typescript)
    ...webpackBaseConfig.module.rules
  ]

  // and finally replace the resolvers with ours. As per docs, this *should* be safe to do
  storybookBaseConfig.resolve = webpackBaseConfig.resolve

  return storybookBaseConfig
}