import React from "react";
import { login } from "../features/user";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color.value);
  return (
    <>
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          dispatch(
            login({
              name: "Jaisingh",
              age: 23,
              email: "jaidhande3@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
    </>
  );
}

export default Login;
