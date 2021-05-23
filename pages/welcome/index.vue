<template>
  <main>
    <LandingSection />
    <AboutSection />
    <ServicesSection />
    <SkillsSection />
  </main>
</template>

<script>
import LandingSection from "../../components/Sections/Welcome/LandingSection";
import AboutSection from "../../components/Sections/Welcome/AboutSection";
import ServicesSection from "../../components/Sections/Welcome/ServicesSection";
import SkillsSection from "../../components/Sections/Welcome/SkillsSection";

export default {
  components: {
    LandingSection,
    AboutSection,
    ServicesSection,
    SkillsSection,
  },
};
</script>
