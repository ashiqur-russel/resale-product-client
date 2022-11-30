const setAuthToken = (user, role, verified) => {
  const currentUser = {
    email: user.email || user,
    role: role,
    verified: verified,
  };

  //   Save user in db & get token
  fetch(`https://autohaus-ashiqur-russel.vercel.app/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //Save token in LocalStorage
      localStorage.setItem("resale-token", data.token);
    });
};
export default setAuthToken;
