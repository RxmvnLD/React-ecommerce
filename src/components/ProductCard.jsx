import React, { useContext } from "react";
import tw from "twin.macro";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosPost } from "../helpers/axiosInstance";
import CartContext from "../context/CartContext";
import { defaultImage } from "../config";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ name, description, stock, price, image, id }) => {
  const { cartDispatch } = useContext(CartContext);
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();
  const addToCart = async () => {
    const body = { idProduct: id, amount: 1 };
    if (state.success) {
      try {
        const res = await axiosPost("/cart/add", body);
        console.log(res);
        if (res) {
          alert("producto agregado al carrito");
          await cartDispatch({ type: "ADD", payload: res });
          //await cartDispatch({ type: "UPDATE_AMOUNT", payload: price });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Por favor inicia sesion para agregar productos al carrito");
      navigate("/account");
    }
  };

  return (
    <>
      <ProductContainer>
        <Link
          className="flex flex-col items-center gap-2"
          to={`/product/${id}`}
        >
          <div className="w-32 h-20 m-auto lg:w-60 md:h-60">
            <ProductImage src={image || defaultImage} />
          </div>
          <ProductTitle>{name}</ProductTitle>
        </Link>
        <ProductDescription>
          <>
            <p>{description}...</p>
            <p>Cantidad disponible: {stock} pzas</p>
          </>
        </ProductDescription>
        <ProductPrice>
          <>
            <p>Precio: ${Intl.NumberFormat("en-US").format(price)}</p>
            <p>Costo de envío: $99.00</p>
          </>
        </ProductPrice>
        <Button
          onClick={addToCart}
          text={
            <p className="flex flex-row items-center gap-2">
              Agregar
              <FaCartPlus />
            </p>
          }
        />
      </ProductContainer>
    </>
  );
};

const ProductContainer = tw.div`
flex
flex-col
items-center
bg-white
w-auto
h-auto
mx-5
my-2
gap-1
p-5
rounded-2xl
`;

const ProductImage = tw.img`
scale-50
max-w-full
max-h-full
rounded-lg
m-auto
`;

const ProductTitle = tw.h1`
text-xl
font-bold`;
const ProductPrice = tw.h2`
text-lg`;
const ProductDescription = tw.p``;

export default ProductCard;
