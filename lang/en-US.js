export default {
  currentLanguage: "English",
  currentLanguageIconName: "usa.png",

  fullName: "Selim Ataballyev",

  home: "Home",
  about: "About",
  services: "Services",
  skills: "Skills",
  experience: "Experience",
  works: "Works",
  contacts: "Contacts",

  sidebar: {
    freelancerInfo:
      "<span>Full Stack Web Developer</span> based in Turkmenistan",
  },

  footer: {
    rightsReserved: `© Copyright |  All rights reserved |  ${new Date().getFullYear()}`,
    designIsMadeBy:
      "Design is made by <a href='https://colorlib.com' target='_blank'>Colorlib</a>",
  },

  sections: {
    landing: {
      title: "<h1>Hello, </h1><h1>I'm</h1><h1>Selim</h1>",
      description:
        "<p>100% effective websites written with </p> <p> Vue(Nuxt) and node.js(Express)</p>",
    },

    about: {
      title: "Who am i?",
      text:
        "<p class='welcome-section-text'><strong> Hi, I'm Selim Ataballyev</strong> I'm talented full-stack web developer with over 2+ years of experiences in wide range of websites. </p> " +
        "<br> " +
        "<p class='welcome-section-text'>I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter</p>" +
        "<br>" +
        "<p class='welcome-section-text'>Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinationswherever they take me. I’m passionate, expressive, multi-talentedspirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almostimpulsive need to act on them</p>" +
        "<br>" +
        "<p class='welcome-section-text'>My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. I like to develop expertise in a number of areas over the course of my life and career.</p>" +
        "<br>" +
        "<p class='welcome-section-text'>You can also call me a <strong>frontend developer, backend developer, system administrator,</strong> or by any other market defined function-title.</p>",
      bannerText:
        "<h2>I am happy to know you</h2><h2> that 15+ projects done successfully!</h2>",
    },

    services: {
      title: "Here are some of my services",

      items: [
        {
          name: "Planning",
          description:
            "Project planning from scratch and further improvements, creation of ideas",
          icon: ["fas", "lightbulb"],
          color: "blue",
        },
        {
          name: "Consulting",
          description:
            "Discussion of a project: what technologies are most suitable, what terms, prices, etc.",
          icon: ["fas", "comments"],
          color: "red",
        },
        {
          name: "Frontend",
          description:
            "Site layout from Photoshop, Figma, etc. with clean HTML, CSS + Javascript, Vue.js (Nuxt)",
          icon: ["fas", "code"],
          color: "yellow",
        },
        {
          name: "Backend",
          description:
            "Backend of website with Node.js (Express). For projects that are in a hurry I can offer server-side website built with EJS",
          icon: ["fas", "layer-group"],
          color: "purple",
        },
        {
          name: "Database",
          description:
            "Selection of a database and its structure, and its further development (MySQL, PostgreSQL, MongoDB",
          icon: ["fas", "database"],
          color: "aloe",
        },
        {
          name: "Server",
          description:
            "Configuration of both client-side or server-side website with Nginx in VPS (virtual private server)",
          icon: ["fas", "server"],
          color: "darkblue",
        },
      ],

      stats: [
        { quantity: 125, name: "Cups of coffee" },
        { quantity: 16, name: "Projects" },
        { quantity: 30, name: "Clients" },
        { quantity: 3, name: "Partners" },
      ],
    },

    skills: {
      title: "My speciality",
      text:
        "<p>As you can see, I use <strong>innovative technologies</strong> to translate your ideas into reality </p> " +
        "<br> " +
        "<p>I try to <strong>write my codes as clean as possible</strong>, it is the most valuable skill of programmer. In frontend, <strong>I do not use layout libraries like Bootstrap or Vuetify</strong>, because they often pollute my code and interferes with free design</p>",
    },

    experience: {
      title: "Work Experience",
      items: [
        {
          name: "Ideal Hyzmat",
          timeline: "2020-2021",
          text:
            "My first job as junior web developer. My first mistakes and successes were right here. I got a lot of experience working with a team of gifted programmers. Website of <a href='http://idealhyzmat.com/' target='_blank'> Ideal Hyzmat</a> ",
          color: "blue",
          icon: ["fas", "suitcase"],
        },
        {
          name: "Geek Space",
          timeline: "2021-now",
          text:
            "Firstly I was participating as volunteer web developer, but then I got a job. Now, I'm working with small, friendly team. Website of <a href='https://geekspace.dev' target='_blank'> Geek space</a>",
          color: "red",
          icon: ["fas", "lightbulb"],
        },
      ],
    },

    works: {
      title: "My recent works",

      nav: [
        { name: "Frontend" },
        { name: "Backend" },
        { name: "Full-stack" },
        { name: "Server" },
      ],

      items: [
        {
          name: "Ravel | Travelling Website",
          types: ["Frontend", "SEO", "Layout"],
          image: "/images/sections/welcome/works/work-1.webp",
          link: "/projects/ravel-travelling-website/index.html",
          views: 12,
        },
        {
          name: "Sublime | Game Developers Website",
          types: ["Frontend", "SEO", "Layout"],
          image: "/images/sections/welcome/works/work-2.webp",
          link: "/projects/game-developers-website/index.html",
          views: 100,
        },
        {
          name: "Limmie | Portfolio Website",
          types: ["Frontend", "SEO", "Layout"],
          image: "/images/sections/welcome/works/work-3.webp",
          link: "/projects/limmie-portfolio-website/index.html",
          views: 100,
        },
        {
          name: "Duhoot | Travelling Website",
          types: ["Frontend", "SEO", "Layout"],
          image: "/images/sections/welcome/works/work-4.webp",
          link: "/projects/duhoot-travelling-website/index.html",
          views: 100,
        },
        {
          name: "Golden One | Portfolio Website",
          types: ["Frontend", "SEO", "Layout"],
          image: "/images/sections/welcome/works/work-5.webp",
          link: "/projects/golden-portfolio-website/index.html",
          views: 100,
        },
      ],
    },
    contact: {},
  },

  viewPortfolio: "View portfolio",
  hireMe: "Hire me",
  loadMore: "Load more",
  getInTouch: "Get in touch",
  sendMessage: "Send message",

  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",

  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  server: "Server",
};
