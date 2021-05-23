<template>
  <section id="services-section" class="welcome-section">
    <SectionTitle
      :navName="$t('services')"
      :title="$t('sections.services.title')"
      id="services-section-title"
    />

    <div id="services">
      <div
        v-for="(service, index) of services"
        :key="index"
        :class="`service-${service.color}`"
      >
        <div class="service-octagon-icon">
          <fa-icon :icon="service.icon" />
        </div>
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>

    <div id="services-stats">
      <div
        class="services-stats-item"
        v-for="(stat, index) in stats"
        :key="index"
      >
        <span>{{ stat.quantity }}</span>
        <p>{{ stat.name }}</p>
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
    services() {
      return this.$t("sections.services.items");
    },

    stats() {
      return this.$t("sections.services.stats");
    },
  },
};
</script>
