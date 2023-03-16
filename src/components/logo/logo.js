import React from 'react';
import logo from "./logo.jpg"
import css from "./logo.module.scss"
const Logo = () => {
  return (
    <div>
      <img className={css.logo} src={logo} alt=""/>
    </div>
  );
};

export default Logo;