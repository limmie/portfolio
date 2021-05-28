require("dotenv").config({
  path: "./config/config.env",
});

export default {
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Limmie Blaine - Full Stack Web Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/sass/main.sass" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        suffix: true,
        icons: {
          solid: [
            "faBriefcase",
            "faCode",
            "faLayerGroup",
            "faDatabase",
            "faServer",
            "faHandshake",
            "faLightbulb",
            "faComments",
            "faShareAlt",
            "faEye",
          ],
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",

    [
      "nuxt-i18n",
      {
        strategy: "prefix",
        locales: [
          {
            code: "en",
            file: "en-US.js",
          },
          {
            code: "ru",
            file: "ru-RU.js",
          },
          {
            code: "tm",
            file: "tm-TM.js",
          },
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "en",
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
