import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/Authprovider";

const Error = () => {
  const { logout } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <p className="text-center text-bold text-3xl text-red-700">
        Something is Wrong !!!
      </p>
      <p className="text-center text-bold text-3xl text-red-700">
        {error.statusText || error.message}
      </p>
      <p className="text-center text-bold text-1xl">
        Please Sign Out and Log Bav Back In!!!
      </p>
      <p className="text-center text-bold text-1xl">
        <button onClick={handleLogout} className="btn btn-secondary">
          Sign Out
        </button>
      </p>
    </div>
  );
};

export default Error;
