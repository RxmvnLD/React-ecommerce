import React from "react";
import tw from "twin.macro";

const Button = ({ onClick, text }) => {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
};

const CustomButton = tw.button`
bg-blue-600
text-white
hover:bg-white
hover:text-blue-600
border-2
border-blue-600
transition-all
duration-200
hover:ease-out
font-bold
py-2
px-4
`;

export default Button;
