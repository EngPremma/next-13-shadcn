'use server';

export const createPost = async () => {
  try {
    const re = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
    });

    const data = await re.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
