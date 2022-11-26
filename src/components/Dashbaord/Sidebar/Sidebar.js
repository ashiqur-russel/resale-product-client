import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import blueTick from "../../../assets/brand/1271380.png";

import SellerMenu from "./SellerMenu";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/Authprovider";
import AdminMenu from "./AdminMenu";
import UserMenu from "./UserMenu";
import toast from "react-hot-toast";
import { verificationRequest } from "../../../api/verificationRequest";
const Sidebar = ({ loading }) => {
  const { user, logout } = useContext(AuthContext);
  const [isActive, setActive] = useState("false");
  const navigate = useNavigate();

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/user/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  //Logout

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("Log out from dashboard!");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitVerification = (event) => {
    event.preventDefault();
    const email = user?.email;
    const verified = "requested";
    const data = {
      email,
      verified,
    };
    console.log(data);
    verificationRequest(data)
      .then((data) => {
        refetch();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">Auto Haus</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <h2 className="text-3xl cursor-pointer font-semibold text-center text-gray-800 ">
              <Link to="/"> Auto Haus</Link>
            </h2>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link>
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link>
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>

              <span className="hover:cursor-pointer m-5">
                {userData ? (
                  <>
                    <>
                      {userData && userData?.verified === "" && (
                        <span
                          className="bg-rose-300 p-3 mt-1 mb-1 rounded-lg"
                          onClick={handleSubmitVerification}
                        >
                          Verify Account
                        </span>
                      )}

                      {userData?.verified === "requested" && (
                        <span className="bg-orange-300 p-1 mt-1 mb-1">
                          Veirification Pending
                        </span>
                      )}
                      {userData?.verified === "verified" && (
                        <img className="w-5 h-5" src={blueTick} alt="" />
                      )}
                    </>
                  </>
                ) : (
                  <span />
                )}
              </span>
              <button
                onClick={handleLogOut}
                className="bg-red-500 text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {userData?.role ? (
                <>
                  {" "}
                  {userData?.role === "admin" && <AdminMenu />}
                  {userData?.role === "seller" && <SellerMenu />}
                  {userData?.role === "buyer" && <UserMenu />}
                </>
              ) : (
                <UserMenu></UserMenu>
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
