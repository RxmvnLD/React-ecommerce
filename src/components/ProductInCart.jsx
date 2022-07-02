import React, { useState, useContext, useEffect } from "react";
import tw from "twin.macro";
import CartContext from "../context/CartContext";
import { axiosDel, axiosPut } from "../helpers/axiosInstance";
import SmallButton from "../components/SmallButton";

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

const ProductInCart = ({ id, img, name, initialQuantity, price }) => {
  const [quantity, setQuantity] = useState(initialQuantity),
    [disabledState, setDisabledState] = useState(false);
  const { cartDispatch, getCart } = useContext(CartContext);

  const changeQuantity = async () => {
    try {
      await axiosPut("/cart/changeAmount", {
        idProduct: id,
        amount: quantity,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    changeQuantity();
    getCart();
    quantity === 0 ? setDisabledState(true) : setDisabledState(false);
  }, [quantity, changeQuantity]);

  const deleteFromCart = async () => {
    const body = {
      idProduct: id,
    };
    try {
      console.log(body);
      const res = await axiosDel("/cart/remove", body);
      await console.log(res);
      await cartDispatch({ type: "REMOVE", payload: res });
      await getCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ItemCard>
      <ProductDetails>
        <div className="w-20">
          <ProductImage src={img} />
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="font-bold">{name}</h2>
          <p>Marca: Unknown</p>
          <h2>
            <u
              className="font-semibold text-red-400 cursor-pointer"
              onClick={deleteFromCart}
            >
              Eliminar del carrito
            </u>
          </h2>
        </div>
      </ProductDetails>
      <ProductQuantity>
        <div className="flex items-center gap-2">
          <SmallButton
            text="-"
            disabled={disabledState}
            onClick={() => {
              setQuantity(quantity - 1);
            }}
          />

          <p>{quantity}</p>
          <SmallButton
            text="+"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          />
        </div>
      </ProductQuantity>
      <div>
        <h2>{price}</h2>
      </div>
      <div>
        <h2>{price * quantity}</h2>
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
my-10
`;
const ProductImage = tw.img`
scale-50
max-w-full
max-h-full
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
