import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[300px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className=" mt-20 h-[75%] cursor-pointer"
        autoplay={{
          delay: 4500,
        }}
      >
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/076cd2a048e45a3a.jpg?q=20" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20" />
        </SwiperSlide> */}

        <SwiperSlide>
          <img src={"../images/imgbg1.jpg"} />
        </SwiperSlide>
      </Swiper>
      {/* <div className="h-[50%] bg-gradient-to-b from-slate-500" /> */}
    </div>
  );
};

export default Carousel;
