import { GiphyResponse } from "@/interfaces/gifs/giphy.response";
import {Gif} from "@/interfaces/gifs/gif.interface.js";
export const getGifsByQuery = async(query: string): Promise<Gif[]> => {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${query}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
  return res.json()
}
