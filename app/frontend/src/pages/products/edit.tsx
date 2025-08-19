import React from "react";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import { patch } from "@rails/request.js";
import {useQuery} from "@tanstack/react-query";

interface Product {
  name: string
  description: string
  public_price: number
  client_price: number
}

export const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate()
  const {data: product, isPending} = useQuery({
    queryKey: ["product", params.id],
    queryFn: async () => await fetch(`/api/products/${params.id}`).then((res) => res.json())
  })
  console.log(product)
  const { register, handleSubmit, control} = useForm<Product>(
    {
      values: product
    }
  )

  const mutation = useMutation({
    mutationFn: (data: Product) => {
      console.log(data)
      return patch(`/api/products/${params.id}`, {body: data})
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
    <form onSubmit={handleSubmit(onSubmit) }>
      <label>Product Name</label>
      <input control={control} type="string" {...register("name", {required: true})} />
      <label>Product Description</label>
      <input control={control} type="text" {...register("description")} />
      <label>Product Public Price</label>
      <input control={control} type="number" {...register("public_price", {required: true})} />
      <label>Product Client Price</label>
      <input type="number" {...register("client_price", {required: true})} />
      <input type="submit" />
    </form>
  )
}