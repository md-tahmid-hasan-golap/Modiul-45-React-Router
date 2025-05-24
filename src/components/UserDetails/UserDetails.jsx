import React from "react";
import { useLoaderData } from "react-router";
import "./UserDetails.css";

const UserDetails = () => {
  const user = useLoaderData();
  const { website, name } = user;
  console.log(user);
  return (
    <div>
      <h3>User details here</h3>
      <div className="details">
        <h4>name : {name}</h4>
        <p>website : {website}</p>
      </div>
    </div>
  );
};

export default UserDetails;
