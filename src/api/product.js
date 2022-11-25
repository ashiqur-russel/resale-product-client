const addProducts = async (porductData) => {
  const url = `http://localhost:8000/products/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(porductData),
  });

  const data = await response.json();
  return data;
};

export const getAllProductsByMail = async (email) => {
  const url = `http://localhost:8000/products?email=${email}`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data;
};
export default addProducts;
