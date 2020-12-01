import React from "react";

import "./styles.scss";
import { IPropsItem } from "./types";


export const CardContent: React.FC = ({ children }) => {
  return (
    <div className="card_content">{children}</div>
  )
};

export const CardItem: React.FC<IPropsItem> = ({ divider = true, children }) => {
  return (
    <React.Fragment>
      <div className="card_item">{children}</div>
      {(divider) ? <hr /> : ''}
    </React.Fragment>
  )
};

export const CardActions: React.FC = ({ children }) => {
  return (
    <div className="card_actions">{children}</div>
  )
};

export const Card: React.FC = ({
  children
}) => {
  return (
    <div className="card">
      {children}
    </div>
  );
}