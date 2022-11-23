import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="w-64">SideBar</div>
      <div className="flex-1 bg-slate-400">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
