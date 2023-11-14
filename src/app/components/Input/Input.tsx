import React from "react";
interface Props {
  placeholder: string;
}

const Input = ({ placeholder }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="ml-4 mt-4 border border-solid"
    />
  );
};

export default Input;
