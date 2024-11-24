import React from "react";
import { login } from "../features/user";
import { useDispatch } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  return (
    <>
      <button
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
