import React from "react";
import { useState, useEffect } from "react";

function Exercise3() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Button has been clicked: {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Exercise3;
