export const verificationRequest = async (verificationData) => {
  const url = `http://localhost:8000/user/${verificationData?.email}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(verificationData),
  });

  const data = await response.json();
  return data;
};
