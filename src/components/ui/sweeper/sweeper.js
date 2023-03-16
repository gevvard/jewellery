import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import {useDispatch, useSelector} from "react-redux";
import css from "../sweeper/sweeper.module.scss"
import  product1 from "../../image/product7.png"
import  product2 from "../../image/product11.png"
import product3 from "../../image/product18.png"
import product4 from "../../image/product13.png"
import product5 from "../../image/product16.png"
const Sweeper =() =>{

  return (
    <>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      limit={10}
      modules={[Pagination]}
      className="mySwiper"
    >

         <SwiperSlide  >
            <img className={css.img} src={ product1} alt=""/>
         </SwiperSlide>
      <SwiperSlide  >
            <img className={css.img} src={ product2} alt=""/>
         </SwiperSlide>
      <SwiperSlide  >
        <img className={css.img} src={  product3} alt=""/>
      </SwiperSlide>
      <SwiperSlide  >
      <img className={css.img} src={  product4} alt=""/>
    </SwiperSlide>
      <SwiperSlide  >
      <img className={css.img} src={  product5} alt=""/>
    </SwiperSlide>


    </Swiper>

    </>
  );
}
export default Sweeper