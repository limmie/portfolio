<template>
  <div class="container">
    <Hamburger
      data-do-not-close-sidebar="true"
      v-show="Window.width < 800"
      id="sidebar-hamburger"
      :active="sidebarActive"
      @clicked="toggleSidebar"
    />

    <div id="main-wrapper">
      <transition name="sidebar">
        <Sidebar v-click-outside="closeSidebar" v-show="sidebarActive" />
      </transition>

      <Nuxt />
    </div>
  </div>
</template>

<script>
import Hamburger from "../components/Hamburger";
import Sidebar from "../components/Sidebar";

export default {
  components: {
    Hamburger,
    Sidebar,
  },

  data() {
    return {
      sidebarActive: false,

      Window: {
        width: 0,
        height: 0,
      },
    };
  },

  mounted() {
    this.sidebarActive = window.innerWidth >= 800;
    this.Window.width = window.innerWidth;

    window.addEventListener("resize", (e) => {
      this.sidebarActive = window.innerWidth >= 800;
      this.Window.width = window.innerWidth;
    });
  },

  methods: {
    toggleSidebar() {
      this.sidebarActive = !this.sidebarActive;

      if (window.innerWidth < 800) {
        this.sidebarActive
          ? document.body.classList.add("static")
          : document.body.classList.remove("static");
      }
    },

    closeSidebar(event) {
      const doNotCloseSidebar = event.target.dataset.doNotCloseSidebar;
      if (doNotCloseSidebar || window.innerWidth > 800) return;
      this.sidebarActive = false;
    },
  },
};
</script>
