import React from "react";

import Button from "./components/Button";

function Exercise2() {
  const button = ["1", "2", "3"];
  return (
    <div>
      {button.map((item) => (
        <Button num={item} />
      ))}
    </div>
  );
}

export default Exercise2;
