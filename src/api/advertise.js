export const addAdvertise = async (publishData) => {
  const url = `https://auto-haus-ashiqur-russel.vercel.app/publish`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
    body: JSON.stringify(publishData),
  });

  const data = await response.json();
  return data;
};

export const getAddvertisedProduct = async () => {
  const url = `https://auto-haus-ashiqur-russel.vercel.app/addvertise`;
  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data;
};
