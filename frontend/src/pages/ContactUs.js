import React from "react";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState("Send Mail");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    console.log(conFom);
  };
  return (
    <div className="h-full w-full flex flex-col items-center justify-center pt-12 space-y-2">
      <div className=" bg-[#fcf7ee] rounded-xl  w-[80%] flex flex-wrap justify-around ">
        <div className="h-full ">
          <div>
            <h1 className=" text-[2rem] font-logo3">CONTACT FORM</h1>
          </div>
          <div className=" pt-5">
            <h1 className=" text-[3rem] font-logo">Ask Us Anything</h1>
          </div>

          <div className="container mt-5">
            <form onSubmit={onSubmit}>
              <div className="h-20 w-full flex">
                <label className=" font-logo text-2xl" htmlFor="name">
                  Name:
                </label>
                <input
                  className="h-[50%] ml-2 w-full border-2"
                  type="text "
                  id="name"
                  required
                />
              </div>
              <div className="h-20 w-full flex">
                <label className="font-logo text-2xl" htmlFor="email">
                  Email:
                </label>
                <input
                  className="h-[50%] ml-2 w-full border-2"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="h-full w-full flex">
                <label className="font-logo text-2xl" htmlFor="message">
                  Message:
                </label>
                <textarea
                  className="h-[12rem]  w-full border-2"
                  id="message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-orange-400 text-white w-[50%] h-12 mt-2 mb-3 ml- hover:bg-orange-500  "
              >
                {formStatus}
              </button>
            </form>
          </div>
        </div>
        <div className="h-full w-[50%] flex flex-col items-center">
          <div className="h-[25%] w-[80%] mt-5">
            <div className="flex">
              <TiLocation className="text-5xl text-black pl-4" />
              <p className="text-4xl font-medium pl-4"> Address</p>
            </div>
            <h1 className="text-2xl font-logo  pt-4">
              {" "}
              Kathmandu, Baneshwor, Nepal Street-1124{" "}
            </h1>
          </div>
          <div className="h-[25%] w-[80%] mt-5">
            <div className="flex">
              <FaPhone className="text-5xl text-black pl-4" />
              <p className="text-4xl font-medium pl-4"> Phone</p>
            </div>
            <h1 className="text-2xl font-logo  pt-4">
              {" "}
              +977 9841583450 <br /> +977 9069123463{" "}
            </h1>
          </div>
          <div className="h-[25%] w-[80%] mt-5">
            <div className="flex">
              <CgMail className="text-5xl text-black pl-4" />
              <p className="text-4xl font-medium pl-4"> Email</p>
            </div>
            <h1 className="text-2xl font-logo  pt-4">
              {" "}
              Suppport@gmail.com <br /> contactus@gmail.com{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[30rem] w-full flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.819498665594!2d85.34292997713605!3d27.69197316480372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198f03394b37%3A0xcd7712094f490bf2!2sShantinagar%20Futsal!5e0!3m2!1sen!2snp!4v1709623073353!5m2!1sen!2snp"
          width="1300"
          height="450"
          styles="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
