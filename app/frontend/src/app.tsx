import React from "react";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
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