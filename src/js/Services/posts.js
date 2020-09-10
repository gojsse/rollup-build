const posts = {};

posts.get = () => {
  return new Promise((resolve, reject) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
      .then(response => response.json())
      .then(posts => resolve(posts))
      .catch(error => reject(error));
  });
}

export default posts;
