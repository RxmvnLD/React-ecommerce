import React from "react";
import tw from "twin.macro";

const SmallButton = ({ onClick, text, disabled }) => {
  return (
    <CustomButton onClick={onClick} disabled={disabled}>
      {text}
    </CustomButton>
  );
};

const CustomButton = tw.button`
bg-blue-500
text-white
hover:bg-white
hover:text-blue-600
border-2
border-blue-500
transition-all
duration-200
hover:ease-out
font-semibold
py-1
px-2
m-auto
rounded
text-sm
`;

export default SmallButton;
