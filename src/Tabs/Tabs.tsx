import classNames from "classnames";
import React, { useState } from "react";
import { TProps, THeaderProps, TContentProps } from "./types";
import "./styles.scss";

export const TabsHeader: React.FC<THeaderProps> = ({ 
  children,
  classes,
  styles,
  currentIndex,
  setCurrentIndex,
}) => {
  const elementClasses = classNames('tabs_header', classes);
  return (
    <div className={elementClasses} style={styles}>
      <div className="tabs">
        {React.Children.map(children, (item, index) => {
          if (React.isValidElement(item)) {
            return (
              <div
                id={index.toString()}
                className={classNames("tab", { active: currentIndex === index })}
                key={index}
                onClick={() => (setCurrentIndex) ? setCurrentIndex(index) : () => console.log("setCurrentIndex must be defined")}
              >
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  )
}; 

export const TabsContent: React.FC<TContentProps> = ({ 
  children,
  classes,
  styles,
  currentIndex
}) => {
  const elementClasses = classNames('tabs_content', classes);
  const content = children[(currentIndex) ? currentIndex : 0];

  return (
    <div className={elementClasses} style={styles}>
      {(React.isValidElement(content)) ?
        <div className="panel grid">{content}</div> : ''}    
    </div>
  )
}; 

export const Tabs: React.FC<TProps> = ({ 
  children,
  classes,
  styles, 
}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const elementClasses = classNames('tabs', classes);
  
  return (
    <div className={elementClasses} style={styles}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          if(child.type === TabsHeader){
            return React.cloneElement(child, { open, currentIndex, setCurrentIndex });
          } else {
            return React.cloneElement(child, { open, currentIndex });
          }
        }
      })}
    </div>
  );
};
