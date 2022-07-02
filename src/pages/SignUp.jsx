import React, { useState, useContext } from "react";
import NavBar from "../components/NavBar";
import tw from "twin.macro";
import Button from "../components/Button";
import Input from "../components/Input";
import { axiosPost } from "../helpers/axiosInstance";
import ErrorBox from "../components/ErrorBox";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { baseURL } from "../config";

const url = "/auth/signup";
const SignUp = () => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerErrors, setRegisterErrors] = useState({
    errors: false,
    errorsList: [],
  });
  const registerHandler = async (event) => {
    event.preventDefault();
    const { email, password, name } = event.target;
    try {
      const res = await axiosPost(url, {
        email: email.value,
        password: password.value,
        name: name.value,
      });
      console.log(res);
      if (res.success) {
        alert("Usuario creado correctamente");
        navigate("/");
      }
    } catch (error) {
      setRegisterErrors({
        errors: true,
        errorsList: error.data.errors,
      });
    }
  };
  return (
    <>
      {state.success ? (
        navigate("/")
      ) : (
        <>
          <NavBar />
          <MainContainer>
            <Title>REGÍSTRATE</Title>
            <p>Por favor, ingresa tu información abajo:</p>
            <FormContainer onSubmit={registerHandler}>
              <Input name="name" type="text" inputPlaceholder="Nombre" />
              <Input name="email" type="email" inputPlaceholder="Email" />
              <Input
                name="password"
                type="password"
                inputPlaceholder="Contraseña"
              />
              {registerErrors.errorsList.length !== 0 &&
                registerErrors.errorsList.map((element) => {
                  return <ErrorBox errorText={element.message} />;
                })}
              <Button text="CREAR MI CUENTA" />
            </FormContainer>
            <a href={`${baseURL}/auth/google`}>
              <Button text="Registrate con Google" />
            </a>
            <a href={`${baseURL}/auth/facebook`}>
              <Button text="Registrate con Facebook" />
            </a>
          </MainContainer>
        </>
      )}
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

export default SignUp;
