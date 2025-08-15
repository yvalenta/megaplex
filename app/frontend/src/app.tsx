import React from "react";
import { Header } from "./header";
import { Content } from "./content";
import { Footer } from "./footer";
export const App = () => {
  return (
    <>
      <Header name={'Ruben'} />
      <Content />
      <Footer />
    </>
  )
}

export default App