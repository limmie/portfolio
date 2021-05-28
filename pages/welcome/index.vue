<template>
  <main>
    <LandingSection />
    <AboutSection />
    <ServicesSection />
    <SkillsSection />
    <ExperienceSection />
    <WorksSection />
  </main>
</template>

<script>
import LandingSection from "../../components/Sections/Welcome/LandingSection";
import AboutSection from "../../components/Sections/Welcome/AboutSection";
import ServicesSection from "../../components/Sections/Welcome/ServicesSection";
import SkillsSection from "../../components/Sections/Welcome/SkillsSection";
import ExperienceSection from "../../components/Sections/Welcome/ExperienceSection";
import WorksSection from "../../components/Sections/Welcome/WorksSection";

export default {
  components: {
    LandingSection,
    AboutSection,
    ServicesSection,
    SkillsSection,
    ExperienceSection,
    WorksSection,
  },
};
</script>
