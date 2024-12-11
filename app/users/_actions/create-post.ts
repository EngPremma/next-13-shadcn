'use server';

export const createPost = async (prevState: unknown, formData: FormData) => {
  if (formData.get('username') === '') {
    return {
      message: 'Missing username',
    };
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  console.log(data);
};
