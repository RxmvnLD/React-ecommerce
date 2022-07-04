import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
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
  console.log(cartState);
  const clientSecret = cartState.secret;

  useEffect(() => {
    if (clientSecret === "") {
      navigate("/shoppingcart");
    }
  }, []);

  return (
    <>
      <NavBar />
      <MainContainer>
        <Title>Checkout</Title>

        {clientSecret && (
          <Elements options={{ clientSecret }} stripe={stripe}>
            <CheckoutForm />
          </Elements>
        )}
      </MainContainer>
    </>
  );
};

const MainContainer = tw.main`
text-xl
flex
flex-col
items-center
mx-64
h-full
gap-5
`;

const Title = tw.h2`
text-left
text-3xl
font-semibold
`;

export default Checkout;
