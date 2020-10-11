import { Request, Response } from 'express';
import { BASE_URL, API_KEY } from '../../../../../lib/server';

export default async function postRateShow(req: Request, res: Response): Promise<void | null> {
  const {
    query: { id, session },
  } = req;
  const rate = req.body;

  const dataRes = await fetch(
    `${BASE_URL}/tv/${id}/rating?api_key=${API_KEY}&guest_session_id=${session}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rate),
    },
  );

  if (dataRes.status < 200 || dataRes.status > 399) {
    throw new Error('Error when fetching the API');
  }

  res.send(dataRes);
}
