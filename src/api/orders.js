import axios from "axios";

export const getOrderbyEmail = async (email) => {
  const url = `https://autohaus-ashiqur-russel.vercel.app/bookings?email=${email}`;
  try {
    const response = await axios.get(url);
    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
};
