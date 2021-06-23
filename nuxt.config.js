/*
 * @Description:
 * @Author: zhuxiaobing
 * @Date: 2021-06-23 10:39:21
 * @LastEditors: zhuxiaobing
 * @LastEditTime: 2021-06-23 15:23:34
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sypool',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 9100,
    host: '127.0.0.1'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'animate.css/animate.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    {
      src: './node_modules/amfe-flexible/index.js',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: [
        require('postcss-pxtorem')({
          rootValue: 190,
          minPixelValue: 90,
          propList: ['*']
        }),
        require('autoprefixer')({
          browsers: ['Android >= 4.0', 'iOS >= 7']
        })
      ]
    }
  }
}
