import React from "react";
import tw from "twin.macro";

const ErrorBox = ({ errorText }) => {
  return <ErrorBoxContainer>{errorText}</ErrorBoxContainer>;
};

const ErrorBoxContainer = tw.div`
p-4
md:text-2xl
bg-red-500
text-white
font-semibold
`;

export default ErrorBox;
