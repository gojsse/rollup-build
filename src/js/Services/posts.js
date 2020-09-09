function fetchPosts(context) {
  return new Promise((resolve, reject) => {
    context.commit('setError', null);
    context.commit('isLoadingPosts');

    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
      .then(response => response.json())
      .then(posts => {
        context.commit('isNotLoadingPosts');
        context.commit('addPostsToStore', posts);
        context.commit('addToActivityLog', `Data retrieved from ${url}`);
        resolve(posts);
      })
      .catch(error => {
        context.commit('setError', error);
        context.commit('addToActivityLog', `ERROR fetching data from ${url}. See log for details.`);
        reject(error);
      });
  });
}

export default fetchPosts;
