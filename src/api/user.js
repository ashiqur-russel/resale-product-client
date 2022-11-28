//Get user role
export const getRole = async (email) => {
  const url = `https://auto-haus-ashiqur-russel.vercel.app/user/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data?.role;
};

//Get all user
export const getAllUser = async () => {
  const url = `https://auto-haus-ashiqur-russel.vercel.app/users`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
};

//get user by email
export const getUser = async (email) => {
  const url = `https://auto-haus-ashiqur-russel.vercel.app/user/${email}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
};

//Get user role
export const getVerifiedStatus = async (email) => {
  const url = `https://auto-haus-ashiqur-russel.vercel.app/user/${email}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
  });

  const data = await response.json();
  console.log(data);
  return data?.verified;
};

//Verify Seller

export const verifySeller = async (user) => {
  delete user._id;
  const url = `https://auto-haus-ashiqur-russel.vercel.app/user/${user?.email}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
    body: JSON.stringify({ ...user, verified: "verified" }),
  });
  const users = await response.json();

  return users;
};

//delete user
export const deleteUserByEmail = async (email) => {
  const url = `https://auto-haus-ashiqur-russel.vercel.app/user?email=${email}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
  });
  const data = await response.json();

  return data;
};
