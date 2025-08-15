import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Products } from "./pages/products";
import { Footer } from "./components/footer";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/pages" element={<Content />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
)
}

const queryClient = new QueryClient()

export default App