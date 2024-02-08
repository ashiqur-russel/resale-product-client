const addProducts = async (porductData) => {
  const url = `${process.env.REACT_APP_API_LOCAL_url}/products/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
    body: JSON.stringify(porductData),
  });

  const data = await response.json();
  return data;
};

export const getAllProductsByMail = async (email) => {
  const url = `${process.env.REACT_APP_API_LOCAL_url}/products?email=${email}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
};
export default addProducts;

//update product

export const updateDisplayAdvertise = async (data) => {
  const url = `${process.env.REACT_APP_API_LOCAL_url}/publish/${data?._id}`;
  delete data?._id;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",

      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
    body: JSON.stringify({ data }),
  });
  const users = await response.json();

  return users;
};

//delete product

export const deleteProduct = async (id) => {
  const url = `${process.env.REACT_APP_API_LOCAL_url}/product/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",

      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
  });
  const data = await response.json();

  return data;
};
