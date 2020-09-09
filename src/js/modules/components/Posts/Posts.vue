<template>
  <div class="posts">
    <p v-if="error">{{ error }}</p>
    <Post
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
    <Loading v-if="postsLoading" />
  </div>
</template>

<script>
import Post from './Post.vue';
import Loading from '../UI/Loading.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Post,
    Loading
  },
  mounted() {
    this.fetchPosts()
      .then(response => {
        console.log('fetchPosts success', response);
      })
      .catch(error => {
        console.log('fetchPosts error', error);
      });
  },
  methods: {
    ...mapActions([
      'fetchPosts',
      'addToActivityLog'
    ])
  },
  computed: {
    ...mapGetters([
      'posts',
      'postsLoaded',
      'postsLoading',
      'error'
    ])
  }
}
</script>

<style>

</style>
