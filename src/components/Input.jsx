import React from "react";
import tw from "twin.macro";

const Input = ({ type, name, inputPlaceholder, required }) => {
  return (
    <CustomInput
      type={type}
      required={required}
      name={name}
      placeholder={inputPlaceholder}
    />
  );
};

const CustomInput = tw.input`
text-accent
rounded
bg-secondary
border-2
border-blue-500
p-2
caret-blue-900
`;

export default Input;
