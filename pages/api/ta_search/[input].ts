import { ClientRequest } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const url =
    'https://api.content.tripadvisor.com/api/v1/location/search?key=' +
    process.env.TRIPADVISOR_KEY +
    '&searchQuery=taberna%20modesto&category=restaurants&language=en';

  try {
    const res = await fetch(url);
    console.log(res.text());
    response.status(200).json(res.json());
  } catch (err) {
    response.status(500).json(err);
  }
}
