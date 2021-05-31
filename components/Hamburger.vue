<template>
  <button
    data-do-not-close-sidebar="true"
    class="hamburger hamburger--spin"
    :class="active ? 'is-active' : null"
    type="button"
    @click="$emit('clicked')"
  >
    <span class="hamburger-box" data-do-not-close-sidebar="true">
      <span class="hamburger-inner" data-do-not-close-sidebar="true"></span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
