import React from "react";
import { roles } from "../../../../context/Roles";

const UserRoles = () => {
  return (
    <>
      <div className="user-roles-container">
        {roles.map((role) => (
          <div className="check-group">
            <input type="checkbox" />
            <span>{role}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserRoles;
