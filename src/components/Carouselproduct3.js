import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Carouselproduct3 = () => {
  return (
    <div className="bg-white m-3 border border-white mt-6 ">
      <div className="text-2xl font-semibold p-3">Best of Clothes</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
      >
        <div className="ml-1 space-x-2 hover:bg-sky-700 ... ">
          {Array.from({ length: 6 }, (_, i) => (
            <SwiperSlide key={i}>
              <Link to={`/singleproduct/${i + 15}`}>
                <img
                  src={`../images/img${i + 15}.jpg`}
                  className="h-[150px] w-[150px] transition-all duration-500 ease-in-out transform hover:scale-105"
                />
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Carouselproduct3;
