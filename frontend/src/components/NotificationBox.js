import React, { useEffect, useState } from "react";
import { BsBell } from "react-icons/bs";
import SummaryApi from "../common";
import { toast } from "react-toastify";
const NotificationBox = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notification, setNotification] = useState([
    { title: "asdd", description: "sadasda" },
  ]);

  const getNotification = async () => {
    const response = await fetch(SummaryApi.getNotification.url, {
      method: SummaryApi.getNotification.method,
      credentials: "include",
    });

    const data = await response.json();

    if (data.success) {
      setNotification(data.data);
    } else {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    getNotification();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative" key={21}>
      <div
        key={"21"}
        className="px-3 text-left cursor-pointer text-[#75df4b] hover:underline text-xl mini:flex mini:text-xl"
        onClick={toggleDropdown}
      >
        <div class="relative">
          <div class="flex items-center">
            <span class="absolute top-0 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {notification?.length}
            </span>
            <BsBell className="text-2xl" />
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute z-50 top-full mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
          {notification?.map((link) => (
            <div class="bg-gray-100 border-b border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <h1 class="text-lg font-bold">{link.title}</h1>
              <p class="mt-1">{link.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationBox;
