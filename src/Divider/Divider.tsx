import React from "react";
import classNames from "classnames";
import { IProps } from "./types";
import "./styles.scss"

const Divider: React.FC<IProps> = ({
  orientation,
  classes,
  styles,
}) => {

  const elementClasses = classNames('divider', classes, {
    'divider-hor': (orientation == 'horizontal' || !orientation) ? true : false,
    'divider-ver': (orientation == 'vertical') ? true : false,
  });

  return (
    <React.Fragment>
      <hr 
        className={elementClasses}
        style={styles}
      />
    </React.Fragment>
  )
}

export default Divider;