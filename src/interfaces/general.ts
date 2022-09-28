import { ButtonHTMLAttributes } from "react";

export type LayoutTypes = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant: "outlined" | "primary";
  [key: string]: any;
}
