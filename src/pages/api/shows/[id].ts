import { Request, Response } from 'express';
import { makeRequest, BASE_URL, API_KEY } from '../../../lib/server';

export default async function getShow(req: Request, res: Response): Promise<void | null> {
  const {
    query: { id },
  } = req;

  const dataRes = await makeRequest(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US&page=1`,
  );
  res.send(dataRes);
}
