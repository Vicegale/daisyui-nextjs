import { ClientRequest } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const urlBase =
    'https://api.content.tripadvisor.com/api/v1/location/search?key=' +
    process.env.TRIPADVISOR_KEY;
  const urlParams =
    '&searchQuery=' + request.query + '&category=restaurants&language=en';

  console.log(urlParams);
  const url = urlBase + urlParams;
  try {
    const res = await fetch(url);
    response.status(200).json(await res.json());
  } catch (err) {
    response.status(500).json(err);
  }
}
