import React, { useContext, useState } from "react";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import ROLE from "../common/role";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Context from "../context";

const Button = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };
  return (
    <div className="text-3xl flex flex-col space-y-6 md:space-y-0 mini:space-x-10 mini:flex-row mini:mt-6  ">
      {user?._id && (
        <div
          className="text-3xl cursor-pointer relative flex justify-center"
          onClick={() => setMenuDisplay((preve) => !preve)}
        >
          {user?.profilePic ? (
            <img
              src={user?.profilePic}
              className="w-10 h-10 rounded-full"
              alt={user?.name}
            />
          ) : (
            <CiUser className="flex items-center" />
          )}
        </div>
      )}

      {menuDisplay && (
        <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
          <nav>
            {user?.role === ROLE.ADMIN && (
              <Link
                to={"/admin-panel/all-products"}
                className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                onClick={() => setMenuDisplay((preve) => !preve)}
              >
                Admin Panel
              </Link>
            )}
          </nav>
        </div>
      )}

      <div>
        {user?._id ? (
          <button
            onClick={handleLogout}
            className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/login"}
            className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
          >
            Login
          </Link>
        )}
      </div>

      {user?._id && (
            <Link to={"/cart"} className="text-2xl relative">
              <span>
              <BsCart2 className="flex items-center" />
    
              </span>

              <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">{context?.cartProductCount}</p>
              </div>
            </Link>
          )}
      </div>
  );
};

export default Button;