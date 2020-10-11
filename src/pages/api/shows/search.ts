import { Request, Response } from 'express';
import { makeRequest, BASE_URL, API_KEY } from '../../../lib/server';

export default async function getSearchShows(req: Request, res: Response): Promise<void | null> {
  const {
    query: { search },
  } = req;

  const dataRes = await makeRequest(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${search}`,
  );
  res.send(dataRes);
}
