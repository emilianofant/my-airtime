export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = process.env.API_KEY;

export const makeRequest = async (url: string): Promise<any | null> => {
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
