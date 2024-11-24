import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/color";

function Color() {
  const [color, handleChange] = useState(() => "");
  const dispatch = useDispatch();
  return (
    <>
      <input
        placeholder="Enter a valid color"
        onChange={(event) => handleChange(event.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </>
  );
}

export default Color;
