import React, { useState } from "react";
import classNames from "classnames";
import { IProps } from './types';

import Arrow from "./arrow.svg";

import "./styles.scss";

const Collapse: React.FC<IProps> = ({
  children,
  header,
  openDefault,
}) => {

  const [open, setOpen] = useState((openDefault) ? openDefault : false);

  return (
    <div className={classNames("collapse", { open })}>
      <div className="collapse_header" onClick={() => setOpen(!open)}>
        {header}
        <img src={Arrow} className="icon_toggle" />
      </div>
      <div className="collapse_content">
        {children}
      </div>
    </div>
  );
}

export default Collapse;