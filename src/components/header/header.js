import React from 'react';
import Menu from "../menu/menu";
import Logo from "../logo/logo"
import css from "./header.module.scss"
import SignIn from "../pages/Sign-In/signIn";



const Header = () => {


  return (
    <div className={css.header} >
      <Logo/>
      <Menu/>


    </div>
  );
};

export default Header;