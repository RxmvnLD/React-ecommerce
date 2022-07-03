import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import tw from "twin.macro";
import { axiosGet } from "../helpers/axiosInstance";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import SmallButton from "../components/SmallButton";

const Home = () => {
  const { sellerID } = useParams();

  const [products, setProducts] = useState([]),
    [loader, setLoader] = useState(true),
    [actualPage, setActualPage] = useState(1);
  const previousPage = () => {
    return actualPage > 1 ? setActualPage(actualPage - 1) : null;
  };

  const nextPage = () => setActualPage(actualPage + 1);
  const getProducts = async () => {
    try {
      const res = await axiosGet(
          `/products/${sellerID}?page=${actualPage}&limit=8`
        ),
        json = await res.data;
      await setProducts(json);
      setLoader(false);
    } catch (error) {}
  };
  //console.log(products);
  useEffect(() => {
    getProducts();
  }, [sellerID, actualPage]);

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
      <div className="flex justify-center my-10">
        <ul className="flex gap-2 list-stile-none">
          <SmallButton text="Página anterior" onClick={previousPage} />
          <SmallButton text="Página siguiente" onClick={nextPage} />
        </ul>
      </div>
    </>
  );
};

const ProductsContainer = tw.main`
grid
grid-cols-2
sm:grid-cols-4`;
export default Home;

/*
electronics@seller.com - 62c0d64c362f97dd892cbf79

sports@seller.com - 62c0de8383904599029d7a69

outdoors@seller.com - 62c0e100eba77cb61693ebc6

test@seller.com - 62ba0d30b96a7de3835aeebb

2   

*/
