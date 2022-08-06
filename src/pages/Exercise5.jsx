import React from "react";
import List from "./components/List";

function Exercise5() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div className="animWrapper">
      <ul className="animals">
        {animals.map((item) => (
          <List name={item} />
        ))}
      </ul>
    </div>
  );
}

export default Exercise5;
