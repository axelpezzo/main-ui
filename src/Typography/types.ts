import { CSSProperties } from "react";

export interface IProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "p" | "small" | "sup" | "sub"
  classes?: string,
  styles?: CSSProperties,
}

