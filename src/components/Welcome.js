import React, { useState, useEffect, useContext } from "react";
import axios, * as others from "axios";
import { AuthContext } from "../contexts/Authprovider";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://autohaus.vercel.app/users?email=${user?.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("sales-token")}`,
        },
      })
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
          <Link to="/">
            {" "}
            <div class="b animate-pulse mx-auto h-16 w-64 flex justify-center items-center">
              <div class="i h-16 w-64 bg-pink-600 items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
              <p class="text-center text-white font-semibold z-10 pointer-events-none">
                Visit Home
              </p>
            </div>
          </Link>

          <div></div>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-bold text-center">
            Hello, {user?.displayName}
          </h1>
          <p className="text-center">Welcome to Buyer's dashboard!</p>
          <Link to="/">
            {" "}
            <div class="b animate-pulse mx-auto h-16 w-64 flex justify-center items-center">
              <div class="i h-16 w-64 bg-pink-600 items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
              <p class="text-center text-white font-semibold z-10 pointer-events-none">
                Visit Home
              </p>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Welcome;
