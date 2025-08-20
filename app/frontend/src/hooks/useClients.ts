import { useQuery } from "@tanstack/react-query";
import { Client } from "@/interfaces/models/client.interface";

export function useClients() {
  return useQuery<Client[]>({
    queryKey: ['clients'],
    queryFn: () => fetch('/api/clients').then(res => res.json()),
  })
}
