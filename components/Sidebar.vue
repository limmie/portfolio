<template>
  <aside id="sidebar">
    <div id="sidebar-wrapper">
      <div id="sidebar-freelancer">
        <div id="sidebar-freelancer-avatar">
          <img src="/images/avatars/sidebar/sidebar-avatar.webp" alt="" />
        </div>
        <div id="sidebar-freelancer-info">
          <h1>{{ this.$t("fullName") }}</h1>
          <p v-html="$t('sidebar.freelancerInfo')"></p>
        </div>
      </div>

      <nav id="sidebar-nav">
        <a v-for="(item, index) in nav" :key="index" :href="item.link">
          {{ item.name }}
        </a>

        <nuxt-link
          id="sidebar-nav-language-selector"
          :to="switchLocalePath(nextLanguageCode)"
        >
          {{ $t("currentLanguage") }}
          <img
            :src="`/images/countries/${$t('currentLanguageIconName')}`"
            alt=""
          />
        </nuxt-link>
      </nav>
      <footer id="sidebar-footer">
        <p v-html="this.$t('footer.rightsReserved')"></p>
        <p v-html="this.$t('footer.designIsMadeBy')"></p>
      </footer>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    nav() {
      return [
        { name: this.$t("home"), link: "#landing-section" },
        { name: this.$t("about"), link: "#about-section" },
        { name: this.$t("services"), link: "#services-section" },
        { name: this.$t("skills"), link: "#skills-section" },
        { name: this.$t("experience"), link: "#experience-section" },
        { name: this.$t("works"), link: "#works-section" },
        { name: this.$t("contacts"), link: "#contacts-section" },
      ];
    },

    languages() {
      return [
        { name: "Русский", code: "ru" },
        { name: "English", code: "en" },
      ];
    },

    nextLanguageCode() {
      return this.$i18n.locale === "en" ? "ru" : "en";
    },
  },
};
</script>
