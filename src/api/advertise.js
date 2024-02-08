export const addAdvertise = async (publishData) => {
  const url = `${process.env.REACT_APP_API_LOCAL_url}/publish`;

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
  const url = `${process.env.REACT_APP_API_LOCAL_url}/addvertise`;
  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data;
};
