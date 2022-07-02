import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import tw from "twin.macro";
import ProductInCart, { Header } from "../components/ProductInCart";
import Button from "../components/Button";
import SmallButton from "../components/SmallButton";
import { MdKeyboardBackspace } from "react-icons/md";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import { axiosGet } from "../helpers/axiosInstance";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useContext(CartContext);
  const handleClientSecret = async () => {
    try {
      const res = await axiosGet("/cart/pay");
      res.success
        ? cartDispatch({
            type: "PAY",
            payload: res.clientSecret,
          })
        : alert("Error interno, no puede haber elementos con cantidad 0");
      navigate("/shoppingcart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <MainContainer>
        <ItemsContainer>
          <>
            <HorizontalSection>
              <Title>Carrito de compras</Title>
              <h2 className="text-2xl font-semibold ">
                {cartState.cart.length} Items
              </h2>
            </HorizontalSection>
            <Divider className="border-blue-400" />
          </>
          <Header />
          {cartState.cart.map((el, index) => (
            <ProductInCart
              key={el._id + index}
              id={el._id}
              img={el.images[0]}
              name={el.name}
              initialQuantity={el.amount}
              price={el.price}
            />
          ))}
          <Link to="/">
            <div className="flex flex-row items-center gap-2 m-auto font-bold text-blue-600">
              <MdKeyboardBackspace />
              <h2>Seguir comprando </h2>
            </div>
          </Link>
        </ItemsContainer>

        <OrderSummary>
          <h2 className="text-2xl">Resumen</h2>
          <Divider className="border-blue-100" />

          <HorizontalSection>
            <h3>Items: {cartState.cart.length}</h3>
            <h3>${cartState.total.toFixed(2)}</h3>
          </HorizontalSection>

          <h2 className="mt-10 mb-4 text-xl">Código de descuento</h2>
          <HorizontalSection>
            <CouponCode placeholder="Ingresa tu código " />
            <SmallButton text="Aplicar" />
          </HorizontalSection>
          <Divider className="border-blue-100" />
          <HorizontalSection>
            <h3>Total</h3>
            <h3>${cartState.total.toFixed(2)}</h3>
          </HorizontalSection>

          <Link to="/checkout">
            <div className="flex content-center">
              <Button text="Checkout" onClick={handleClientSecret} />
            </div>
          </Link>
        </OrderSummary>
      </MainContainer>
    </>
  );
};

const MainContainer = tw.main`
text-xl
flex
flex-row
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

const ItemsContainer = tw.section`
w-3/4
bg-blue-50
h-1/2
p-10
text-base
rounded-lg
`;

const OrderSummary = tw.section`
rounded-lg
w-1/4
h-full
bg-blue-300
p-10
text-lg
font-bold
`;

const Divider = tw.hr`
my-5
border-2`;

const CouponCode = tw.input`
text-black
rounded
bg-secondary
border-2
border-blue-500
p-0.5
caret-blue-900
text-sm
h-full
py-1
px-2
w-full
mr-2
`;

const HorizontalSection = tw.div`
flex
flex-row
items-center
justify-between
`;
export default ShoppingCart;
