import { useQuery } from "@tanstack/react-query";

type Product = {
  id: number;
  name: string;
  description: string;
  public_price: number;
  client_price: number;
};

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => fetch('/api/products').then(res => res.json()),
  });
}
