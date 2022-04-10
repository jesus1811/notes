import React from "react";
interface Props {
  type: string;
  placeholder: string;
  onChange: any;
  value: any;
}

const InputField = ({ type, placeholder, onChange, value }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="text-xl outline-none 
  bg-transparent border-b-4
  border-gray-800 text-gray-800"
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
