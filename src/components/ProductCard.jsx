import React from "react";
import tw from "twin.macro";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";
import image from "../assets/product.jpg";
import { Link, useParams } from "react-router-dom";

const ProductCard = () => {
  const { id } = useParams();
  return (
    <>
      <ProductContainer>
        <Link className="flex flex-col items-center gap-2" to={`/product`}>
          <ProductImage src={image}></ProductImage>
          <ProductTitle>Pentax</ProductTitle>
        </Link>
        <ProductDescription>
          <>
            <p>{id}</p>
            <p>Cámara análogica</p>
            <p>Cantidad disponible: 3 pzas</p>
          </>
        </ProductDescription>
        <ProductPrice>
          <>
            <p>$10'000.00</p>
            <p>Costo de envío: $99.00</p>
          </>
        </ProductPrice>
        <Button
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
p-2
rounded-2xl
hover:
`;

const ProductImage = tw.img`
w-2/3
rounded-lg
`;

const ProductTitle = tw.h1`
text-xl
font-bold`;
const ProductPrice = tw.h2`
text-lg`;
const ProductDescription = tw.p``;

export default ProductCard;
