<template>
  <div class="welcome-section-title">
    <p>{{ navName }}</p>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",

  props: {
    navName: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
};
</script>
