import { useContext } from "react";
import CartContext from "../context/CartContext";
import Button from "../components/Button";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
const CheckoutForm = () => {
  const { cartDispatch } = useContext(CartContext),
    navigate = useNavigate(),
    stripe = useStripe(),
    elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    console.log(res);
    if (res.paymentIntent.status === "succeeded") {
      alert("Pago aplicado exitosamente");
      cartDispatch({ type: "CLEAR" });
      navigate("/");
    }
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <div className="flex content-center mt-5">
            <Button text="Pagar" />
          </div>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = tw.section`
w-auto
bg-blue-50
h-1/2
p-10
text-base
rounded-lg
`;

export default CheckoutForm;
