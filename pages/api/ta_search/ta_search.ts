import { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  request.
  response.status(200).json(chars);
}