export async function GET() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
    headers: {
      API_KEY: 'api key',
    },
  });

  const data = await response.json();

  return Response.json(data);
}

export async function POST(request: Request) {
  const res = await request.json();
  return Response.json({ res });
}
