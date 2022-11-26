export const addAdvertise = async (publishData) => {
  const url = `http://localhost:8000/publish`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(publishData),
  });

  const data = await response.json();
  return data;
};

export const getAddvertisedProduct = async () => {
  const url = `http://localhost:8000/addvertise`;
  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data;
};
