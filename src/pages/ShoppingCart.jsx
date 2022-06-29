import React from "react";
import NavBar from "../components/NavBar";
import tw from "twin.macro";
import ProductInCart, { Header } from "../components/ProductInCart";
import Button from "../components/Button";
import SmallButton from "../components/SmallButton";

const ShoppingCart = () => {
  return (
    <>
      <NavBar />
      <MainContainer>
        <ItemsContainer>
          <>
            <div className="flex flex-row content-center justify-between">
              <Title>Carrito de compras</Title>
              <h2 className="text-2xl font-semibold ">1 Items</h2>
            </div>
            <Divider className="border-blue-400" />
          </>
          <Header />
          <ProductInCart />
        </ItemsContainer>

        <OrderSummary>
          <h2 className="text-2xl">Resumen</h2>
          <Divider className="border-blue-100" />
          <h3>Items: 3</h3>
          <h3>$100</h3>
          <h2 className="text-xl">Código de descuento</h2>
          <CouponCode placeholder="Ingresa tu código " />
          <SmallButton text="Aplicar" />
          <Divider className="border-blue-100" />
          <h3>Total</h3>
          <h3>$100</h3>
          <Button text="Checkout" />
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
rounded-l-lg
`;

const OrderSummary = tw.section`
rounded-r-lg
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
text-base
`;

export default ShoppingCart;
