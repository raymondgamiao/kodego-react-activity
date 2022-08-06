import React from "react";

function Button(props) {
  return (
    <button onClick={() => alert("You clicked on Button " + props.num)}>
      Button {props.num}
    </button>
  );
}

export default Button;
