import { useMutation } from "@tanstack/react-query";
import { GiphyResponse } from "@/interfaces/gifs/giphy.response";
import {getGifsByQuery} from "@/pages/gifs/actions/get-gifs-by-query.action.js";

/*export function useGifs(query: string) {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancel = false
    setLoading(true)

    const fetchGifs = async () => {
      const data = await getGifsByQuery(query)
      if (!cancel) {
        setGifs(data)
        setLoading(false)
      }
    }

    fetchGifs()

    return () => { cancel = true }
  }, [query]);

  return { gifs, loading }
}*/

export function useGifs() {
  return useMutation<GiphyResponse, Error, string>({
    mutationFn: (query: string) => getGifsByQuery(query)
  })
}
