import AllUsers from "@/components/custom/AllUsers";
import React from "react";

const Users = () => {
  return (
    <div className="flex flex-col gap-6 p-7 mb-10">
      <div className="header-section">
        <h3>User</h3>
      </div>
      <div className="list-section">
        <AllUsers />
      </div>
    </div>
  );
};

export default Users;
