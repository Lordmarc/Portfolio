import React, { useState } from "react";
import MyLogo from "../../assets/lg.png";
import { Link } from "react-router"; // ✅ Corrected import
import Download from "../Download/Download";
import Resume from "../../assets/Resumee.pdf";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev); // ✅ Toggle properly
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow-md">
      {/* Logo */}
      <img src={MyLogo} alt="logo" className="h-14 w-32" />

      {/* Menu Button for Mobile */}
      <div className="md:hidden">
        {showMenu ? (
          <IoMdClose onClick={handleMenu} className="text-2xl cursor-pointer" />
        ) : (
          <IoMdMenu onClick={handleMenu} className="text-2xl cursor-pointer" />
        )}
      </div>

    
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white flex-col items-center py-4 shadow-md md:static md:flex md:flex-row md:w-auto md:shadow-none`}
      >
        <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          <li className="link">
            <Link to="/project">Project</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Download Button */}
      <div className="hidden md:block">
        <Download fileUrl={Resume} fileName="My_Resume.pdf" />
      </div>
    </div>
  );
};

export default Navbar;
