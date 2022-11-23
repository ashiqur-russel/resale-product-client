const setAuthToken = (user, role) => {
  const currentUser = {
    email: user.email || user,
    role: role,
  };

  //   Save user in db & get token
  fetch(`http://localhost:8000/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //Save token in LocalStorage
      localStorage.setItem("aircnc-token", data.token);
    });
};
export default setAuthToken;

//Get user role
export const getRole = async (email) => {
  const url = `http://localhost:8000/user/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  return data;
};
