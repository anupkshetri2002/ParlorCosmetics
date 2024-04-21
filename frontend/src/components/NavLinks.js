import React from "react";
import { useNavigate } from "react-router-dom";

const NavLinks = () => {
  const navigate = useNavigate();
  const links = [
    { name: "About", link: "/About" },
    { name: "Blog", link: "/blog" },
    { name: "Gallery", link: "/gallary" },
    { name: "Pages", link: "/pages" },
  ];

  const sendTo = (link) => {
    navigate(link);
  };
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div
            key={link.name}
            className="px-3 text-left cursor-pointer text-[#75df4b] hover:underline text-xl mini:flex mini:text-xl  "
          >
            <div className="py-4">
              <div onClick={() => sendTo(link.link)}>{link.name}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
