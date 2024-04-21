import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Booking = () => {
  const [user, setUser] = useState();

  const [allUser, setAllUsers] = useState([]);
  const userData = useSelector((state) => state?.user?.user);

  const [data, setData] = useState({
    package: "",
    date: "",
    time: "",
    userId: "",
    staffId: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
        ["userId"]: userData?._id,
      };
    });
  };
  const createBooking = async (e) => {
    e.preventDefault();

    console.log(data);

    const dataResponse = await fetch(SummaryApi.createBooking.url, {
      method: SummaryApi.createBooking.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataApi = await dataResponse.json();
    console.log(dataApi);

    if (dataApi.success) {
      toast.success(dataApi.message);
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUser.url, {
      method: SummaryApi.allUser.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      const filterUser = dataResponse.data.filter(
        (user) => user.role == "STAFF"
      );
      setAllUsers(filterUser);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const packages = [
    "FACIAL",
    "BLEACH",
    "WAXING",
    "MANI CURE",
    "HAIR CARE",
    "MAKEUP",
    "PRE BRIDAL",
    "BODY DEALS",
    "BRIDAL",
    "THREADING",
    "MEHENDI",
  ];

  return (
    <div className=" flex flex-col items-center ">
      <h1 className="text-3xl text-yellow-600 font-bold py-10">
        Book Your Service
      </h1>
      <form
        onSubmit={createBooking}
        className="w-full h-full items-center flex flex-col text-2xl gap-y-5"
      >
        <label className="text-purple-500 font-semibold" htmlFor="package">
          Choose a package:
        </label>
        <select
          onChange={handleOnChange}
          className=""
          name="package"
          id="package"
        >
          {packages.map((pak, index) => (
            <option key={index} value={pak}>
              {pak}
            </option>
          ))}
        </select>

        {allUser.length > 0 ? (
          <div className=" flex flex-col">
            <label className="text-purple-500 font-semibold" htmlFor="package">
              Choose a staff:
            </label>

            <select
              onChange={handleOnChange}
              className=""
              name="staffId"
              id="staffId"
            >
              {allUser.map((staff, index) => (
                <option key={index} value={staff._id}>
                  {staff.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <label className="text-purple-500 font-semibold" htmlFor="package">
            No Staff Available
          </label>
        )}

        <label className="text-purple-500 font-semibold" htmlFor="date">
          Choose a date:
        </label>
        <input onChange={handleOnChange} type="date" name="date" id="date" />
        <label className="text-purple-500 font-semibold" htmlFor="time">
          Choose a time:
        </label>
        <input onChange={handleOnChange} type="time" name="time" id="time" />

        <button
          className="bg-purple-800 px-4 py-3 rounded-md text-white "
          type="submit"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default Booking;
