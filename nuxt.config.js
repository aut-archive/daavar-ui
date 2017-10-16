module.exports = {
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  manifest: {
    lang: 'en',
    name: 'Daavar Judge',
    short_name: 'daavar',
    description: 'Daavar judging system based on DomJudge',
    theme_color: '#1976d2'
  },

  mode: 'spa',

  build: {
    extractCSS: true
  },

  loading: {
    color: '#1976d2'
  },

  loadingIndicator: {
    name: 'pulse',
    color: '#1976d2',
    background: '#303030'
  },

  plugins: [
    '~/plugins/vuetify.js'
  ],

  css: [
    '~/assets/style/app.styl'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa'
  ],

  proxy: {
    '/api': process.env.DJ_API || 'https://www.domjudge.org/demoweb/'
  }
}
