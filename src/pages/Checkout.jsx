import React, { useContext, useEffect } from "react";
import tw from "twin.macro";
import CartContext from "../context/CartContext";
import { stripePK } from "../config";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useNavigate } from "react-router-dom";

const stripe = loadStripe(stripePK);

const Checkout = () => {
  const navigate = useNavigate();
  const { cartState } = useContext(CartContext);
  const clientSecret = cartState.secret;

  useEffect(() => {
    if (clientSecret === "") {
      navigate("/shoppingcart");
    }
  }, [clientSecret]);

  return (
    <>
      {clientSecret && (
        <Elements options={{ clientSecret }} stripe={stripe}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Checkout;
