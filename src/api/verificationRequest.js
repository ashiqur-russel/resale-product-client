export const verificationRequest = async (verificationData) => {
  const url = `${process.env.REACT_APP_API_LOCAL_url}/user/${verificationData?.email}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
    body: JSON.stringify(verificationData),
  });

  const data = await response.json();
  return data;
};
