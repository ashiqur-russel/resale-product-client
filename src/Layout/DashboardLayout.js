import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getRole } from "../api/auth";
import Sidebar from "../components/Dashbaord/Sidebar/Sidebar";
import SmallSpinner from "../components/spinner/Spinner";
import { AuthContext } from "../contexts/Authprovider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRole(user?.email).then((data) => {
      setRole(data.role);
      setLoading(false);
    });
  }, [user]);

  return (
    <div className="md:flex relative min-h-screen">
      {loading ? (
        <SmallSpinner />
      ) : (
        <>
          {" "}
          <Sidebar role={role}></Sidebar>
          <div className="flex-1 md:ml-64">
            <div className="p-5">
              <Outlet></Outlet>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
