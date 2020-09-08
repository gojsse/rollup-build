<template>
  <div class="posts__post">
    <span>{{ postID }}</span> {{ post.title }}
  </div>
</template>

<script>
export default {
  props: [
    'post'
  ],
  computed: {
    postID: function() {
      if (this.post.id < 10) {
        return `00${this.post.id}`;
      } else if (this.post.id < 100) {
        return `0${this.post.id}`;
      } else {
        return this.post.id;
      }
    }
  }
}
</script>

<style>

</style>
