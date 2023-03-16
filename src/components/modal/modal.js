import React from 'react';
import css from './modal.module.scss'


const Modal = ({children, close}) => {
  return (
    <div className={css.mask} onClick={close}>
      <div className={`${(css.modal, css.sidebar)}`} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;