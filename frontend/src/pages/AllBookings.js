import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { MdModeEdit } from "react-icons/md";

const AllBookings = () => {
  const [allBooking, setAllBookings] = useState([]);
  const [allUser, setAllUsers] = useState([]);

  const getName = (id) => {
    const user = allUser.find((el) => el._id === id);
    return user?.name;
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

  const deleteBooking = async (id) => {
    console.log(id);
    const fetchData = await fetch(SummaryApi.deleteBookings.url, {
      method: SummaryApi.deleteBookings.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ bookingId: id }),
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message);
      fetchAllBookings();
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  const fetchAllBookings = async () => {
    const fetchData = await fetch(SummaryApi.allBookings.url, {
      method: SummaryApi.allBookings.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();
    console.log(dataResponse);

    if (dataResponse.success) {
      setAllBookings(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
    fetchAllBookings();
    console.log(allBooking);
  }, []);

  return (
    <div className="bg-white pb-4">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            {/* <th>User</th> */}
            <th>Staff</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {allBooking.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                {/* <td>{ getName(el?.userId)}</td> */}
                <td>{getName(el?.staffId)}</td>
                <td>{el?.date}</td>
                <td>{el?.time}</td>

                <td onClick={() => deleteBooking(el?._id)}>
                  <MdModeEdit />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllBookings;
