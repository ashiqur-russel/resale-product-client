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
