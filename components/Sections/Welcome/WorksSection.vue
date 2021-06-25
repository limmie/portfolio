<template>
  <section id="works-section" class="welcome-section">
    <SectionTitle :navName="$t('works')" :title="$t('sections.works.title')" />

    <div id="works-wrapper">
      <div id="works-nav">
        <div class="works-nav-item" v-for="(item, index) in nav" :key="index">
          {{ item.name }}
        </div>
      </div>

      <div id="work-blocks">
        <div class="work-block" v-for="(work, index) in works" :key="index">
          <a :href="work.link" target="_blank">
            <div class="work-block-image">
              <img :src="work.image" alt="" />
            </div>
            <div class="work-block-hover-info">
              <div class="work-block-hover-info-title">
                <h3>{{ work.name }}</h3>
                <span v-for="(type, index) in work.types" :key="index">
                  {{ type }}
                </span>
              </div>
              <div class="work-block-hover-info-stats">
                <div class="work-block-hover-info-stat">
                  <fa-icon :icon="['fas', 'share-alt']" />
                </div>
                <div class="work-block-hover-info-stat">
                  <fa-icon :icon="['fas', 'eye']" />
                  {{ work.views }}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="welcome-load-more-button" id="works-load-more-button">
        {{ $t("loadMore") }}
        <fa-icon :icon="['fas', 'redo']" />
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
    nav() {
      return this.$t("sections.works.nav");
    },

    works() {
      return this.$t("sections.works.items");
    },
  },
};
</script>
