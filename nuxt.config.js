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
    title: "Selim - Full Stack Web Developer",
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
  plugins: [{ src: "~/plugins/v-click-outside" }],

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
            "faRedo",
            "faAt",
            "faStreetView",
            "faPhone",
            "faSuitcase",
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

    "nuxt-seo",

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
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "en",
      },
    ],
  ],

  seo: {
    baseUrl: "https://selim.netlify.app",
    name: "Selim Developer",
    title: "Selim Ataballyev Full Stack Web Developer",
    templateTitle: "%name% - %title%",
    description: "Selim Ataballyev Full Stack Web Developer",
    keywords: [
      "developer",
      "selim",
      "ataballyev",
      "Selim",
      "Ataballyev",
      "Developer",
      "Full-stack web developer",
      "node.js developer",
      "vue developer",
      "nuxt developer",
    ],
    image: "%baseUrl%/images/avatars/sidebar/sidebar-avatar.webp",
    author: [
      "Selim Ataballyev",
      "limmiecrazzy@gmail.com",
      "selimdev00@gmail.com",
      "selim.netlify.com",
      "selimdev.herokuapp.com",
    ],

    url: "https://selim.netlify.app",

    openGraph: {
      title: "Selim Ataballyev",
    },
  },

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
