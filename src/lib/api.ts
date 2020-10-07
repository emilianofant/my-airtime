export async function fetchAPI() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=3504a963b5eddb74923319a7e1dab880&language=en-US&page=1`,
  );

  if (res.status !== 200) {
    throw new Error('Error when fetching the API');
  }

  const json = await res.json();

  return json;
}
