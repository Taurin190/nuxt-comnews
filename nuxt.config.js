const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm', crossorigin: 'anonymous' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [
        // node.js module but we specify the pre-processor
        { src: 'bulma/bulma.sass', lang: 'sass' }
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
        '@nuxtjs/bulma',
        '@nuxtjs/pwa'
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}