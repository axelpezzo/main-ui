import React from "react";
import classNames from "classnames";
import { IProps } from "./types";

const Typography: React.FC<IProps> = ({
  children,
  variant,
  classes,
  styles,
}) => {

  const Tag = variant ? variant : "p"

  const elementClasses = classNames('tg', classes, {
    [`tg-${variant}`]: (variant) ? true : false,
    "tg-p": (!variant) ? true : false
  });

  return ( 
    <Tag 
      className={elementClasses}
      style={styles}
    >
      {children}
    </Tag>

  );
}

export default Typography;