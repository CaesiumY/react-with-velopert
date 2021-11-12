import React from "react";
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <div>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
