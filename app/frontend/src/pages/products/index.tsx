import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";

type Product = {
  id: number,
  name: string,
  description: string,
  public_price: number,
  client_price: number
}

export const Products = () => {
  const {isPending, data: products, error} = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('/api/products').then(res => res.json(),),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(products)

  return <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <Link to="/products">Productos</Link>
    <Link to="/pages">Home</Link>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">Name</th>
        <th scope="col" className="px=6 py-3">Description</th>
        <th scope="col" className="px-6 py-3">Public Price</th>
        <th scope="col" className="px-6 py-3">Client Price</th>
      </tr>
      </thead>
      <tbody>
      {products.map((product: Product) => (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" key={product.id}>
          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</td>
          <td scope="row" className="px-6 py-4">{product.description}</td>
          <td scope="row" className="px-6 py-4">{product.public_price}</td>
          <td scope="row" className="px-6 py-4">{product.client_price}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>

    }

