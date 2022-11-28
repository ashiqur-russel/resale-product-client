import React, { useState, useEffect, useContext } from "react";
import axios, * as others from "axios";
import { AuthContext } from "../contexts/Authprovider";

const Welcome = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://auto-haus-ashiqur-russel.vercel.app/users?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("sales-token")}`,
          },
        }
      )
      .then((res) => {
        setRole(res.data[0].role);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user?.email]);
  return (
    <div>
      {!loading && role ? (
        <>
          <h1 className="text-3xl text-bold text-center">
            Hello, {user?.displayName}
          </h1>
          <p className="text-center">Welcome to {role} dashboard!</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-bold text-center">
            Hello, {user?.displayName}
          </h1>
          <p className="text-center">Welcome to Buyer's dashboard!</p>
        </>
      )}
    </div>
  );
};

export default Welcome;
