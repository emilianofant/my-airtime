import { Request, Response } from 'express';
import { makeRequest, BASE_URL, API_KEY } from '../../../lib/server';

export default async function getGuestSessionToken(
  req: Request,
  res: Response,
): Promise<void | null> {
  const dataRes = await makeRequest(
    `${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`,
  );
  res.send(dataRes);
}
