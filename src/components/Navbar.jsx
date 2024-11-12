import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ token, handleLogout }) => {
  const liClasses =
    "py-2 px-3 cursor-pointer hover:bg-[#c1d4da] transition rounded-sm";
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navigate = useNavigate();

  return (
    <header className="flex justify-between p-4 shadow-md items-center bg-slate-300">
      <h2
        className="cursor-pointer  ml-10 text-2xl font-bold text-[#333]"
        onClick={() => navigate("/")}
      >
        BaseAuth
      </h2>
      <ul className="hidden md:flex gap-4 uppercase font-medium text-[#333]">
        {token && (
          <li className={liClasses} onClick={handleLogout}>
            Sign Out
          </li>
        )}
      </ul>

      {/* <span
        className="md:hidden cursor-pointer text-[#333]"
        onClick={toggleNavbar}
      >
        <i className="fa-solid fa-bars"></i>
      </span>
      <div
        className={`absolute md:hidden right-0 top-0 transition-transform ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        } bg-slate-600 shadow-md w-full sm:w-9/12 h-full`}
      >
        <div className="flex">
          <span className="m-4 ml-auto cursor-pointer" onClick={toggleNavbar}>
            <i className="fa-solid fa-xmark text-[#333]"></i>
          </span>
        </div>
        <ul className="flex flex-col gap-4 uppercase font-medium text-center text-[#333]">
          {token && (
            <li className={liClasses} onClick={handleLogout}>
              Sign Out
            </li>
          )}
        </ul>
      </div> */}
    </header>
  );
};

export default Navbar;
