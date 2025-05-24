import React, { use } from "react";

const Users2 = ({ usePromised }) => {
  const users = use(usePromised);
  console.log(users);
  return (
    <div>
      <h3>This is users 2</h3>
    </div>
  );
};

export default Users2;
