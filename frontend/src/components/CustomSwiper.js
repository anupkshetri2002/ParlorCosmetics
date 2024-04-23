import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CustomSwiper = () => {
  return (
    <div className="h-full relative w-[40%] z-50">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="absolute w-full h-full  object-cover  "
            src="salon.jpg"
            alt="salon"
          />

        </SwiperSlide>
        <SwiperSlide>
          <img
            className="absolute w-full h-full  object-cover  "
            src="salon1.jpg"
            alt="salon1"
          />

          
        </SwiperSlide>
        <SwiperSlide >
          <img
            className="absolute w-full h-full  object-cover  "
            src="salon2.jpg"
            alt="salon2"
          />
         
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
