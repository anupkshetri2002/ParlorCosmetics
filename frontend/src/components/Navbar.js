import React, { useContext, useState } from "react";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Context from "../context";
import { setMode } from "../store/mainSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const main = useSelector((state) => state?.main);
  const toggleMode = () => {
    if (main.mode == "STORE") {
      dispatch(setMode("PARLOR"));
      navigate("/home2");
    } else {
      dispatch(setMode("STORE"));
      navigate("/");
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <nav className="bg-[#A367B1]  ">
      <div className=" flex items-center h-full font-medium justify-around ">
        <div className="z-[-10rem] p-5 mini:w-auto w-full flex justify-between ">
          <div className="md:cursor-pointer h-11 w-[5.1rem] ">
            {main.mode == "STORE" ? (
              <Link to="/">
                <div className="flex justify-center items-center absolute ">
                  <h1 className="font-logo2 text-xl mini:text-2xl mt-3  text-[#f6c356]">
                    AERIES
                  </h1>
                </div>
              </Link>
            ) : (
              <Link to="/home2">
                <div className="flex justify-center items-center absolute ">
                  <h1 className="font-logo2 text-xl mini:text-2xl mt-3  text-[#f6c356]">
                    AERIES
                  </h1>
                </div>
              </Link>
            )}
          </div>
          {main.mode == "STORE" ? (
            <div
              className="md:cursor-pointer h-11 w-[5.1rem]"
              onClick={toggleMode}
            >
              <div>
                <div className="ml-3 flex justify-center items-center absolute ">
                  <h1 className="font-logo2  text-xl mini:text-2xl mt-3  text-[#f6c356]">
                    STORE
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="md:cursor-pointer h-11 w-[5.1rem] "
              onClick={toggleMode}
            >
              <div>
                <div className="ml-3 flex justify-center items-center absolute ">
                  <h1 className="font-logo2  text-xl mini:text-2xl mt-3  text-[#f6c356]">
                    PARLOR
                  </h1>
                </div>
              </div>
            </div>
          )}
          <div
            onClick={() => setOpen(!open)}
            className={`text-3xl absolute cursor-pointer right-8 z-30 top-6 mini:hidden `}
          >
            {!open && <CiMenuBurger></CiMenuBurger>}
          </div>
        </div>

        <ul className="mini:flex hidden uppercase items-center gap-8 font-logo ">
          <li></li>
          <NavLinks />
        </ul>
        <div className="mini:block hidden ">
          <Button />
        </div>
        {/* Mobile Responsive */}
        <ul
          className={`
        mini:hidden flex-row  bg-[#6b5e78] fixed w-[40%] hover:underline opacity-60 top-0 z-20 overflow-y-auto bottom-0 py-4 pl-4
        duration-500 ${open ? "right-0" : "right-[-100%] bg-[#A367B1]"}
        `}
        >
          <li>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute cursor-pointer right-8 z-30 top-6 mini:hidden 
        flex "
            >
              <MdOutlineClose></MdOutlineClose>
            </div>
          </li>
          <NavLinks />
          <div className="py-5 flex">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
