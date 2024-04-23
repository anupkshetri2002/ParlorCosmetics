import React, { useContext, useState } from "react";

// import Logo from "../assest/products/logos.png";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import ROLE from "../common/role";
import Context from "../context";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

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
    <header className="h-16  w-[40%] z-40  rounded-lg">
      <div className=" h-full mx-auto flex items-center justify-between">
        
      <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow ">
  <input
    type="text"
    placeholder="Get Your Products here..."
    className="w-full outline-none py-2 px-4 rounded-l-full focus:ring-2 focus:ring-blue-500"
    onChange={handleSearch}
    value={search}
  />
  <button className="text-lg min-w-[50px] h-8  flex items-center justify-center rounded-r-full text-white focus:outline-none">
    <GrSearch />
  </button>
</div>


        
      </div>
    </header>
  );
};

export default Header;
