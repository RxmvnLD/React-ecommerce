import React from "react";
import tw from "twin.macro";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";

const Product = () => {
  return (
    <>
      <ProductContainer>
        <ProductImage></ProductImage>
        <ProductTitle></ProductTitle>
        <ProductPrice></ProductPrice>
        <ProductDescription></ProductDescription>
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

`;

const ProductImage = tw.img``;

const ProductTitle = tw.h1``;
const ProductPrice = tw.h2``;
const ProductDescription = tw.p``;

export default Product;
