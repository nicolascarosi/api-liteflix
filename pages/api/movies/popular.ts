import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}`
    );
    const data = await res.json();
    response.status(200).json(data);
  } catch (err) {
    console.log(err);
    response.status(500).json(err);
  }
}
