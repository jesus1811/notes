import React from "react";
interface Props {
  onChange: any;
  children: any;
  defaultValue?: any;
}
const SelectField = ({ onChange, children, defaultValue }: Props) => {
  return (
    <select
      className="text-xl outline-none 
    bg-transparent border-b-2 
    border-gray-800 text-gray-800 w-full"
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  );
};

export default SelectField;
