import React, { useState } from "react";
import Button from "../Button/Button";

import { IProps } from './types';

import Close from "./close.svg";
import "./styles.scss";

const Modal: React.FC<IProps> = ({
  children,
  openLabel,
  typeLabel,
  title
}) => {

  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  }

  const handleClose = () => {
    if(isClosing) {
      document.body.style.overflow = "auto";
      setOpen(false);
      setIsClosing(false);
    }
  }

  const renderAction = (): JSX.Element =>{
    switch (typeLabel) {
      case 'button':
        return (
          <Button onClick={handleOpen}>
            {openLabel}
          </Button>
        );
      case 'icon':
        return (
          <img className="modal_icon" src={openLabel} onClick={handleOpen} /> 
        );
      case 'text':
        return (
          <div className="modal_text" onClick={handleOpen}>
            {openLabel}
          </div>
        );
    }
  }

  return (
    <React.Fragment>
      <div className="modal_action">{renderAction()}</div>
      {(open) 
        ? <div className="modal" style={{ animation: (!isClosing) ? "fadeInBg 0.35s" : "fadeOutBg 0.65s" }} >
            <section 
              className="modal_main" 
              style={{ animation: (!isClosing) ? "fadeIn 0.65s" : "fadeOut 0.65s" }} 
              onAnimationEnd={handleClose}
            >
              <div className="modal_container">
                <div className="modal_header">
                  <h6 className="modal_title">{title}</h6>
                  <img className="modal_close" onClick={() => setIsClosing(true)} src={Close} />
                </div>
                <div className="modal_content">
                  {children}
                </div>
              </div>
            </section>
          </div>
        : '' }
    </React.Fragment>
  );
}

export default Modal;