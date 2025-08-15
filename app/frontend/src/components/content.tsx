import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Content = () => {
  const [counter, setCounter] = useState(0);

  function onClick() {
    console.log(counter);
    setCounter(counter + 1);
  }
  return (
    <div>
      <Link to="/products">Products</Link>
      <Link to="/pages">Pages</Link>
      <h1>haz dado click {counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
