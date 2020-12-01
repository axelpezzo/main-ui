import React from "react";
import classNames from "classnames";
import { IProps } from "./types";
import "./styles.scss";

const Button: React.FC<IProps> = ({
  children,
  disabled,
  classes,
  styles,
  link,
  icon,
  callback,
}) => {

  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const renderText = () => {
    return (
      <span className="btn-label">{children}</span>
    );
  }

  const renderIcon = () => {
    switch (icon?.position) {
      case "top":
        return (
          <React.Fragment>
            <div className="btn-icon btn-icon-top">
              {icon.src}
            </div>
            {renderText()}
          </React.Fragment>
        )
      case "bottom":
        return (
          <React.Fragment>
            {renderText()}
            <div className="btn-icon btn-icon-bottom">
              {icon.src}
            </div>
          </React.Fragment>
        )
      case "left":
        return (
          <React.Fragment>
            <div className="btn-icon btn-icon-left">
              {icon.src}
            </div>
            {renderText()}
          </React.Fragment>
        )
      case "right":
        return (
          <React.Fragment>
            {renderText()}
            <div className="btn-icon btn-icon-right">
              {icon.src}
            </div>
          </React.Fragment>
        )
      default:
        return (
          <React.Fragment>
            <div className="btn-icon">
              {icon?.src}
            </div>
          </React.Fragment>
        )
    }
  }

  const renderValue = () => {
    if(icon) {
      return renderIcon();
    } else {
      return renderText();
    }
  }

  const elementClasses = classNames('btn', classes, {
    'btn-disabled': disabled,
    'btn-pressed': isPressed,
    'btn-hovered': !disabled && !isPressed && isHovered
  });

  return (
    <React.Fragment>
      {(link) ? 
        <a 
          className={elementClasses}
          style={styles}
          href={link.href}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          target={link.target}
          rel="noopener"
        >
          {renderValue()}
        </a> :
        <button 
          className={elementClasses}
          disabled={disabled}
          style={styles}
          onClick={callback}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
        >
          {renderValue()}
        </button>
      }
    </React.Fragment>
  )
}

export default Button;