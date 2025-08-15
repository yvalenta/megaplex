import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Products } from "./pages/products";
import { Footer } from "./components/footer";

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header name={'Ruben'} />
      <Content />
      <Products />
      <Footer />
    </QueryClientProvider>
  )
}

export default App