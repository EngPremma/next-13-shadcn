const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const catApi = {
  getUsers: (page: number, limit: number) =>
    fetch(
      `${BASE_URL}/cats?${new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      })}`,
    ).then(res => res.json()),
};
