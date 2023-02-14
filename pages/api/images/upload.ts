import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const res = await fetch(`https://api.imgur.com/3/upload/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
      },
      body: JSON.stringify(request.body),
    });

    const data = await res.json();
    response.status(200).json(data);
  } catch (err) {
    console.log(err);
    response.status(500).json(err);
  }
}
