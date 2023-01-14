import React from "react";
import { roles } from "../../../../context/Roles";

const UserRoles = () => {
  return (
    <>
      <div className="user-roles-container">
        {roles.map((role, index) => (
          <div className="check-group" key={index}>
            <input type="checkbox" />
            <span>{role}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserRoles;
