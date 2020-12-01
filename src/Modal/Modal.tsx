import React, { useState } from "react";
import Button from "../Button/Button";
import classNames from "classnames";

import { IProps, IHeaderProps, IContentProps } from './types';

import "./styles.scss";

export const ModalHeader: React.FC<IHeaderProps> = ({ 
  children,
  classes,
  styles,
}) => {
  const elementClasses = classNames('modal_header', classes);
  return (
    <div className={elementClasses} style={styles}>{children}</div>
  )
};

export const ModalContent: React.FC<IContentProps> = ({ 
  children,
  classes,
  styles,
}) => {
  const elementClasses = classNames('modal_content', classes);
  return (
    <div className={elementClasses} style={styles}>{children}</div>
  )
};

export const Modal: React.FC<IProps> = ({
  children,
  classes,
  styles,
  trigger,
  close,
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
    switch (trigger.type) {
      case 'button':
        return (
          <Button callback={handleOpen}>
            {trigger.label}
          </Button>
        );
      case 'icon':
        return (
          <div className="modal_icon" onClick={handleOpen}>{(trigger.icon) ? trigger.icon : 'close'}</div>
        );
      case 'text':
        return (
          <div className="modal_text" onClick={handleOpen}>
            {trigger.label}
          </div>
        );
    }
  }

  const elementClasses = classNames('modal', classes);

  return (
    <React.Fragment>
      <div className="modal_action">{renderAction()}</div>
      {(open) 
        ? <div className="modal_bg" style={{ animation: (!isClosing) ? "fadeInBg 0.35s" : "fadeOutBg 0.65s" }} >
            <section 
              className={elementClasses} 
              style={{ ...styles, animation: (!isClosing) ? "fadeIn 0.65s" : "fadeOut 0.65s" }} 
              onAnimationEnd={handleClose}
            >
              <div className="modal_container">
                <div className="modal_close" onClick={() => setIsClosing(true)}>
                  {(close) ? close : 'close'}
                </div>
                {children}
              </div>
            </section>
          </div>
        : '' }
    </React.Fragment>
  );
}