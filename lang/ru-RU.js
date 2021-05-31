export default {
  currentLanguage: "Русский",
  currentLanguageIconName: "russia.png",

  fullName: "Селим Атабаллыев",

  home: "Главная",
  about: "Обо мне",
  services: "Услуги",
  skills: "Навыки",
  experience: "Опыт",
  works: "Работы",
  contacts: "Контакты",

  sidebar: {
    freelancerInfo: "<span>Full Stack Web Разработчик</span> из Туркменистана",
  },

  footer: {
    rightsReserved: `© Авторские права | Все права защищены |  ${new Date().getFullYear()}`,
    designIsMadeBy:
      "Дизайн сделан <a href='https://colorlib.com' target='_blank'>Colorlib</a>",
  },

  sections: {
    landing: {
      title: "<h1>Привет, </h1><h1>ЯСелим</h1>",
      description:
        "<p> 100% эффективные веб-сайтов, написанные на </p> <p> Vue (Nuxt) и node.js (Express) </p>",
    },

    about: {
      title: "Кто я?",
      text:
        "<p class='welcome-section-text'> <strong> Привет, меня зовут Селим Атабаллев. </strong> Я талантливый full-stack веб-разработчик с 2-летним опытом работы с широким спектром веб-сайтов. </p> " +
        "<br> " +
        "<p class='welcome-section-text'> Я не хочу определять себя по проделанной работе. Я определяю себя работой, которой хочу заниматься. Навыкам можно научить, личность присуща. Я предпочитаю продолжать учиться, продолжать ставить себя перед собой и заниматься интересными делами, которые имеют значение </p>" +
        "<br>" +
        "<p class='welcome-section-text'> Подпитываемый высоким уровнем энергии и безграничным энтузиазмом, я легко вдохновляюсь и более чем готов следовать своим увлечениям, куда бы они меня ни привели. Я  выразительный, разносторонне одаренный человек с естественной способностью вдохновлять. Мне никогда не нравится просто придумывать идеи. Вместо этого у меня есть почти импульсивная потребность воплощать их </p>" +
        "<br>" +
        "<p class='welcome-section-text'> Моя обильная энергия подпитывает меня в стремлении ко многим интересам, хобби, областям учебы и творчеству. Я быстро учусь, могу осваивать новые навыки и относительно легко совмещать разные проекты и роли. Мне нравится накапливать опыт во многих областях в течение моей жизни и карьеры. </p>" +
        "<br>" +
        "<p class='welcome-section-text'> Вы также можете называть меня <strong> фронтенд-разработчиком, серверным разработчиком, системным администратором </strong> или по любому другому определенному на рынке названию программистов. </p>",
      bannerText:
        "<h2> Я рад сообщить, </h2> <h2>что более 15 проектов успешно выполнены! </h2>",
    },

    services: {
      title: "Вот некоторые из моих услуг",

      items: [
        {
          name: "Planning",
          description:
            "Project planning from scratch and further improvements, creation of ideas",
          icon: ["fas", "lightbulb"],
          color: "blue",
        },
        {
          name: "Консультации",
          description:
            "Обсуждение проекта: какие технологии подходят больше всего, на какие сроки, цены и т.д.",
          icon: ["fas", "comments"],
          color: "red",
        },
        {
          name: "Фронтэнд (интерфейс)",
          description:
            "Верстка сайта из Photoshop, Figma и т.д. с чистым HTML, CSS + Javascript, Vue.js (Nuxt)",
          icon: ["fas", "code"],
          color: "yellow",
        },
        {
          name: "Бэкэнд",
          description:
            "Бэкэнд сайта с Node.js (Express). Для проектов, которые нужно сделать, могу предложить серверный сайт, созданный на EJS.",
          icon: ["fas", "layer-group"],
          color: "purple",
        },
        {
          name: "База данных",
          description:
            "Выбор базы данных и ее структуры, и ее дальнейшее развитие (MySQL, PostgreSQL, MongoDB",
          icon: ["fas", "database"],
          color: "aloe",
        },
        {
          name: "Сервер",
          description:
            "Настройка как клиентского, так и серверного веб-сайта с Nginx в VPS (виртуальный частный сервер)",
          icon: ["fas", "server"],
          color: "darkblue",
        },
      ],

      stats: [
        { quantity: 125, name: "Чашек кофе" },
        { quantity: 16, name: "Проектов" },
        { quantity: 30, name: "Клиентов" },
        { quantity: 3, name: "Партнеров" },
      ],
    },

    skills: {
      title: "Моя специальность",
      text:
        "<p> Как видите, я использую <strong> инновационные технологии </strong>, чтобы воплотить ваши идеи в жизнь </p> " +
        "<br> " +
        "<p> Я стараюсь <strong> писать свои коды как можно более чисто </strong>, это самый ценный навык программиста. Во внешнем интерфейсе <strong> я не использую библиотеки макетов, такие как Bootstrap или Vuetify </strong>, потому что они часто загрязняют мой код и мешают свободному дизайну </p>",
    },

    experience: {
      title: "Рабочий стаж",
      items: [
        {
          name: "Ideal Hyzmat",
          timeline: "2020-2021",
          text:
            "Моя первая работа младшим веб-разработчиком. Именно здесь были мои первые ошибки и успехи. Я получил большой опыт после работы с командой талантливых программистов. Веб-сайт <a href='http://idealhyzmat.com/' target='_blank'> Ideal Hyzmat </a>",
          color: "blue",
          icon: ["fas", "suitcase"],
        },
        {
          name: "Geek Space",
          timeline: "2021-now",
          text:
            "Сначала я был веб-разработчиком-волонтером, но потом устроился на работу. Сейчас работаю с небольшой дружной командой. Веб-сайт <a href='https://geekspace.dev' target='_blank'> Geek space </a>",
          color: "red",
          icon: ["fas", "lightbulb"],
        },
      ],
    },

    works: {
      title: "Мои последние работы",

      nav: [
        { name: "Фронтэнд" },
        { name: "Бэкэнд" },
        { name: "Full-stack" },
        { name: "Сервер" },
      ],

      items: [
        {
          name: "Website 1",
          types: ["Frontend", "Backend"],
          image: "/images/sections/welcome/works/work-1.webp",
          views: 100,
        },
        {
          name: "Website 1",
          types: ["Frontend", "Backend"],
          image: "/images/sections/welcome/works/work-1.webp",
          views: 100,
        },
        {
          name: "Website 1",
          types: ["Frontend", "Backend"],
          image: "/images/sections/welcome/works/work-1.webp",
          views: 100,
        },
        {
          name: "Website 1",
          types: ["Frontend", "Backend"],
          image: "/images/sections/welcome/works/work-1.webp",
          views: 100,
        },
      ],
    },
    contact: {},
  },

  viewPortfolio: "Показать портфолио",
  hireMe: "Нанять меня",
  loadMore: "Загрузить больше",
  getInTouch: "Связаться",
  sendMessage: "Отправить",

  name: "Имя",
  email: "Электронная почта",
  subject: "Тема",
  message: "Сообщение",

  frontend: "Фронтэнд",
  backend: "Бэкэнд",
  database: "База данных",
  server: "Сервер",
};
