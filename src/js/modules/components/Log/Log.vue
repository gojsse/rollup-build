<template>
  <ul class="log">
    <li v-for="item in activityLog" :key="item.key">
      <span>&lt;LOG&gt;:</span> {{ item.message }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'activityLog'
    ])
  }
};
</script>

<style lang="scss" scoped>
.log {
  padding: 1em;
}
</style>
