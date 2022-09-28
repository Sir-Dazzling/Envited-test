import React from "react";
import { CustomInputFieldProps } from "../../interfaces/general";

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  containerClassName,
  inputClassName,
  errors = [],
  postText,
  ...props
}) => {
  const error = errors.find(
    (error: any) => error?.field === props.name
  )?.message;

  return (
    <div className={containerClassName}>
      <input
        className={`${
          error && "ring-4 ring-red-500 ring-opacity-40"
        } p-4 lg:p-2 outline-none focus:border-red-600 
        focus:outline-none focus:ring-opacity-30 focus:ring-red-600 
        bg-red-400 text-black placeholder-gray-500 border 
        lg:border-gray-400 lg:bg-white lg:text-black lg:placeholder-black 
        border-gray-300 rounded-lg ${inputClassName}`}
        {...props}
      />
      {postText && (
        <p className="lg:text-gray-300 mt-1 text-xs text-center text-black">
          {postText}
        </p>
      )}

      {error && (
        <p
          className="mt-1 text-xs font-semibold tracking-wider text-center 
        text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomInputField;
