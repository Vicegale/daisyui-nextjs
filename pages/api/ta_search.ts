import { NextApiRequest, NextApiResponse } from "next";


export default function characters(
  request: NextApiRequest,
  response: NextApiResponse
) {
  request.
  response.status(200).json(chars);
}