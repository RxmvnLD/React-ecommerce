import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import tw from "twin.macro";
import SmallButton from "../components/SmallButton";
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";
import { axiosGet, axiosPost } from "../helpers/axiosInstance";
import { defaultImage } from "../config";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { cartDispatch } = useContext(CartContext);
  const { state } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState({}),
    [loadingImage, setLoadingImage] = useState(true);
  const navigate = useNavigate();
  const getProduct = async () => {
    try {
      const res = await axiosGet(`/products/one/${id}`);
      await setProduct(res);
      if (res.images[0] !== "") {
        setLoadingImage(false);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const addToCart = async (e) => {
    if (state.success) {
      await e.preventDefault();
      const { quantity } = await e.target;
      try {
        const res = await axiosPost("/cart/add", {
          idProduct: product._id,
          amount: quantity.value,
        });
        console.log(res);
        if (res) {
          alert("producto agregado al carrito");
          await cartDispatch({ type: "ADD", payload: res });
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
      <NavBar />
      <MainContainer>
        <ProductCarousel>
          {loadingImage ? (
            <img src={defaultImage} alt="Pic 1" />
          ) : (
            <img src={product.images[0]} alt="Pic 1" />
          )}
        </ProductCarousel>
        <DetailsContainer>
          <DetailsOfProduct>
            <h2 className="font-bold">{product.name}</h2>
            <h3>Precio: ${product.price}</h3>
            <h3>Stock: {product.stock}</h3>
            <form onSubmit={addToCart}>
              <ProductQuantityInput
                type="number"
                name="quantity"
                min="1"
                required
              ></ProductQuantityInput>
              <SmallButton text="Agregar al carrito" />
            </form>
          </DetailsOfProduct>
          <DetailsOfProduct>
            <h2 className="font-bold">Descripción del artículo:</h2>
            <p>{product.description}</p>
          </DetailsOfProduct>
        </DetailsContainer>
        <DetailsContainer>
          <DetailsOfProduct>
            <h2 className="font-bold">Articulos recomendados:</h2>
          </DetailsOfProduct>
        </DetailsContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = tw.main`
text-xl
flex
flex-row
items-center
h-full
gap-1
justify-evenly
`;

const ProductCarousel = tw.section`
w-2/5
bg-blue-50
p-10
text-base
rounded-lg
`;

const DetailsOfProduct = tw.div`
mb-5
rounded-lg
bg-blue-300
p-10
text-lg
font-semibold
max-w-2xl
`;

const DetailsContainer = tw.section`
`;

const ProductQuantityInput = tw.input`
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
w-20
mr-2
`;
export default ProductDetails;
