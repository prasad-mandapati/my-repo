import React from "react";
import "./User.css";
import Button from "./Button";
import Card from "./Card";
const User = (props) => {
  return (
    <>
      <h2>Name : {props.name}</h2>
      <h3>Job : {props.job}</h3>
      <Button>Learn More</Button>
    </>
  );
};
User.defaultProps = {
  name: "Default Name",
  age: "Default age",
};
export default User;
