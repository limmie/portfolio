<template>
  <main>
    <LandingSection />
    <AboutSection />
    <ServicesSection />
    <SkillsSection />
    <ExperienceSection />
    <WorksSection />
    <ContactsSection />
  </main>
</template>

<script>
import LandingSection from "../../components/Sections/Welcome/LandingSection";
import AboutSection from "../../components/Sections/Welcome/AboutSection";
import ServicesSection from "../../components/Sections/Welcome/ServicesSection";
import SkillsSection from "../../components/Sections/Welcome/SkillsSection";
import ExperienceSection from "../../components/Sections/Welcome/ExperienceSection";
import WorksSection from "../../components/Sections/Welcome/WorksSection";
import ContactsSection from "../../components/Sections/Welcome/ContactsSection";

export default {
  asyncData: function (ctx) {
    try {
      ctx.$seo({
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
      });

      return {};
    } catch (e) {}
  },
  components: {
    LandingSection,
    AboutSection,
    ServicesSection,
    SkillsSection,
    ExperienceSection,
    WorksSection,
    ContactsSection,
  },
};
</script>
