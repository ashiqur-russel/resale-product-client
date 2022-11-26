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

//update product

export const updateDisplayAdvertise = async (data) => {
  const url = `http://localhost:8000/publish/${data?._id}`;
  delete data?._id;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...data, advertised: "yes" }),
  });
  const users = await response.json();

  return users;
};
