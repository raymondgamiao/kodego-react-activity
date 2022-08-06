import React from "react";
import { useState } from "react";

function Exercise6() {
  const [greet, setGreet] = useState({
    fname: "",
    lname: "",
  });

  function handleFnameChange(e) {
    setGreet((prev) => ({
      ...prev,
      fname: e.target.value,
    }));
  }

  function handleLnameChange(e) {
    setGreet({
      ...greet,
      lname: e.target.value,
    });
  }
  return (
    <div className="form">
      <input
        type="text"
        name="fname"
        id=""
        placeholder="First name"
        onChange={handleFnameChange}
      />
      <input
        type="text"
        name="lname"
        id=""
        placeholder="Last name"
        onChange={handleLnameChange}
      />
      <button
        onClick={() => alert("Hello " + greet.fname + " " + greet.lname + "!")}
      >
        Greet Me
      </button>
    </div>
  );
}

export default Exercise6;
