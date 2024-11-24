import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <>
      <div>This is the profile component</div>
      <div>Name:{user.name}</div>
      <div>Age:{user.age}</div>
      <div>Email:{user.email}</div>
    </>
  );
}

export default Profile;
