import React from "react";
import tw from "twin.macro";
import image from "../assets/product.jpg";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="flex flex-row content-center justify-between my-4">
      <h2 className="font-bold">DETALLES DEL PRODUCTO</h2>
      <h2 className="pl-12 font-bold">CANTIDAD</h2>
      <h2 className="font-bold ">PRECIO</h2>
      <h2 className="font-bold">TOTAL</h2>
    </div>
  );
};

const ProductInCart = () => {
  return (
    <ItemCard>
      <ProductDetails>
        <ProductImage src={image} />
        <div className="flex flex-col justify-between">
          <h2 className="font-bold">Camara</h2>
          <p>Marca: Unknown</p>
          <h2>
            <u className="font-semibold text-red-400 cursor-pointer">
              Eliminar del carrito
            </u>
          </h2>
        </div>
      </ProductDetails>
      <ProductQuantity>
        <AiFillMinusSquare className="mx-2 text-xl cursor-pointer" />
        <p>1</p>
        <AiFillPlusSquare className="mx-2 text-xl cursor-pointer" />
      </ProductQuantity>
      <div>
        <h2>$1000</h2>
      </div>
      <div>
        <h2>$1000</h2>
      </div>
    </ItemCard>
  );
};

const ItemCard = tw.div`
flex
flex-row
justify-between
items-center
m-auto
`;
const ProductImage = tw.img`
scale-50
max-w-sm
max-h-24
rounded-lg
`;

const ProductDetails = tw.div`
flex
flex-row
gap-2
`;
const ProductQuantity = tw.div`
flex
flex-row
items-center
`;

export default ProductInCart;
