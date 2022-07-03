import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { cartReducer, cartInitialState } from "../reducers/cart.reducer";
import { axiosGet } from "../helpers/axiosInstance";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  const getCart = useCallback(async () => {
    console.log("getCart");
    try {
      const res = await axiosGet("/cart");
      await cartDispatch({
        type: "GET",
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
