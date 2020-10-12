import { Show, IShowDetails, Season } from '../lib/types';

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;

export async function fetchPopularShows(): Promise<Show[] | null> {
  return makeRequest(`${HOST_URL}/api/shows`).then((res) => res.results);
}

export async function fetchSearchShows(query: string): Promise<Show[] | null> {
  return makeRequest(`${HOST_URL}/api/shows/search?search=${query}`).then((res) => res.results);
}

export async function fetchShowDetails(showId: number): Promise<IShowDetails | null> {
  return makeRequest(`${HOST_URL}/api/shows/${showId}`);
}

export async function fetchSeasonDetails(
  seasonNumber: number,
  showId: number,
): Promise<Season | null> {
  return makeRequest(`${HOST_URL}/api/shows/${showId}/season/${seasonNumber}`);
}

export async function fetchShowReviews(showId: number): Promise<Season | null> {
  return makeRequest(`${HOST_URL}/api/shows/${showId}/reviews`).then((res) => res.results);
}

export async function fetchGetGuestSessionToken(): Promise<string | null> {
  return makeRequest(`${HOST_URL}/api/session`);
}

export async function postRateShow(
  showId: number,
  rate: string,
  guestSessionId: string,
): Promise<void> {
  await fetch(`${HOST_URL}/api/shows/${showId}/rating?ssession=${guestSessionId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: rate }),
  }).catch((e) => {
    console.log('Error in the Rate request', e);
  });
}

const makeRequest = async (url: string) => {
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
