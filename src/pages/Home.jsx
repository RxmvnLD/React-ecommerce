import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import tw from "twin.macro";
import { axiosGet } from "../helpers/axiosInstance";

const Home = () => {
  const { state } = useContext(AuthContext);
  //console.log("logged in: ", state);
  const [products, setProducts] = useState([]),
    [loader, setLoader] = useState(true);

  const getProducts = async () => {
    try {
      //const res = await axiosGet("/products/62ba0d30b96a7de3835aeebb"),
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
        loader && <h1>loader</h1>
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
    </>
  );
};

const ProductsContainer = tw.main`
grid
grid-cols-2
sm:grid-cols-4`;
export default Home;
