import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";

type Product = {
  id: number,
  name: string,
  description: string,
  public_price: number,
  client_price: number
}

export const Products = () => {
  const { isPending, data: products, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('/api/products').then(res => res.json()),
  })

  const { mutate: deleteProduct, isPending: isDeleting } = useDeleteProduct();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  console.log(products)

  return <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">Name</th>
        <th scope="col" className="px=6 py-3">Description</th>
        <th scope="col" className="px-6 py-3">Public Price</th>
        <th scope="col" className="px-6 py-3">Client Price</th>
        <th scope="col" className="px-6 py-3" colSpan={3}>Actions</th>
      </tr>
      </thead>
      <tbody>
      {products.map((product: Product) => (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" key={product.id}>
          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</td>
          <td scope="row" className="px-6 py-4">{product.description}</td>
          <td scope="row" className="px-6 py-4">{product.public_price}</td>
          <td scope="row" className="px-6 py-4">{product.client_price}</td>
          <td scope="row" className="px-6 py-4">Show</td>
          <td scope="row" className="px-6 py-4"><Link to={`/products/${product.id}`}>Edit</Link></td>
          <td scope="row" className="px-6 py-4" colSpan={3}>
            <button 
              onClick={() => deleteProduct(product)}
              disabled={isDeleting}
              className={`px-4 py-2 text-white rounded ${isDeleting ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'}`}
            >
              {isDeleting ? 'Eliminando...' : 'Eliminar'}
            </button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
    <br/>
    <Link to="/products/new" className="bg-gray-300 w-sm-block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Create Product</Link>
  </div>

    }

