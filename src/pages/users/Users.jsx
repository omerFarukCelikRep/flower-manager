import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "../../components/app/users/details/UserDetails";
import UserList from "../../components/app/users/list/UserList";
import "./users.scss";

const Users = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<UserList />} />
        <Route path=":id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default Users;
