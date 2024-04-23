import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavLinks = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    { name: "About", link: "/About" },
    { name: "Products", link: "/product-category" },
    { name: "Gallery", link: "/gallary" },
    // Add more links as needed
  ];

  const pagesLink = [
    { name: "Contact-US", link: "/contact-us" },
    { name: "Profile", link: "/profile" },
  ];

  const handleLinkClick = (link) => {
    navigate(link);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div
            key={link.name}
            className="text-left cursor-pointer text-[#75df4b] hover:underline text-xl mini:flex mini:text-xl"
            onClick={() => handleLinkClick(link.link)}
          >
            <div className="py-4">{link.name}</div>
          </div>
        </div>
      ))}
      <div className="relative pb-5" key={21}>
        <div
          key={"21"}
          className=" text-left cursor-pointer text-[#75df4b] hover:underline text-xl mini:flex mini:text-xl"
          onClick={toggleDropdown}
        >
          <div className="py-4 pt-9">Pages</div>
        </div>
        {isDropdownOpen && (
          <div className=" absolute z-50 top-full mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            {pagesLink.map((link) => (
              <div
                key={link.name}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLinkClick(link.link)}
              >
                {link.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;
