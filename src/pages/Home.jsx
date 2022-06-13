import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import tw from "twin.macro";

const Home = () => {
  const { state } = useContext(AuthContext);
  console.log("logged in: ", state);
  return (
    <>
      <NavBar />
      <ProductsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsContainer>
    </>
  );
};

const ProductsContainer = tw.main`
grid
grid-cols-2
sm:grid-cols-4`;
export default Home;
