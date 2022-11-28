const setAuthTokenSocial = (user, uid) => {
  const currentUser = {
    email: user.email || user,
    role: "buyer",
    uid: user?.uid || uid,
  };

  //   Save user in db & get token
  fetch(`http://localhost:8000/user/${user?.email}`, {
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
export default setAuthTokenSocial;
