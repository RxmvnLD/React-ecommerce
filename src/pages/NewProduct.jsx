import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Input from "../components/Input";
import Button from "../components/Button";
import tw from "twin.macro";
import ErrorBox from "../components/ErrorBox";
import { axiosPost } from "../helpers/axiosInstance";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();
  const [createError, setCreateError] = useState({
    errors: false,
    errorsList: [],
  });

  const createProduct = async (event) => {
    event.preventDefault();
    const { name, description, price, stock, mainPhoto, photo2, photo3 } =
      event.target;
    const product = {
      name: name.value,
      description: description.value,
      price: price.value,
      stock: stock.value,
      images: [mainPhoto.value, photo2.value, photo3.value],
    };
    console.log(product.mainPhoto);
    try {
      const res = await axiosPost("/products", product);
      if (res) {
        alert("Producto creado exitosamente");
        navigate("/");
      }
      console.log(res);
    } catch (error) {
      setCreateError({ errors: true, errorsList: error.data.errors });
    }
  };

  return (
    <>
      <NavBar />
      <MainContainer>
        <Title>Crear producto</Title>
        <FormContainer onSubmit={createProduct}>
          <Input
            name="name"
            type="text"
            required
            inputPlaceholder="Nombre del producto"
          />
          <Description
            placeholder="Descripción del producto"
            name="description"
          />

          <Input
            name="price"
            type="number"
            inputPlaceholder="Precio"
            required
          />
          <Input name="stock" type="number" inputPlaceholder="Stock" required />
          <Input
            name="mainPhoto"
            type="text"
            inputPlaceholder="Enlace de foto de portada"
            required
          />
          <Input
            name="photo2"
            type="text"
            inputPlaceholder="Enlace de foto 2"
            value=" "
          />
          <Input
            name="photo3"
            type="text"
            value=" "
            inputPlaceholder="Enlace de foto 3"
          />
          <Button text="Crear" />
          {createError.errors &&
            createError.errorsList.map((error) => (
              <ErrorBox errorText={error} />
            ))}
        </FormContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = tw.main`
mt-40
md:mt-44
md:text-xl
flex
flex-col
items-center
gap-3
`;

const Title = tw.h1`
text-xl
md:text-3xl
font-semibold
`;

const FormContainer = tw.form`
flex
flex-col
gap-2
items-center
m-2
`;

const Description = tw.textarea`h-20 p-2 text-base border-2 border-blue-500 rounded w-full text-accent bg-secondary caret-blue-900`;

export default NewProduct;
