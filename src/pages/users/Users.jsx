import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "../../components/app/users/details/UserDetails";
import UserList from "../../components/app/users/list/UserList";
import RequireRole from "../../components/routers/RequireRole";
import "./users.scss";

const Users = () => {
  return (
    <>
      <Routes>
        <Route
          index
          path="/"
          element={
            <RequireRole role={"Admin"}>
              <UserList />
            </RequireRole>
          }
        />
        <Route
          path=":id"
          element={
            <RequireRole role={"Admin"}>
              <UserDetails />
            </RequireRole>
          }
        />
      </Routes>
    </>
  );
};

export default Users;
