import React from "react";
import classNames from "classnames";

import "./styles.scss";
import { IProps } from "./types";

export const CardContent: React.FC<IProps> = ({ 
  children,
  classes,
  styles,
}) => {
  const elementClasses = classNames('card_content', classes);
  return (
    <div className={elementClasses} style={styles}>{children}</div>
  )
};

export const CardItem: React.FC<IProps> = ({
  children,
  classes,
  styles,
}) => {
  const elementClasses = classNames('card_item', classes);
  return (
    <div className={elementClasses} style={styles}>{children}</div>
  )
};

export const CardActions: React.FC<IProps> = ({ 
  children,
  classes,
  styles,
}) => {
  const elementClasses = classNames('card_actions', classes);
  return (
    <div className={elementClasses} style={styles}>{children}</div>
  )
};

export const Card: React.FC<IProps> = ({
  children,
  classes,
  styles,
}) => {
  const elementClasses = classNames('card', classes);
  return (
    <div className={elementClasses} style={styles}>
      {children}
    </div>
  );
}