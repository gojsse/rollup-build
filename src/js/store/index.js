import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const addToActivityLog = (state, newMessage) => {
  console.log('message', newMessage);
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
    activityLog: []
  },
  mutations: {
    addPostsToStore(state, posts) {
      state.posts = {...posts};
      if (!posts.length) {
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
    }
  },
  actions: {
    addPostsToStore(context, payload) {
      context.commit('addPostsToStore', payload.posts);
    },
    addToActivityLog(context, payload) {
      context.commit('addToActivityLog', payload.message);
    },
    isLoadingPosts(context) {
      context.commit('isLoadingPosts');
    },
    isNotLoadingPosts(context) {
      context.commit('isNotLoadingPosts');
    }
  },
  getters: {
    posts: state => state.posts,
    postsLoaded: state => state.postsLoaded,
    postsLoading: state => state.postsLoading,
    activityLog: state => state.activityLog,
  },
});
