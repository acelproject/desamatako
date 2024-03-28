import React from "react";

type InputProps = {
  labelName: string;
  htmlFor: string;
  type: string;
  id: string;
  placeholder: string;
  name:string;
};

const InputPopUpBox = ({
  labelName,
  name,
  htmlFor,
  type,
  id,
  placeholder,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-semibold">
        {labelName}
      </label>
      <input
      name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
      />
    </div>
  );
};

export default InputPopUpBox;
