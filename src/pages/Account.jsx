import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import AuthContext from "../context/AuthContext";
import Login from "../components/Login";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { axiosGet } from "../axiosInstance";

const Account = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);
  const logoutHandler = async () => {
    const res = await axiosGet("/auth/logout");
    await console.log(res);
    await alert(res.message);
    await dispatch({
      type: "LOGOUT",
    });
    await navigate("/");
  };

  return (
    <>
      <NavBar />
      {state.success ? (
        <>
          <MainContainer>
            <Title>Mi cuenta</Title>
            <p>!Bienvenido, {state.user.name}!</p>
            <Button text="Cerrar sesión" onClick={logoutHandler} />
          </MainContainer>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};
const MainContainer = tw.main`
mt-10
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

export default Account;
