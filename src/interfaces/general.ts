import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

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

export type CreateEventLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
  heading: string;
  subheading?: string;
  title: string;
  afterText?: string;
  link?: string;
  linkText?: string;
};

export type CreateEventFormProps = {
  name: string;
  hostName: string;
  startDate: Date;
  endDate: Date;
  location: string;
  eventPhoto: any;
};

export interface CustomInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  errors: any;
  inputClassName: string;
  containerClassName: string;
  name: string;
  postText?: string;
}
