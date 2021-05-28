export default {
  home: "Home",
  about: "About",
  services: "Services",
  skills: "Skills",
  education: "Education",
  experience: "Experience",
  work: "Work",
  blog: "Blog",
  contact: "Contact",

  footer: {
    rightsReserved: `© Copyright |  All rights reserved |  ${new Date().getFullYear()}`,
    designIsMadeBy:
      "Design is made by <a href='https://colorlib.com' target='_blank'>Colorlib</a>",
  },

  sections: {
    landing: {
      title: "<h1>Hello</h1><h1>I'm</h1><h1>Selim</h1>",
      description:
        "<p>100% effective websites written with </p> <p> Vue(Nuxt) and node.js(Express)</p>",
    },

    about: {
      title: "Who am i?",
      text:
        "<p class='welcome-section-text'><strong> Hi I'm Limmie Blaine </strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. </p> <br> <p class='welcome-section-text'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar </p>",
      bannerText:
        "<h2>I am happy to know you</h2><h2> that 300+ projects done successfully!</h2>",
    },

    services: {
      title: "Here are some of my services",

      items: [
        {
          name: "Planning",
          description:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics",
          icon: ["fas", "lightbulb"],
          color: "blue",
        },
        {
          name: "Consulting",
          description:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics",
          icon: ["fas", "comments"],
          color: "red",
        },
        {
          name: "Frontend",
          description:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics",
          icon: ["fas", "code"],
          color: "yellow",
        },
        {
          name: "Backend",
          description:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics",
          icon: ["fas", "layer-group"],
          color: "purple",
        },
        {
          name: "Database",
          description:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics",
          icon: ["fas", "database"],
          color: "aloe",
        },
        {
          name: "Server",
          description:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics",
          icon: ["fas", "server"],
          color: "darkblue",
        },
      ],

      stats: [
        { quantity: 309, name: "Cups of coffee" },
        { quantity: 356, name: "Projects" },
        { quantity: 30, name: "Clients" },
        { quantity: 10, name: "Partners" },
      ],
    },

    skills: {
      title: "My speciality",
      text:
        "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.",
    },

    experience: {
      title: "Work Experience",
      items: [
        {
          name: "Full Stack Web Developer",
          timeline: "2019-2020",
          text:
            "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
          color: "blue",
          icon: ["fas", "server"],
        },
        {
          name: "Full Stack Web Developer",
          timeline: "2019-2020",
          text:
            "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
          color: "red",
          icon: ["fas", "server"],
        },
        {
          name: "Full Stack Web Developer",
          timeline: "2019-2020",
          text:
            "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
          color: "purple",
          icon: ["fas", "server"],
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
  },

  viewPortfolio: "View portfolio",
  hireMe: "Hire me",

  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  server: "Server",
};
