import React from 'react';
import Sweeper from "../../ui/sweeper/sweeper";
import css from "./home.module.scss"

const Home = () => {
  return (
    <div className={css.home} >
      <Sweeper/>
      <div></div>
    </div>
  );
};

export default Home;