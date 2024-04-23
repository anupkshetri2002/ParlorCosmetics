import React, { useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RecoverPassword = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    if (data.newPassword !== data.confirmPassword) {
      throw new Error("Password and Confirm Password do not match");
    }
    const response = await fetch(SummaryApi.recoverPassword.url, {
      method: SummaryApi.recoverPassword.method,
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
          <h1 className="text-2xl font-bold text-center">Recover Password</h1>
          <form className="mt-10">
            <div className="mb-5">
              <label htmlFor="token" className="block mb-2 text-sm">
                Token
              </label>
              <input
                type="text"
                id="token"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="newPassword"
                id="newPassword"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className="w-full bg-[#dc2626] text-white p-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
