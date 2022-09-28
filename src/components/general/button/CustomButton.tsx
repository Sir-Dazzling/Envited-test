import React from "react";
import { CustomButtonProps } from "../../../interfaces/general";
import styles from "./CustomButton.module.css";

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  children,
  className,
  isLoading = false,
  ...props
}) => {
  let buttonStyle = "";
  const primaryButton = "ripple-bg-red-500 bg-purple-500 text-white";
  const outlinedButton =
    "bg-transparent border-green text-green hover:bg-green hover:text-white";

  switch (variant) {
    case "primary":
      buttonStyle = primaryButton;
      break;

    case "outlined":
      buttonStyle = outlinedButton;
      break;

    default:
      buttonStyle = "";
      break;
  }

  return (
    <button
      disabled={isLoading || props.disabled}
      className={`disabled:opacity-80 disabled:cursor-not-allowed relative px-5 py-4 ${
        isLoading && "flex justify-center items-center"
      }  border-2 focus:outline-none outline-none rounded-md ${buttonStyle} ${className}`}
      {...props}
    >
      {isLoading ? (
        <div
          className={`${styles.spinner}  animate-spin spinner inline-block text-center rounded-full`}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
