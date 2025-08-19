import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import { post } from "@rails/request.js";

interface Product {
  name: string
  description: string
  public_price: number
  client_price: number
}

export const CreateProduct = () => {
  const { register, handleSubmit} = useForm<Product>()
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: (data: Product) => {
      console.log(data)
      return post('/api/products', {body: data})
    },
    onSuccess: () => {
      navigate('/products')
    },
    onError: (error) => {
      console.log(error)
    }
  })
  const onSubmit: SubmitHandler<Product> = (data) => {
    mutation.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)
    }>
      <label>Product Name</label>
      <input type="string" {...register("name", {required: true})} />
      <label>Product Description</label>
      <input type="text" {...register("description")} />
      <label>Product Public Price</label>
      <input type="number" {...register("public_price", {required: true})} />
      <label>Product Client Price</label>
      <input type="number" {...register("client_price", {required: true})} />
      <input type="submit" />
    </form>
  )
}
