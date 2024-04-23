import React, { useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassowrd = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const forgotPasswordHandler = async (e) => {
    const data = {
      email: email,
    };
    e.preventDefault();

    const response = await fetch(SummaryApi.forgotPassword.url, {
      method: SummaryApi.forgotPassword.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log(res);

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success(res.message);
      navigate("/recover-password");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
          <form onSubmit={(e) => forgotPasswordHandler(e)} className="mt-10">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#dc2626] hover:bg-red-900 text-white p-2 rounded-md"
             
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassowrd;
