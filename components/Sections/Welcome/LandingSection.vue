<template>
  <section id="landing-section" class="welcome-section">
    <div id="landing-title" v-html="$t('sections.landing.title')"></div>
    <div
      id="landing-description"
      v-html="$t('sections.landing.description')"
    ></div>
    <button class="default-button" id="landing-button">
      <span>
        {{ $t("viewPortfolio") }}
        <fa-icon :icon="['fas', 'briefcase']" />
      </span>
    </button>
  </section>
</template>

<script>
export default {
  name: "LandingSection",
};
</script>
