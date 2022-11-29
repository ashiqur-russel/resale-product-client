export const verificationRequest = async (verificationData) => {
  const url = `https://autohaus.vercel.app/user/${verificationData?.email}`;

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
