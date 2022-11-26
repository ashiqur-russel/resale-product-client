//Get user role
export const getRole = async (email) => {
  const url = `http://localhost:8000/user/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data?.role;
};

//Get all user
export const getAllUser = async () => {
  const url = `http://localhost:8000/users`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data;
};

//get user by email

export const getUser = async (email) => {
  const url = `http://localhost:8000/user/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data;
};

//Get user role
export const getVerifiedStatus = async (email) => {
  const url = `http://localhost:8000/user/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data?.verified;
};

//Verify Seller

export const verifySeller = async (user) => {
  delete user._id;
  const url = `http://localhost:8000/user/${user?.email}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...user, verified: "verified" }),
  });
  const users = await response.json();

  return users;
};
