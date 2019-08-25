module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'umitoyama',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  buildDir: 'functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    ['@nuxtjs/pwa', { icon: false }]
  ],


  modules: [ '@nuxtjs/markdownit' ],
  markdownit: {
    injected: true,
    breaks: true,
    html: true
  },

  devModules: [
    '@nuxtjs/tailwindcss'
  ],

  manifest: {
    name: 'project-name',
    lang: 'ja'
  }
}

