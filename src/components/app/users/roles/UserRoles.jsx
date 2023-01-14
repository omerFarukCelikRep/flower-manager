import React from "react";
import { roles } from "../../../../context/Roles";

const UserRoles = ({ userRoles, handleChecboxChange }) => {
  return (
    <>
      <div className="user-roles-container">
        {roles.map((role, index) => (
          <div className="check-group" key={index}>
            <input
              type="checkbox"
              value={role}
              defaultChecked={userRoles?.some((userRole) => userRole === role)}
              // checked={userRoles?.some((userRole) => userRole === role)}
              onChange={handleChecboxChange}
            />
            <span>{role}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserRoles;
