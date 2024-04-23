import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";
import { MdCardMembership } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiBoxUnpacking } from "react-icons/gi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { TbVaccineBottleOff } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import SummaryApi from "../common";
import SearchProduct from "./SearchProduct";

const Home = () => {
  const user = useSelector((state) => state?.user?.user);

const createSubscrtption = async () => {
  try {
    const response = await fetch(SummaryApi.subscribe.url, {
      method: SummaryApi.subscribe.method,  
      body: JSON.stringify({
        userId: user._id,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data.message);
    toast.success(data.message);
  } catch (e) {
    console.log(e);
    toast.error(e.message);
  }
};

  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <div className="mini:h-[200px] h-96 p-5 w-full flex mini:text-7xl text-5xl bg-[#ecdec1] mt-4 flex-col mini:flex-row ">
        <div className="flex mini:h-[200px] mini:w-[33%] w:full pt-8 mini:pl-28 h-full">
          <div className=" absolute pl-20 mini:text-2xl text-xl mobile:text-4xl  font-logo pt-2">
          <button
            onClick={createSubscrtption}
            className="h-12 w-40 ml-2 bg-[#d2bfd3] hover:bg-black hover:text-white text-[#13070f] text-[18px] py-1 px-2 transition-all duration-300 ease-in-out"
          >
            Subscribe
          </button>
            <br /> <p className="font-boldFont">Get a Subscription</p>{" "}
          </div>
          <MdCardMembership />
        </div>
        <div className="flex mini:h-[200px] mini:w-[33%] w:full pt-8 mini:pl-28 h-full ">
          <div className=" absolute pl-20 mini:text-2xl text-xl  mobile:text-4xl font-logo pt-2">
            Customer Care
            <br /> <p className="font-boldFont">24 *7 Customer Support </p>
          </div>
          <TfiHeadphoneAlt />
        </div>
        <div className="flex mini:h-[200px] mini:w-[33%] w:full pt-8 mini:pl-28 h-full">
          <div className=" absolute pl-20 mini:text-2xl text-xl  mobile:text-4xl font-logo pt-2">
            Best Packing
            <br /> <p className="font-boldFont">Safe Delivery </p>
          </div>
          <GiBoxUnpacking />
        </div>
      </div>
      <div className=" flex items-center justify-center mini:flex-row mobile:flex-row flex-col mini:w-full mini:h-[38rem] mobile:h-[38rem] bg-[#EEF0E5]">
        <div className=" h-[20rem]  flex items-center justify-center mobile:w-[52rem] mobile:h-[16rem]  mini:h-[24rem] mini:w-[40rem]  bg-[#EEF0E5] ">
          <img
            className="object-cover h-full w-full pl-4 "
            src="picture1.png"
            alt="Cream"
          />
        </div>
        <div className="bg-[#EEF0E5] h-full mini:h-[38rem]">
          <p className="pl-3 text-[18px] font-serif mini:text-2xl mini:pt-12">
            PURE AND SIMPLE
          </p>
          <h1 className="text-3xl pl-3 font-boldFont mini:pt-4 mini:text-5xl pt-2">
            Deeply Nourishing Hair Serum For Glowing & Healthy Hair
          </h1>
          <div className="bg-[#EEF0E5]  h-[400px]">
            <div className="text-xl pl-3 mini:pt-5 mini:text-2xl pt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste in
              dolor minus deserunt id perspiciatis fugiat? Rem, numquam
              repellendus? Fugiat.
            </div>
            <div className="flex flex-col justify-between bg-[#EEF0E5] pl-5 pt-3 font-boldFont mt-4 mini:flex-row ">
              <div className="flex flex-row text-3xl mini:text-6xl">
                {" "}
                <IoLeafOutline />{" "}
                <h1 className="pl-7 text-xl mini:text-3xl">Strong & Smooth </h1>
              </div>
              <div className="flex flex-row text-3xl mini:text-6xl">
                {" "}
                <IoEarthOutline />{" "}
                <h1 className="pl-7 text-xl mini:text-3xl">Sulfate-Free </h1>
              </div>
              <div className="flex flex-row text-3xl mini:text-6xl">
                {" "}
                <TbVaccineBottleOff />{" "}
                <h1 className="pl-7 text-xl mini:text-3xl">Pareben-Free </h1>
              </div>

              <div className="flex flex-row text-3xl mini:text-6xl">
                {" "}
                <LuVegan />{" "}
                <h1 className="pl-7 text-xl mini:text-3xl">100% Vegan </h1>
              </div>
            </div>
            <div className="mini:h-[195px] h-[150px] flex flex-row bg-[#EEF0E5]">
              <div className="mt-10 ml-7 h-14">
                <button className="mini:h-12 mini:w-40 ml-2 bg-[#d2bfd3] hover:bg-black hover:text-white text-[#13070f] text-[18px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-2xl h-[3rem] w-[7rem] ">
                  Shop Now
                </button>{" "}
              </div>
              <div className=" h-28 w-40 mt-4 ml-4 mini:ml-40 mini:w-60 ">
                <div className="text-4xl mini:text-6xl">
                  <IoChatbubblesOutline />
                  <h1 className="text-[18px]  mini:text-2xl font-boldFont">
                    Chat Us At Anytime
                  </h1>
                  <h1 className="text-[20px]">+977 9841583459</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[45rem] w-full bg-[#  ] mt-12 mini:mt-0  mini:h-[35rem] bg-[#ecdec1]">
        <div className="h-[9rem] w-full flex  flex-col items-center">
          <h1 className="pt-9 font-logo text-xl mini:text-3xl">
            Best in Market
          </h1>
          <h1 className="pt-2 font-boldFont text-3xl mini:text-5xl">
            Healthiest Cosmetics
          </h1>
        </div>
        <div className=" h-[22rem] flex flex-col gap-y-6 items-center mini:flex-row mini:gap-x-10 mini:h-[18rem]">
          <div className="flex items-center flex-col mini:ml-24">
            <h1 className="text-4xl font-boldFont mini:text-6xl">4300k</h1>
            <h1 className="text-xl font-boldFont">Products Sold</h1>
          </div>
          <div className="flex items-center flex-col mini:ml-24">
            <h1 className="text-4xl font-boldFont mini:text-6xl">99.99%</h1>
            <h1 className="text-xl font-boldFont">Satisfaction Guaranteed</h1>
          </div>
          <div className="flex items-center flex-col mini:ml-20">
            <h1 className="text-4xl font-boldFont mini:text-6xl">42k</h1>
            <h1 className="text-xl font-boldFont">Customer Satisfied</h1>
          </div>
          <div className="flex items-center flex-col mini:ml-20">
            <h1 className="text-4xl font-boldFont mini:text-6xl">0.01%</h1>
            <h1 className="text-xl font-boldFont">Defective Returns</h1>
          </div>
        </div>
        <div className="mt-14 mini:h-[6rem] w-full h-[9rem] mini:w-[40rem] mini:ml-[23rem] mini:mt-0">
          <h1 className="font-serif text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h1>
        </div>
      </div>
      <div className="h-[67rem] w-full mobile:h-[105rem] mini:h-[41rem] bg-[#eef0e5]">
        <div className="h-[10rem] w-full flex flex-col items-center ">
          <h1 className="pt-7 text-2xl font-logo">Testimonial</h1>
          <h1 className="text-3xl font-boldFont">Our Client Reviews</h1>
        </div>
        <div className="h-[14rem] w-full   mini:flex mini:flex-row mini:gap-7">
          <div>
            <video
              src="cream.mp4"
              autoPlay
              loop
              muted
              className="w-80 h-72 object-cover mx-auto mini:mt-3 mini:h-[27rem] mini:w-[26rem] mini:ml-4 mobile:h-[30rem] mobile:w-[42rem]"
            />
          </div>
          <div>
            <video
              src="eyebrow.mp4"
              autoPlay
              loop
              muted
              className="w-80 h-72 object-cover mx-auto mt-3  mini:h-[27rem] mini:w-[26rem] mobile:h-[30rem] mobile:w-[42rem]"
            />
          </div>
          <div>
            <video
              src="lotion.mp4"
              autoPlay
              loop
              muted
              className="w-80 h-72 object-cover mx-auto mt-3  mini:h-[27rem] mini:w-[26rem] mobile:h-[30rem] mobile:w-[42rem]"
            />
          </div>
        </div>
      </div>
      <HorizontalCardProduct
        category={"skinCare"}
        heading={"Skin Care Products"}
      />
      <HorizontalCardProduct category={"perfumes"} heading={"Perfumes"} />
      <VerticalCardProduct
        category={"nails"}
        heading={"Nail and cuticle products"}
      />
      <VerticalCardProduct
        category={"oralCare"}
        heading={"Oral hygiene products"}
      />
      <VerticalCardProduct
        category={"hairs"}
        heading={"Hair and scalp products"}
      />

    </div>
  );
};

export default Home;
