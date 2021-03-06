const { resolve } = require('path')

const accessToken = 'pdkyV4RUmoFzi3IpAwbTrQtt'

module.exports = {
  rootDir: resolve(__dirname, '../'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  env: {
    accessToken
  },
  router: {
    middleware: ['settings-loader']
  },
  modules: [resolve(__dirname, '../')],
  storyblokQueries: {
    accessToken,
    defaultLanguage: 'en'
  }
}
