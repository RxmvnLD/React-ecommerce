import React from "react";
import NavBar from "../components/NavBar";
import tw from "twin.macro";
import image from "../assets/product.jpg";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <ProductDetailsContainer>
        <ProductImage src={image}></ProductImage>
        <ProductDescription>
          <ProductTitle>Pentax</ProductTitle>
          <>
            <p>{id}</p>
            <p>Cámara análogica</p>
            <p>Cantidad disponible: 3 pzas</p>
          </>
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
        </ProductDescription>
      </ProductDetailsContainer>
    </>
  );
};

const ProductDetailsContainer = tw.main`
flex
flex-col
sm:flex-row
items-center
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

const ProductDescription = tw.p`
text-center`;

export default ProductDetails;
