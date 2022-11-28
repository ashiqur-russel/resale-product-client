import React, { useContext, useState } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/Authprovider";
import { saveBooking } from "../../../api/bookings";
import { useNavigate } from "react-router-dom";
const BookingModal = ({ name, _id, resalePrice, picture, title }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  console.log(name, _id, resalePrice, picture, title);

  const todaysDate = new Date();
  const date = format(todaysDate, "PP");
  const navigate = useNavigate();
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const price = form.resalePrice.value;
    const title = form.itemName.value;
    const booking = {
      photo: picture,
      bookingDate: date,
      buyerName: buyerName,
      productName: name,
      productId: _id,
      buyerEmail: email,
      buyerPhone: phone,
      price,
      isBooked: "no",
      picture: picture,
      title: title,
    };
    console.log(booking);

    saveBooking(booking)
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          navigate("/dashboard/my-orders");
        } else {
          toast.error("Booking Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            {/*   <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select> */}
            <input
              name="name"
              defaultValue={user?.displayName}
              disabled
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="resalePrice"
              defaultValue={resalePrice}
              disabled
              type="text"
              placeholder="Price"
              className="input w-full input-bordered"
            />
            <input
              name="itemName"
              defaultValue={name}
              disabled
              type="itemName"
              placeholder="Item Name"
              className="input w-full input-bordered"
            />

            <input
              name="location"
              type="text"
              placeholder="Your Meeting Location"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
