import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home2 = () => {
  return (
    <div className=" w-full p-2">
      <div className=" h-[30rem]">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
          <SwiperSlide className="h-full">
            <div className="w-full h-[30rem] bg-black">
              <img
                className="absolute w-full h-full object-cover opacity-50 "
                src="slider1.jpg"
                alt="slider1"
              />
              <div className="relative flex  flex-col items-start justify-center  flex-wrap  w-full h-full ">
                <div className="flex ml-40  mt-52  items-center">
                  <Link to="/booking">
                    <button className=" mini:w-52  bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-[30rem] bg-black">
              <img
                className="absolute w-full h-full  object-cover opacity-50 "
                src="slider2.jpg"
                alt="slider2"
              />
              <div className="relative flex  flex-col items-start justify-center  flex-wrap  w-full h-full ">
                <div className="flex ml-40  mt-52  items-center">
                  <Link to="/booking">
                    <button className=" mini:w-52  bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-[30rem] bg-black">
              <img
                className="absolute w-full h-full  object-cover opacity-50 "
                src="slider3.jpg"
                alt="slider3"
              />
              <div className="relative flex  flex-col items-start justify-center  flex-wrap  w-full h-full ">
                <div className="flex ml-40  mt-52  items-center">
                  <Link to="/booking">
                    <button className=" mini:w-52  bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-[30rem] bg-black">
              <img
                className="absolute w-full h-full  object-cover opacity-50 "
                src="slider4.jpg"
                alt="slider4"
              />
              <div className="relative flex  flex-col items-start justify-center  flex-wrap  w-full h-full ">
                <div className="flex ml-40  mt-52  items-center">
                  <Link to="/booking">
                    <button className=" mini:w-52  bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-[30rem] bg-black">
              <img
                className="absolute w-full h-full  object-cover opacity-50 "
                src="slider5.jpg"
                alt="slider5"
              />
              <div className="relative flex  flex-col items-start justify-center  flex-wrap  w-full h-full ">
                <div className="flex ml-40  mt-52  items-center">
                  <Link to="/booking">
                    <button className=" mini:w-52  bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-[30rem] bg-black">
              <img
                className="absolute w-full h-full  object-cover opacity-50 "
                src="slider6.jpg"
                alt="slider6"
              />
              <div className="relative flex  flex-col items-start justify-center  flex-wrap  w-full h-full ">
                <div className="flex ml-40  mt-52  items-center">
                  <Link to="/booking">
                    <button className=" mini:w-52  bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-[30rem] bg-black">
              <img
                className="absolute w-full h-full  object-cover opacity-50 "
                src="slider7.jpg"
                alt="slider7"
              />
              <div className="relative flex  flex-col items-start justify-center  flex-wrap  w-full h-full ">
                <div className="flex ml-40  mt-52  items-center">
                  <Link to="/booking">
                    <button className=" mini:w-52  bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-[30rem] bg-black">
              <img
                className="absolute w-full h-full  object-cover opacity-50 "
                src="slider8.jpg"
                alt="slider8"
              />
              <div className="relative flex  flex-col items-start justify-center  flex-wrap  w-full h-full ">
                <div className="flex ml-40  mt-52  items-center">
                  <Link to="/booking">
                    <button className=" mini:w-52  bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-[30rem] bg-black">
              <img
                className="absolute w-full h-full  object-cover opacity-50 "
                src="slider9.jpg"
                alt="slider9"
              />
              <div className="relative flex  flex-col items-start justify-center  flex-wrap  w-full h-full ">
                <div className="flex ml-40  mt-52  items-center">
                  <Link to="/booking">
                    <button className=" mini:w-52  bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-32  w-full flex flex-col items-center  bg-slate-100">
        <div className="h-14 w-[80%]  flex justify-center items-center">
          <p className="font-logo2 text-3xl ">Welcome to Aries Salon</p>
        </div>
        <div className="h-14 w-[80%]  flex justify-center items-center">
          <p className="font-logo3 text-4xl  "> Salon At Home</p>
        </div>
      </div>
      <div className=" h-[48rem]  w-full flex flex-col items-center">
        <div className="h-[12rem] w-[90%] flex items-center justify-center  ">
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="package.png"
                alt="Packages"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className="h-[20%] flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl ">
                {" "}
                PACKAGES{" "}
              </p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="Facial.jpg"
                alt="Facial"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                FACIAL{" "}
              </p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="dtan.jpg"
                alt="Dtan"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center ">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                BLEACH
              </p>
            </div>
          </div>
        </div>
        <div className="h-[12rem] w-[90%] flex items-center justify-center  ">
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="Waxing.jpg"
                alt="Waxing"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                WAXING
              </p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="hair.jpg"
                alt="Hair"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                HAIR CARE{" "}
              </p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="mani.jpg"
                alt="Mani cure"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                MANI CURE{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="h-[12rem] w-[90%] flex items-center justify-center  ">
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="makeup.jpg"
                alt="Makeup"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                MAKEUP{" "}
              </p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="bridal.jpg"
                alt="pre-Bridal"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                PRE-BRIDAL{" "}
              </p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="massage.jpg"
                alt="Waxing"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                BODY DEALS{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="h-[12rem] w-[90%] flex items-center justify-center  ">
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="bride.jpg"
                alt="Bridal-makeup"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                BRIDAL{" "}
              </p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="threading.jpg"
                alt="threading"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                THREADING{" "}
              </p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className="h-[80%] flex items-center justify-center ">
              <img
                src="mehendi.jpg"
                alt="mehendi"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <div className=" flex justify-center">
              <p className=" font-extrabold text-[12px] mini:text-2xl">
                {" "}
                MEHENDI{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[30rem] w-full flex">
        <div className="h-full w-full ">
          <div className="w-full flex justify-center flex-col">
            <div className="w-full flex justify-center">
              <h1 className="text-7xl font-logo3 text-[#EADFB4]">OUR SALON</h1>
            </div>
            <div className="h-full w-full mt-9">
              <h1 className="text-xl  font-logo text-[#9BB0C1] items-center justify-center pl-3">
                Welcome to Salon Beni! After being greeted by our friendly
                staff, we invite you to enjoy our complimentary beverages and
                home made snacks and relax in our fireplace seating area.
              </h1>
            </div>
            <div className="h-full w-full mt-9">
              <h1 className="text-xl  font-logo text-[#9BB0C1] items-center justify-center pl-3">
                Our team takes part in ongoing continuing education. We build a
                foundation by dedicating one night each week to provide our
                apprentices with hands-on learning to develop their craft.{" "}
              </h1>
            </div>
            <div className="h-full w-full mt-9">
              <h1 className="text-xl  font-logo text-[#9BB0C1] items-center justify-center pl-3">
                We continue stylist education through in-salon programs
                including color formulating, cutting, and motivational speaking.
                In addition, our staff frequently trains with the premier hair
                stylists and product companies worldwide.{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="h-full w-[40%]">
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
            <SwiperSlide>
              <img
                className="absolute w-full h-full  object-cover  "
                src="salon2.jpg"
                alt="salon2"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home2;
