import React from "react";
const About = () => {
  return (
    <div className="">
      <div className=" h-[35rem] w-full">
        <div className="absolute flex items-center justify-center h-full  w-full  ">
          <p className=" font-serif text-[#a367b1] text-6xl pb-16 text-center">
            ABOUT US
          </p>
        </div>
        <video
          src="homes.mp4"
          autoPlay
          loop
          muted
          className=" object-cover w-full h-full
              "
        />
      </div>
      <div className=" w-full flex flex-col">
        <div className="flex  flex-col items-center justify-center">
          <div>
            {" "}
            <p className="text-2xl font-sans text-[#F6995C]">OUR</p>
          </div>
          <div>
            <p className=" text-4xl font-serif pt-2 text-[#F6995C]">MISSION</p>
          </div>
        </div>
        <div className="flex justify-center px-10">
          <p className="text-center text-xl">
            Create an immersive online cosmetic shopping experience that
            captivates customers, offering a diverse range of high-quality
            beauty products that inspire confidence and self-expression.
            Prioritize user engagement through interactive features, such as
            virtual try-on tools and expert beauty tips, to enhance the shopping
            journey. Implement seamless checkout processes and personalized
            recommendations to foster customer loyalty and satisfaction. Embrace
            innovation and sustainability in product offerings while maintaining
            transparency and authenticity in brand communication.
          </p>
        </div>
      </div>
      <div className="pt-9">
        <div className=" w-full flex flex-col">
          <div className="flex  flex-col items-center justify-center">
            <div>
              {" "}
              <p className="text-2xl font-sans text-[#F6995C]">OUR</p>
            </div>
            <div>
              <p className=" text-4xl font-serif pt-2 text-[#F6995C] text-center">
                Experienced Stylist
              </p>
            </div>
          </div>
          <div className="flex flex-col  h-full mobile:flex-row w-full bg-white justify-around py-12 px-2">
            <div className="w-auto">
              <img
                className="object-fill w-full h-full "
                src="abhijan.jpg"
                alt="Cream"
              />
              <p className=" text-center font-serif">
                ABHIJAN BASYAl <br />
                SENIOR STYLIST
              </p>
            </div>

            <div className="w-auto] ">
              <img
                className="object- h-full w-full  "
                src="raj.jpg"
                alt="Cream"
              />
              <p className=" text-center font-serif">
                Raj Don <br />
                SENIOR STYLIST
              </p>
            </div>
            <div className="w-auto">
              <img
                className="object-fit h-full w-full"
                src="kirtan.jpg"
                alt="Cream"
              />
              <p className=" text-center font-serif">
                Kirtan <br />
                SENIOR STYLIST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
