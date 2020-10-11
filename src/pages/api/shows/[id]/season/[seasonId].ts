import { Request, Response } from 'express';
import { makeRequest, BASE_URL, API_KEY } from '../../../../../lib/server';

export default async function getSeasonDetail(req: Request, res: Response): Promise<void | null> {
  const {
    query: { id, seasonId },
  } = req;

  const dataRes = await makeRequest(
    `${BASE_URL}/tv/${id}/season/${seasonId}?api_key=${API_KEY}&language=en-US`,
  );

  res.send(dataRes);
}
