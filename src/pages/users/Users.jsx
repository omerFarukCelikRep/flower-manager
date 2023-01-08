import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "../../components/app/users/list/UserList";

const Users = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<UserList />} />
        <Route path=":id" />
      </Routes>
    </>
  );
};

export default Users;
