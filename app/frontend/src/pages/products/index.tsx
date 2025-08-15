import React from 'react'
import { useQuery } from "@tanstack/react-query";

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
    queryFn: () => fetch('/api/products').then(res => res.json(),),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(products)

  return <table class="table-auto">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Public Price</th>
        <th>Client Price</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product: Product) => (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.public_price}</td>
          <td>{product.client_price}</td>
        </tr>
      ))}
    </tbody>
  </table>
}

