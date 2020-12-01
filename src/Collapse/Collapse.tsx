import React, { useState } from "react";
import classNames from "classnames";
import { TProps, THeaderProps, TContentProps } from './types';

import "./styles.scss";

export const CollapseHeader: React.FC<THeaderProps> = ({ 
  children,
  classes,
  styles,
  open,
  setOpen,
  trigger,
}) => {
  const elementClasses = classNames('collapse_header', classes);
  return (
    <div className={elementClasses} style={styles} onClick={(setOpen) ? () => setOpen(!open) : () => console.log('setOpen is not defined')}>
      {children}
      <div className="icon_toggle">{(trigger) ? trigger : 'trigger'}</div>
    </div>
  )
};

export const CollapseContent: React.FC<TContentProps> = ({
  children,
  classes,
  styles,
}) => {
  const elementClasses = classNames('collapse_content', classes);
  return (
    <div className={elementClasses} style={styles}>{children}</div>
  )
};

export const Collapse: React.FC<TProps> = ({
  children,  
  classes,
  styles,
  trigger,
  openDefault,
}) => {

  const [open, setOpen] = useState((openDefault) ? openDefault : false);
  const elementClasses = classNames('collapse', classes, { open });
  console.log(open);
  console.log(openDefault);

  return (
    <div className={elementClasses} style={styles}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          if(child.type === CollapseHeader){
            return React.cloneElement(child, { open, setOpen, trigger });
          } else {
            return React.cloneElement(child);
          }
        }
      })}
    </div>
  );
}