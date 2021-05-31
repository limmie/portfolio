<template>
  <section id="experience-section" class="welcome-section">
    <SectionTitle
      :navName="$t('experience')"
      :title="$t('sections.experience.title')"
    />

    <div id="experience-timelines-wrapper">
      <div
        class="experience-timeline"
        v-for="(experience, index) in experiences"
        :key="index"
      >
        <div :class="`experience-timeline-icon-${experience.color}`">
          <fa-icon :icon="experience.icon" />
        </div>
        <div class="experience-timeline-block">
          <div class="experience-timeline-title">
            <h2>{{ experience.name }}</h2>
            <span>{{ experience.timeline }}</span>
          </div>
          <div class="experience-timeline-text">
            <p class="welcome-section-text" v-html="experience.text"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "../../Titles/SectionTitle";

export default {
  components: {
    SectionTitle,
  },

  computed: {
    experiences() {
      return this.$t("sections.experience.items");
    },
  },
};
</script>
