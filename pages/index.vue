<script>
export default {
  asyncData({ redirect, app }) {
    redirect(app.localePath("/welcome"));
  },
};
</script>
