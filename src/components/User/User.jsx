import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyel = {
    border: "2px solid yellow",
    borderRadius: "20px",
    margin: "10px",
    padding: "10px",
  };
  return (
    <div style={userStyel}>
      <h3>Name : {name}</h3>
      <p>Email : {email}</p>
      <p>
        <small>phone : {phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
