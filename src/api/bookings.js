const setBookings = async (bookings) => {
  const url = "http://localhost:8000/bookings";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default setBookings;
