import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "../../components/app/users/list/UserList";
import "./users.scss";

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
