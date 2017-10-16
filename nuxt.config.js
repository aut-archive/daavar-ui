
module.exports = {
  head: {
    title: 'daavar-ui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'UI for Daavar judging system based on DomJudge Edit' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  plugins: [
    '~/plugins/vuetify.js'
  ],

  css: [
    '~/assets/style/app.styl'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api': process.env.DJ_API || 'https://www.domjudge.org/demoweb/'
  },

  loading: { color: '#3B8070' },

  build: {
    extractCSS: true
  }
}
