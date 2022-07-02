import React, { useState, useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import tw from "twin.macro";
import { axiosGet } from "../helpers/axiosInstance";
import CartContext from "../context/CartContext";
import Loader from "../components/Loader";
import { Pagination } from "flowbite-react";

const Home = () => {
  const { cartState } = useContext(CartContext);
  useEffect(() => {
    console.log("Cart", cartState);
  }, [cartState]);

  const [products, setProducts] = useState([]),
    [loader, setLoader] = useState(true);
  const onPageChange = () => {};
  const getProducts = async () => {
    try {
      const res = await axiosGet("/products"),
        json = await res.data;
      await setProducts(json);
      setLoader(false);
    } catch (error) {}
  };
  //console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBar />
      {products.length === 0 ? (
        loader && <Loader />
      ) : (
        <ProductsContainer>
          {products.map((product) => {
            return (
              <ProductCard
                key={product._id}
                name={product.name}
                description={product.description.substring(0, 20)}
                stock={product.stock}
                price={[product.price]}
                image={product.images[0]}
                id={product._id}
              />
            );
          })}
        </ProductsContainer>
      )}
      <div className="items-center justify-center text-center ">
        <Pagination
          currentPage={1}
          totalPages={3}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

const ProductsContainer = tw.main`
grid
grid-cols-2
sm:grid-cols-4`;
export default Home;
