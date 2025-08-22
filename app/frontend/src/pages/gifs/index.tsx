import { useState } from "react";
import { useGifs } from "@/hooks/useGifs";

export const Gifs = () => {
  const [search, setSearch] = useState('')
  const {mutate, data, isLoading, isError, error} = useGifs()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(search.trim()) {
      mutate(search)
    }
  }
console.log(data)
  return (

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Buscador de GIFs</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar GIFs..."
            className="flex-1 p-2 border rounded"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-300"
            disabled={isLoading || !search.trim()}
          >
            {isLoading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </form>

      {isError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data.map((gif: useGifs) => (
          <div key={gif.id} className="border rounded overflow-hidden">
            <img
              src={gif.images.fixed_height.url}
              alt={gif.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600 truncate">{gif.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}