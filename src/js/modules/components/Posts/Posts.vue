<template>
  <div class="posts">
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

const url = 'https://jsonplaceholder.typicode.com/posts';

export default {
  components: {
    Post,
    Loading
  },
  created() {
    this.$store.dispatch({type: 'isLoadingPosts'});

    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.$store.dispatch({
          type: 'addToActivityLog',
          message: `Data retrieved from ${url}`
        });

        setTimeout(() => {
          this.$store.dispatch({type: 'isNotLoadingPosts'});
          this.$store.dispatch({
            type: 'addPostsToStore',
            posts: json
          });
        }, 1000);
      })
      .catch(error => {
        console.log('error', error);
        this.$store.dispatch({
          type: 'addToActivityLog',
          message: `ERROR fetching data from ${url}. See log for details.`
        });
      });
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    postsLoaded() {
      return this.$store.getters.postsLoaded;
    },
    postsLoading() {
      return this.$store.getters.postsLoading;
    }
  }
}
</script>

<style>

</style>
