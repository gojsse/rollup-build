<template>
  <div class="posts__post">
    <span>[{{ postID }}]</span> {{ niceTitle }}
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
    },
    niceTitle: function() {
      return this.post.title.length > 40 ? this.post.title.substring(0, 40) + '...' : this.post.title;
    }
  }
}
</script>

<style>
.posts__post {
  padding: .25em;
}
</style>
