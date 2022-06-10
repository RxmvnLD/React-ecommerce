import React, { useContext, useState } from "react";
import { axiosPost } from "../axiosInstance";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
import ErrorBox from "./ErrorBox";

const Login = () => {
  const [loginError, setLoginError] = useState({
    errors: false,
    errorsList: [],
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const login = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    try {
      const res = await axiosPost("/auth/login", {
        email: email.value,
        password: password.value,
      });
      await dispatch({
        type: "LOGGED_IN",
        payload: res,
      });
      /* tzuzulcode@gmail.com  */
      await navigate("/");
    } catch (error) {
      setLoginError({
        errors: true,
        errorsList: error.data.errors,
      });
    }
  };
  return (
    <>
      <MainContainer>
        <Title>INGRESA A TU CUENTA</Title>
        <p>Por favor ingresa tu e-mail y contraseña </p>
        <FormContainer onSubmit={login}>
          <Input name="email" type="email" inputPlaceholder="Email" />
          <Input
            name="password"
            type="password"
            inputPlaceholder="Contraseña"
          />
          <Button text="Iniciar sesión" />
          {loginError.errors &&
            loginError.errorsList.map((error) => (
              <ErrorBox errorText={error} />
            ))}
        </FormContainer>
        <p>
          ¿No tienes una cuenta?{" "}
          <Link
            to="/register"
            className="hover:font-bold hover:text-blue-700 hover:text-xl"
          >
            Crear una cuenta
          </Link>
        </p>
      </MainContainer>
    </>
  );
};

const MainContainer = tw.main`
mt-40
md:mt-56
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

export default Login;
