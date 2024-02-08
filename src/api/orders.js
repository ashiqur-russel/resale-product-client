import axios from "axios";

export const getOrderbyEmail = async (email) => {
  const url = `${process.env.REACT_APP_API_LOCAL_url}/bookings?email=${email}`;
  try {
    const response = await axios.get(url);
    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
};
