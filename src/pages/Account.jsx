import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import AuthContext from "../context/AuthContext";
import Login from "../components/Login";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { axiosGet } from "../helpers/axiosInstance";
import { Link } from "react-router-dom";

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
          <Divider className="mb-10">
            <Title>Mi cuenta</Title>
            <p className="mb-1 text-lg text-center sm:text-2xl">
              !Bienvenido, {state.user.name}!
            </p>
            <Button text="Cerrar sesión" onClick={logoutHandler} />
          </Divider>
          <MainContainer>
            <Divider>
              <Link to="/newproduct">
                <Title2>Mis compras:</Title2>
              </Link>
              <p>No tienes compras</p>
            </Divider>
            <Divider>
              <Title2>Dirección de envío:</Title2>
              <p>Calle y número: </p>
              <p>Colonia: </p>
              <p>CP: </p>
              <p>Ciudad: </p>
              <p>Estado: </p>
              <Button text="Editar dirección" />
            </Divider>
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
const Title = tw.h1`
text-center
text-xl
md:text-3xl
font-semibold
`;
const MainContainer = tw.main`
md:text-lg
flex
flex-col
md:flex-row
md:justify-evenly
items-center
gap-10
content-center
`;
const Title2 = tw.h3`
font-semibold
text-xl
md:text-2xl`;

const Divider = tw.div`
flex
flex-col
gap-1
`;

export default Account;
