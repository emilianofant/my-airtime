import { Request, Response } from 'express';
import { makeRequest, BASE_URL, API_KEY } from '../../../lib/server';

export default async function getPopularShows(req: Request, res: Response): Promise<void | null> {
  const {
    query: { page },
  } = req;

  const dataRes = await makeRequest(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
  res.send(dataRes);
}
