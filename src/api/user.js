//Get user role
export const getRole = async (email) => {
  const url = `http://localhost:8000/user/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data?.role;
};

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
