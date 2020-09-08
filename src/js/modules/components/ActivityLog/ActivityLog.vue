<template>
  <ul class="vue-app">
    <li v-for="item in items" :key="item.key">
      <span>&lt;app&gt;:</span> {{ item.message }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    items: function() {
      return this.$store.getters.activityLog;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
