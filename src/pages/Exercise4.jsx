import React from "react";

function Exercise4() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div className="animWrapper">
      <ul className="animals">
        {animals.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise4;
