import React, { useContext } from "react";
import tw from "twin.macro";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/NavBar";

const Home = () => {
  const { state } = useContext(AuthContext);
  console.log("logged in: ", state);
  return (
    <>
      <NavBar />
      <CustomH1>Home</CustomH1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        exercitationem quam provident, commodi tenetur eos tempora possimus
        corrupti. Natus asperiores perferendis unde sed minima velit distinctio
        quaerat at! Libero, veritatis? Quae sequi ratione optio magni ipsum
        eligendi! Maxime neque voluptate commodi doloribus cupiditate explicabo,
        saepe nesciunt temporibus cumque harum vero dolor, consequuntur adipisci
        illo voluptatibus sint repellendus mollitia et repellat. Sed consequatur
        aut adipisci inventore animi assumenda quasi incidunt dolores dolorum
        obcaecati dolore, placeat rem natus dolor repellendus fuga neque
        quibusdam alias error est doloribus. Ipsam illum sunt repudiandae fuga!
        Error tenetur eligendi at vero, officia nesciunt aspernatur eveniet ea!
        Aperiam quos necessitatibus suscipit, nihil dolore illo iure corporis
        nobis nemo esse! Consequatur, minima id officia necessitatibus ab porro
        repudiandae! Tenetur optio dolore officia. Quaerat laudantium qui
        aliquam numquam a in quo eius necessitatibus illum, autem, neque, sunt
        quam provident cupiditate quisquam ad blanditiis natus nam magni
        placeat. Minus, perspiciatis. Nemo magni commodi neque error, eveniet
        cumque rem est ipsa fuga id iste vitae facere omnis quidem? Dolorum, in
        modi molestias aspernatur odio, cupiditate voluptatibus, illum optio sed
        nemo iusto! Fuga vel eum aspernatur, quis dolorem eius quidem labore
        inventore voluptatem ea consequuntur tempora veritatis quibusdam
        repellat, rem exercitationem dolorum id ratione! Quibusdam delectus
        laboriosam sunt ipsa velit non ea? Tempore, iste laudantium reiciendis
        est ad, assumenda itaque earum in numquam vitae ipsum maiores! Quae iste
        incidunt inventore vitae impedit voluptates accusantium nobis minus
        blanditiis voluptatum.
      </p>
    </>
  );
};

const CustomH1 = tw.h1`
`;

export default Home;
