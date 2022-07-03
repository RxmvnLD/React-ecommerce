import React, { useState } from "react";
import tw from "twin.macro";
import { FaShoppingCart, FaBars, FaUserAlt } from "react-icons/fa";
import { SiReacttable } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Electronicos", link: "/categories/62c0d64c362f97dd892cbf79" },
    { name: "Hogar", link: "/categories/62ba13090a98147777f380c2" },
    { name: "Deportes", link: "/categories/62c0de8383904599029d7a69" },
    { name: "Jardín", link: "/categories/62c0e100eba77cb61693ebc6" },
    { name: "Fotografía", link: "/categories/62ba0d30b96a7de3835aeebb" },
  ];

  return (
    <>
      <TopHeader>
        <NavContainer>
          <TopContainer>
            <Menu
              onClick={() => {
                setOpen(!open);
              }}
              className="pb-10"
            >
              {open ? (
                <IoMdClose className="-my-1 text-lg sm:text-3xl lg:text-4xl" />
              ) : (
                <FaBars className="-my-1 text-lg sm:text-3xl lg:text-4xl" />
              )}
            </Menu>
            <SiReacttable className="text-lg sm:text-3xl lg:text-4xl" />
            <Link to="/">
              <h1>React eCommerce</h1>
            </Link>
            <Link
              to="/shoppingcart"
              className="fixed text-lg right-3 sm:right-14 sm:text-3xl lg:text-4xl"
            >
              <FaShoppingCart />
            </Link>
            <Link
              to="/account"
              className="fixed text-lg right-10 sm:right-28 sm:text-2xl lg:text-3xl"
            >
              <FaUserAlt />
            </Link>
          </TopContainer>
          <CategoriesList className={`${open ? "top-10" : "top-[-500px]"}`}>
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="my-6 ml-5 text-xl md:my-0 hover:font-medium"
                >
                  <Link to={link.link}>{link.name}</Link>
                </li>
              );
            })}
          </CategoriesList>
        </NavContainer>
      </TopHeader>
      <div className="mb-10 bg-blue-500 h-14 sm:h-24"></div>
    </>
  );
};

const TopHeader = tw.header`
w-full
fixed
top-0
left-0
bg-blue-500
text-white
`;

const NavContainer = tw.nav`
md:flex
md:flex-col
py-4
items-center
`;

const TopContainer = tw.div`
flex
items-center
text-xl
font-bold
text-secondary
place-content-center
gap-2
sm:gap-5
sm:text-3xl
lg:text-4xl
`;

const Menu = tw.div`
absolute
text-3xl
transition-all
duration-500
ease-in
cursor-pointer
left-2
top-6
md:hidden
`;

const CategoriesList = tw.ul`
md:flex
bg-blue-500
md:items-center
md:pb-0
pb-12
absolute
md:static
md:z-auto
z-[-1]
left-0 w-3/5
md:w-auto
md:pl-0
pl-0
transition-all
duration-300
ease-in 
`;

export default NavBar;
