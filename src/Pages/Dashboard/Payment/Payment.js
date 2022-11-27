import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import { useLoaderData } from "react-router-dom";
import Checkout from "../../Checkout/Checkout";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();
  const {
    buyerName,
    productName,
    bookingDate,
    productId,
    buyerEmail,
    price,
    isBooked,
  } = data;
  return (
    <div>
      <h1 className="text-center text-bold text-2xl">
        You have booked {productName} on {bookingDate}.
      </h1>
      <p className="text-center text-bold text-lg">
        Please Pay ${price} and Save Booking Confirmation{" "}
      </p>

      <div className="w-96 my-6 bg-white">
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
