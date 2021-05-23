<template>
  <aside id="sidebar">
    <div id="sidebar-wrapper">
      <div id="sidebar-freelancer">
        <div id="sidebar-freelancer-avatar">
          <img src="/images/avatars/sidebar/sidebar-avatar.jpg" alt="" />
        </div>
        <div id="sidebar-freelancer-info">
          <h1>Limmie Blaine</h1>
          <p><span>Full Stack Web Developer</span> based in Turkmenistan</p>
        </div>
      </div>

      <nav id="sidebar-nav">
        <a v-for="(item, index) in nav" :key="index" :href="item.link">
          {{ item.name }}
        </a>
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
        { name: this.$t("home"), link: "#" },
        { name: this.$t("about"), link: "#" },
        { name: this.$t("services"), link: "#" },
        { name: this.$t("skills"), link: "#" },
        { name: this.$t("education"), link: "#" },
        { name: this.$t("experience"), link: "#" },
        { name: this.$t("work"), link: "#" },
        { name: this.$t("blog"), link: "#" },
        { name: this.$t("contact"), link: "#" },
      ];
    },
  },
};
</script>
