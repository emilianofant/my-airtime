import { Show, ShowDetails, Season } from '../lib/types';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3504a963b5eddb74923319a7e1dab880';

export async function fetchPopularShows(): Promise<Show[] | null> {
  return makeRequest(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`).then(
    (res) => res.results,
  );
}

export async function fetchShowDetail(showId: number): Promise<ShowDetails | null> {
  return makeRequest(`${BASE_URL}/tv/${showId}?api_key=${API_KEY}`);
}

export async function fetchSeasonDetails(
  seasonNumber: number,
  showId: number,
): Promise<Season | null> {
  return makeRequest(`${BASE_URL}/tv/${showId}/season/${seasonNumber}?api_key=${API_KEY}`);
}

export async function fetchSearchShows(query: string): Promise<Show[] | null> {
  return makeRequest(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${query}`,
  ).then((res) => res.results);
}

const makeRequest = async (url) => {
  const res = await fetch(url);

  if (res.status !== 200) {
    throw new Error('Error when fetching the API');
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
};
