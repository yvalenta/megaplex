import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { patch } from '@rails/request.js';
import { useQuery } from '@tanstack/react-query';
import { Client } from '@/interfaces/models/client.interface';

export const EditClient = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {data: client, isPending} = useQuery({
    queryKey: ["client", params.id],
    queryFn: async () => await fetch(`/api/clients/${params.id}`).then((res) => res.json())
  })
  console.log(client)
  const { register, handleSubmit, control} = useForm<Client>(
    {
      values: client
    }
  )

  const mutation = useMutation({
    mutationFn: (data: Client) => {
      console.log(data);
      return patch(`/api/clients/${params.id}`, {
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      navigate('/clients');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit: SubmitHandler<Client> = (data) => {
    mutation.mutate(data);
  }

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Client</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Identification *</label>
          <input 
            type="number" 
            {...register("identification", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input 
            type="text" 
            {...register("name", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input 
            type="email" 
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input 
            type="tel" 
            {...register("phone")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input 
            type="text" 
            {...register("city")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Saving...' : 'Update Client'}
          </button>
        </div>
      </form>
    </div>
  )
}