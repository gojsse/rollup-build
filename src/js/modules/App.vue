<template>
  <div class="vue-app">
    <p>Initialized vue app on #appVue element.</p>
    <ActivityLog />
    <Posts />
  </div>
</template>

<script>
import ActivityLog from './components/ActivityLog/ActivityLog.vue';
import Posts from './components/Posts/Posts.vue';

export default {
  components: {
    ActivityLog,
    Posts
  },
  created() {
    this.$store.dispatch({
      type: 'addToActivityLog',
      message: 'Welcome to Rollup boilerplate'
    });
  }
};
</script>

<style lang="scss" scoped>

</style>
