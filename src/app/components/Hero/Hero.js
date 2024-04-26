import React from "react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
const Hero = () => {
  return (
    <div className="">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[350px] lg:h-[500px]   banner_image3 ">
            <div className="z-50 lg:p-36 md:24 p-10">
              <Fade direction="down" duration={1200}>
                <h2 className="capitalize text-5xl  md:text-6xl font-extrabold text-white md:w-[60%] lg:w-[40%] w-[90%]">
                  Explore the <span className="text-[#F26f55]"> world</span> now
                </h2>
              </Fade>

              <Fade duration={1200}>
                <p className="w-[90%] md:w-[70%] lg:w-[60%] text-white py-4">
                  Our team of experienced travel experts will help you plan your
                  trip from start to finish, ensuring your dream vacation
                  becomes a reality. Don't wait any longer
                </p>
              </Fade>

              <Fade direction="up" duration={1200}>
                <button className="bg-[#F26f55] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55]">
                  View Trips
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[350px] lg:h-[500px]   banner_image2 ">
            <div className="z-50 lg:p-36 md:24 p-10">
              <Fade direction="down" duration={1200}>
                <h2 className="capitalize text-5xl  md:text-6xl font-extrabold text-white md:w-[60%] lg:w-[40%] w-[90%]">
                  Explore the <span className="text-[#F26f55]"> world</span> now
                </h2>
              </Fade>

              <Fade duration={1200}>
                <p className="w-[90%] md:w-[70%] lg:w-[60%] text-white py-4">
                  Our team of experienced travel experts will help you plan your
                  trip from start to finish, ensuring your dream vacation
                  becomes a reality. Don't wait any longer
                </p>
              </Fade>

              <Fade direction="up" duration={1200}>
                <button className="bg-[#F26f55] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55]">
                  View Trips
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[350px] lg:h-[500px]   banner_image ">
            <div className="z-50 lg:p-36 md:24 p-10">
              <Fade direction="down" duration={1200}>
                <h2 className="capitalize text-5xl  md:text-6xl font-extrabold text-white md:w-[60%] lg:w-[40%] w-[90%]">
                  Explore the <span className="text-[#F26f55]"> world</span> now
                </h2>
              </Fade>

              <Fade duration={1200}>
                <p className="w-[90%] md:w-[70%] lg:w-[60%] text-white py-4">
                  Our team of experienced travel experts will help you plan your
                  trip from start to finish, ensuring your dream vacation
                  becomes a reality. Don't wait any longer
                </p>
              </Fade>

              <Fade direction="up" duration={1200}>
                <button className="bg-[#F26f55] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55]">
                  View Trips
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
