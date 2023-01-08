import React, { useEffect, useState } from "react";
import UserService from "../../../../services/UserService";
import UserCard from "../card/UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getAllFlowers = async () => {
      const result = await UserService.getAllAsync();
      !result.isSuccess && setError(result.message);
      setUsers(result.data);
    };

    getAllFlowers();
  }, []);
  return (
    <>
      <div className="user-list-container">
        {error && <p>{error}</p>}
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default UserList;
