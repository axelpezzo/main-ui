import { CSSProperties } from 'react';

export interface IProps {
  classes?: string,
  styles?: CSSProperties,
  close?: JSX.Element,
  trigger: {
    label: string,
    type: "button" | "icon" | "text",
    icon?: JSX.Element
  } 
}

export interface IHeaderProps {
  classes?: string,
  styles?: CSSProperties,
}

export interface IContentProps {
  classes?: string,
  styles?: CSSProperties,
}
