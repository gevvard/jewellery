import React from 'react';
import css from "../footer/footer.module.scss"
const Footer = () => {
  const date = new Date().getFullYear()
  return (

    <div>
      <footer className={css.footer}>
        &copy; Copyright {date}
      </footer>
    </div>
  );
};

export default Footer;