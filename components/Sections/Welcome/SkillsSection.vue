<template>
  <section id="skills-section" class="welcome-section">
    <SectionTitle
      :navName="$t('skills')"
      :title="$t('sections.skills.title')"
    />
  </section>
</template>

<script>
import SectionTitle from "../../Titles/SectionTitle";

export default {
  components: {
    SectionTitle,
  },
};
</script>
