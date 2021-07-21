require("dotenv").config({
  path: "./config/config.env",
});

export default {
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3000,
  },

  head: {
    title: "Selim - Full Stack Web Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Selim Ataballyev Full Stack Web Developer",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [{ src: "~/assets/sass/main.sass" }],

  plugins: [{ src: "~/plugins/v-click-outside" }],

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

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",

    "nuxt-seo",

    [
      "nuxt-i18n",
      {
        strategy: "no_prefix",
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

  axios: {},

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {},
};
