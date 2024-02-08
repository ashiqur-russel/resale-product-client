import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/Authprovider";
import setAuthToken from "../../../api/auth";
import setAuthTokenSocial from "../../../api/socialAuth";
const Signup = () => {
  const {
    user,
    logout,
    createUser,
    updateUserProfile,
    loading,
    setLoading,
    signInWithGoogle,
  } = useContext(AuthContext);
  const [currentRole, setCurrentRole] = useState("buyer");
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();

  const changeRole = (newRole) => {
    setCurrentRole(newRole);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.files[0];
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = currentRole;

    let verified = "";
    if (currentRole === "seller") {
      verified = "";
    } else if (currentRole === "buyer") {
      verified = "NN";
    }

    //create user
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=6f859024bd2f6172a80f12db0b47c603`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((photoData) => {
        createUser(email, password)
          .then((res) => {
            setSignUPError("");

            toast("User Created Successfully!");
            const userInfo = {
              displayName: name,
              photoURL: photoData.data.display_url,
            };
            updateUserProfile(userInfo)
              .then(() => {
                console.log("Update user infor", userInfo);
                saveUser(email, role, verified);
              })
              .catch((err) => setSignUPError(err));
          })
          .catch((err) => {
            setSignUPError(err);
          });
        setSignUPError("");
      })
      .catch((err) => setSignUPError(err));

    const saveUser = (user, role, verified) => {
      const currentUser = {
        email: user.email || user,
        role: role,
        verified: verified,
      };

      //   Save user in db & get token
      fetch(`${process.env.REACT_APP_API_LOCAL_url}/user/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("sales-token")}`,
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(" inside save user");
          logout().then(() => {
            console.log(" inside logoit save user");

            navigate("/login");
          });
          //Save token in LocalStorage
          localStorage.setItem("resale-token", data.token);
        });
    };

    /* const url = `https://api.imgbb.com/1/upload?key=6f859024bd2f6172a80f12db0b47c603`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        createUser(email, password)
          .then((result) => {
            setAuthToken(email, role);
            console.log(result);
            console.log(data.data.display_url);
            console.log(name);
            updateUserProfile(name, data.data.display_url)
              .then((res) => {
                console.log(res);
                console.log("profile update");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  }; */
  };
  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);
        const user = res.user;
        const userEmail = user?.email;
        const role = currentRole;
        console.log(userEmail);

        toast.success("Logged in with google account");
        setAuthTokenSocial(userEmail, role);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Signup</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="role" className="text-sm">
                  Are you buyer or Seller? Please Select
                </label>
              </div>
              <select
                onChange={(event) => changeRole(event.target.value)}
                id="role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100 bg-red-300"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
        {/*  <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div> */}
        {/* <div className="flex justify-center space-x-4">
          <button
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
            onClick={handleGoogleSignin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div> */}
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
