import React from 'react';
import css from "../about/about.module.scss"
import {AiOutlineInstagram} from "@react-icons/all-files/ai/AiOutlineInstagram";
import {FiFacebook} from "@react-icons/all-files/fi/FiFacebook";
import {AiOutlineYoutube} from "@react-icons/all-files/ai/AiOutlineYoutube";





const About = () => {

  return (
    <div>
      <div className={css.about}>
        <h2>About us</h2>
        <p>

          GoldShop - an online gold market

          The websie iGold is created to help you to find any golden jewelry without leaving home and with no necessity
          of long searches. It is unique in Armenia since it gatheres all armenian gold sellers in one place. Our
          website opens up the entire Armenian gold market and gives you the opportunity to see the jewelry of the most
          famous gold producers, make a choice among the best offers and compare prices or quality offered by
          organizations operating in the gold market.

          The website iGold provides the following opportunities:

          For buyers - we provide the simplest form of use, assortment that is more than can be found anywhere else,
          various gold jewelry with their respective description and images (weight, standart, price, etc.), ability to
          purchase online without wasting time and many other features that you will discover when using our site.

          For sellers - it is an opportunity to show their products to a very large audience, the opportunity to get
          many new customers without any effort.

          The united platform iGold is an ideal environment for both buyer and seller. Here buyers can find exactly what
          he needs, from the extensive and boundless variety, and the sellers can acquire new customers a few kilometers
          away from their location and even abroad.

          As it is known, Armenian gold and the entire gold market are in great demand in Russia, Arab countries, Iran
          and European countries, as the gold jewelry of Armenia has high quality and is much more affordable. For
          international recognition of your products our website is operated in 6 languages - Armenian, Russian,
          English, French, Arabic, Persian. Only we provide such wide and multifunctional features.

          Hurry up to take your new and more attractive position in Armenian gold world! Your concurrents are already
          here, and you ?
        </p>

      </div>
      <div className={css.container}>
    <span className={css.span} >
      <FiFacebook/>
    </span>
        <span className={css.span}>
      <AiOutlineYoutube/>

    </span>
        <span className={css.span} >
      <AiOutlineInstagram/>
    </span>
      </div>
    </div>
  );
};

export default About;