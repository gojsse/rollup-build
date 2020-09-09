async function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await fetch(url);
    console.log('try response', response);
    return await response.json();
  } catch (error) {
    console.log('catch fetchPosts error', error);
    throw error;
  }
}

export default fetchPosts;
