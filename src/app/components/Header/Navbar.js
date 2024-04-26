import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import useTheme from "../../hook/useTheme";
import { BiSun } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  const [Toggle, setToggle] = useState(false);
  const [nextTheme, setTheme] = useTheme();
  const user = null;

  const navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-lg font-[600]   py-3  text-[#F26f55]" : "text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alltourists"
          className={({ isActive }) =>
            isActive ? " text-lg font-[600]   py-3  text-[#F26f55]" : "text-lg"
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addtourists"
          className={({ isActive }) =>
            isActive ? " text-lg font-[600]   py-3  text-[#F26f55]" : "text-lg"
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mylist"
          className={({ isActive }) =>
            isActive ? " text-lg font-[600]   py-3  text-[#F26f55]" : "text-lg"
          }
        >
          My List
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="w-full border-b dark:bg-gray-800 dark:text-white bg-white dark:border-b-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <div className="flex space-x-2">
            <Link className="text-3xl font-bold font-heading" to="/">
              Travelo
            </Link>
          </div>
          <div>
            <ul
              className={` ${
                toggle
                  ? "flex  fixed top-0 right-0 w-48 bg-slate-100 dark:bg-gray-800 h-full flex-col justify-center items-center z-50 gap-2"
                  : "md:flex items-center hidden space-x-7"
              }`}
            >
              {navitems}
              <span
                className="md:hidden absolute top-3 right-[155px] dark:text-white"
                onClick={() => settoggle(false)}
              >
                <GrFormClose
                  size={23}
                  className="dark:bg-white rounded-full text-gray-800"
                />
              </span>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <div className="pr-3" onClick={() => setTheme(nextTheme)}>
              {nextTheme === "dark" ? (
                <BsMoonFill size={20} />
              ) : (
                <BiSun size={20} />
              )}
            </div>
            <div className="relative">
              {!user ? (
                <div className="flex gap-4">
                  <Link to="/login">
                    <button className="bg-[#F26f55] text-white px-4 py-2 rounded-md ">
                      Login
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="bg-[#F26f55] text-white px-4 py-2 rounded-md ">
                      Register
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <img
                    onClick={() => setToggle(!Toggle)}
                    src={
                      user && user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/3cXqr9P/profile1.png"
                    }
                    alt="user-logo"
                    className="w-10 h-10 rounded-full object-cover bg-gray-800 p-1 border"
                    loading="lazy"
                  />
                  <button className="bg-gray-700 text-white px-4 py-2 rounded-md ">
                    Logout
                  </button>
                </div>
              )}
            </div>

            <span
              className=" md:hidden block dark:text-white"
              onClick={() => settoggle(true)}
            >
              <AiOutlineMenu size={22} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
