import Vue from 'vue';
import Vuex from 'vuex';
import posts from '../Services/posts';

Vue.use(Vuex);

const addToActivityLog = (state, newMessage) => {
  const updatedLog = [
    ...state.activityLog,
    {
      key: state.activityLog.length + 1,
      message: newMessage
    }
  ];
  return updatedLog;
};

export default new Vuex.Store({
  state: {
    posts: null,
    postsLoaded: false,
    postsLoading: false,
    activityLog: [],
    error: null
  },
  mutations: {
    addPostsToStore(state, posts) {
      state.posts = [...posts];
      if (!posts) {
        state.postsLoaded = null;
        state.activityLog = addToActivityLog(state, 'Could not load posts...');
        return;
      }
      state.postsLoaded = true;
      state.activityLog = addToActivityLog(state, `${posts.length} posts loaded`);
    },
    addToActivityLog(state, newMessage) {
      state.activityLog = addToActivityLog(state, newMessage);
    },
    isLoadingPosts(state) {
      state.postsLoading = true;
    },
    isNotLoadingPosts(state) {
      state.postsLoading = false;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    addToActivityLog(context, payload) {
      context.commit('addToActivityLog', payload.message);
    },
    fetchPosts(context) {
      context.commit('setError', null);
      context.commit('isLoadingPosts');
      context.commit('addToActivityLog', 'Fetching POSTS...');

      return posts
        .get(context)
        .then(posts => {
          context.commit('isNotLoadingPosts');
          context.commit('addPostsToStore', posts);
          context.commit('addToActivityLog', `SUCCESS: Post data retrieved`);
          return posts;
        })
        .catch(error => {
          context.commit('setError', error);
          context.commit('addToActivityLog', `ERROR: Fetching post data failed. See log for details.`);
          return error;
        });
    }
  },
  getters: {
    posts: state => state.posts,
    postsLoading: state => state.postsLoading,
    postsLoaded: state => state.postsLoaded,
    activityLog: state => state.activityLog,
    error: state => state.error
  },
});
