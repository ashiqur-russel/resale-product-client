export const setBookings = async (bookings) => {
  const url = "https://autohaus.vercel.app/bookings";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
    body: JSON.stringify(bookings),
  });

  const data = await response.json();
  return data;
};

export const saveBooking = async (bookingData) => {
  const url = "https://autohaus.vercel.app/bookings";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("sales-token")}`,
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();
  return data;
};

export const getAllBookingsByEmail = async (email) => {
  const url = `https://autohaus.vercel.app/bookings?email=${email}`;

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
