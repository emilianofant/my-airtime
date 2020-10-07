import { Show, ShowDetails } from '../lib/types';

const BASE_URL = 'https://api.themoviedb.org/3/tv';
const API_KEY = '3504a963b5eddb74923319a7e1dab880';

export async function fetchAPI(): Promise<Show[] | null> {
  const res = await fetch(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`);

  if (res.status !== 200) {
    throw new Error('Error when fetching the API');
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.results;
}

export async function fetchShowDetail(showId: number): Promise<ShowDetails | null> {
  const res = await fetch(`${BASE_URL}/${showId}?api_key=${API_KEY}`);
  if (res.status !== 200) {
    throw new Error('Error when fetching the API');
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
}
