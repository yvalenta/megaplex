import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Products } from "./pages/products";
import { Footer } from "./components/footer";
import  { Navbar } from "./layout/navbar";
import {CreateProduct}  from "./pages/products/new";
import { EditProduct } from "./pages/products/edit";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Content />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/new" element={<CreateProduct />} />
            <Route path="/products/:id" element={<EditProduct />} />
          </Route>
        </Routes>


      </BrowserRouter>
    </QueryClientProvider>
)
}

const queryClient = new QueryClient()

export default App