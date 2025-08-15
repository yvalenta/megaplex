import React, { useState } from 'react';


export const Content = () => {
  const [counter, setCounter] = useState(0);

  function onClick() {
    console.log(counter);
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>haz dado click {counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
