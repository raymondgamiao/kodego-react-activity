import React from "react";
import { useState } from "react";

function Exercise3() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((currentNum) => currentNum + 1);
  };

  return (
    <div>
      <p>Button has been clicked: {count} times </p>
      <button onClick={increaseCount}>Click me</button>
    </div>
  );
}

export default Exercise3;
