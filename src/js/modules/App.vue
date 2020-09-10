<template>
  <div class="vue-app">
    <Log />
    <Posts />
  </div>
</template>

<script>
import Log from './components/Log/Log.vue';
import Posts from './components/Posts/Posts.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    Log,
    Posts
  },
  methods: {
    ...mapActions([
      'addToActivityLog'
    ])
  },
  created() {
    this.addToActivityLog({message: 'Vue app created on #appVue element.'});
  }
};
</script>

<style lang="scss" scoped>
.vue-app {
  background-color: black;
}
</style>
