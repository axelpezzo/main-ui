import { CSSProperties } from "react";

export interface IProps {
  children: string,
  disabled?: boolean,
  classes?: string,
  styles?: CSSProperties,
  link?: {
    href: string;
    target: "_blank" | "_self" | "_parent" | "_top"
  },
  icon?: {
    src: JSX.Element;
    position?: "top" | "bottom" | "right" | "left"
  };
  callback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

