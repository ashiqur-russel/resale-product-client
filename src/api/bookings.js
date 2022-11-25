export const setBookings = async (bookings) => {
  const url = "http://localhost:8000/bookings";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookings),
  });

  const data = await response.json();
  return data;
};

export const saveBooking = async (bookingData) => {
  const url = "http://localhost:8000/bookings";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();
  return data;
};

export const getAllBookingsByEmail = async (email) => {
  const url = `http://localhost:8000/bookings?email=${email}`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  return data;
};
