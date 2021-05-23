<template>
  <section id="about-section" class="welcome-section">
    <SectionTitle :navName="$t('about')" :title="$t('sections.about.title')" />

    <div id="about-text" v-html="$t('sections.about.text')"></div>

    <div id="about-service-blocks">
      <div
        v-for="(block, index) of serviceBlocks"
        :key="index"
        :class="`about-service-block-${block.color}`"
      >
        <fa-icon class="about-service-block-icon" :icon="block.icon" />
        <p class="about-service-block-name">{{ block.name }}</p>
      </div>
    </div>

    <div id="about-banner">
      <div
        id="about-banner-text"
        v-html="$t('sections.about.bannerText')"
      ></div>
      <button class="transition-from-left-button" id="about-banner-button">
        <span>{{ $t("hireMe") }} <fa-icon :icon="['fas', 'handshake']" /></span>
      </button>
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
    serviceBlocks() {
      return [
        {
          name: this.$t("frontend"),
          icon: ["fas", "code"],
          color: "blue",
        },
        {
          name: this.$t("backend"),
          icon: ["fas", "layer-group"],
          color: "red",
        },
        {
          name: this.$t("database"),
          icon: ["fas", "database"],
          color: "yellow",
        },
        {
          name: this.$t("server"),
          icon: ["fas", "server"],
          color: "purple",
        },
      ];
    },
  },
};
</script>
