import React from "react";
import tw from "twin.macro";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosPost } from "../helpers/axiosInstance";

const ProductCard = ({ name, description, stock, price, image, id }) => {
  const defaultImage =
    "https://thumbs.dreamstime.com/b/corrupted-file-document-outline-icon-corrupted-file-document-outline-icon-linear-style-sign-mobile-concept-web-design-bad-116231507.jpg";

  const addToCart = async () => {
    const body = { idProduct: id, amount: 1 };
    console.log(
      "🚀 ~ file: ProductCard.jsx ~ line 20 ~ addToCart ~ body",
      body
    );
    try {
      const res = await axiosPost("/cart/add", body);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {console.log(id)}
      <ProductContainer>
        <Link
          className="flex flex-col items-center gap-2"
          to={`/product/${id}`}
        >
          <ProductImage src={image || defaultImage} />
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
max-w-sm
max-h-60
rounded-lg
`;

const ProductTitle = tw.h1`
text-xl
font-bold`;
const ProductPrice = tw.h2`
text-lg`;
const ProductDescription = tw.p``;

export default ProductCard;
